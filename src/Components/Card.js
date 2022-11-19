import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { AiOutlinePlusCircle, AiOutlineCheckCircle } from "react-icons/ai";
import {
  removeFromListWatch,
  addToListWatch
} from "../features/list/listSlice";
import { useDispatch, useSelector } from "react-redux";
import { LazyLoadImage } from "react-lazy-load-image-component";
import LoadingAnimation from "./LoadAnimation";
import getIndexOf from "../Functions/GetIndex";

const Img = styled(LazyLoadImage)`
  width: 96%;
  object-fit: cover;
  border-radius: 8px;
  margin: 0px auto;
  aspect-ratio: 6/ 8;
  box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
    rgb(0 0 0 / 73%) 0px 16px 10px -10px;
`;
const Details = styled.div`
  border-radius: 14px;
  display: none;
  position: absolute;
  align-items: flex-end;
  bottom: 0;
  right: 0%;
  left: 0%;
  top: 60%;
  background: rgb(0, 0, 0);
  background: linear-gradient(
    0deg,
    rgba(242, 5, 68, 1) 55%,
    rgba(242, 5, 68, 0.5) 96%
  );
  cursor: default;
  div {
    margin-bottom: 1rem;
    margin-left: 10%;
    flex-direction: column;
  }
  button {
    background: rgba(0, 0, 0, 0);
    border: none;
    color: White;
    cursor: pointer;
    display: flex;
    align-items: center;
    margin: 0.5rem 0 0s;
    padding-right: 1rem;
    &:hover {
      background-color: ${(p) => p.theme.color.mainDark};
    }
    svg {
      font-size: 1.25rem;
      margin-right: 3px;
    }
  }
`;

const LoadAnimation = styled(LoadingAnimation)`
  width: 96%;
  border-radius: 8px;
  margin: 0px auto;
  aspect-ratio: 6/ 8;
  box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
    rgb(0 0 0 / 73%) 0px 16px 10px -10px;
`;

function Card({ item, title, id }) {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  //watchlater list
  const findWatchLater = useSelector((state) => state.list.watchLater);
  //index in watchlater list
  const [index, setIndex] = useState(-1);

  //finding index in watchlater list
  useEffect(() => {
    const i = getIndexOf(findWatchLater, item._id);
    setIndex(i);
  }, [findWatchLater, item._id]);

  //Add to watchlater
  const addToWatchLaterHandler = () => {
    dispatch(addToListWatch({ type: title, id: item._id }));
  };
  //Remove from watchlater
  const removeFromWatchLater = (index) => {
    dispatch(removeFromListWatch(index));
  };
  return (
    <>
      <Img
        src={item?.thumbnail}
        alt=""
        width="100%"
        effect="blur"
        threshold={500}
        placeholder={<LoadAnimation />}
        onClick={() => {
          navigate(`/${title}/${item._id}`);
        }}
      />
      <Details>
        <div>
          <h4>{item?.name}</h4>
          {item?.seasons && <p>{item?.seasons} Seasons</p>}
          {item?.time && <p>{item?.time} </p>}
          <p>{item?.category}</p>

          {index < 0 ? (
            <button
              onClick={() => {
                addToWatchLaterHandler();
              }}>
              <AiOutlinePlusCircle />
              Add to Watchlist
            </button>
          ) : (
            <button
              onClick={() => {
                removeFromWatchLater(index);
              }}>
              <AiOutlineCheckCircle />
              Added to Watchlist
            </button>
          )}
        </div>
      </Details>
    </>
  );
}

export default Card;
