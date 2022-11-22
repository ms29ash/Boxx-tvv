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

const Container = styled.div`
position: relative;
cursor: pointer;
aspect-ratio: 6/ 8;
transition-property: all;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 250ms;
  color:#fff;
  overflow:visible;
  user-select: none;
  ${p => p.css}
  @media screen and (min-width: 1024px) and (max-width: 10000px) {
    &:hover {
      transform: scale(1.25);
      z-index: 10;
      div {
        opacity: 1;
      }
    }
  }


`

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
	transition-property: all; 
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
   transition-duration: 350ms;
  border-radius: 0 0 14px 14px;
  opacity: 0;
  position: absolute;
  align-items: flex-end;
  display:flex;
  bottom: 0;
  right: 0%;
  left: 0%;
  top: 60%;
  background: rgb(0, 0, 0);
  background: linear-gradient(
    0deg,
    rgba(242, 5, 68, 1) 55%,
    rgba(242, 5, 68, 0.3) 96%,
    rgb(242,5, 68,0) 100%
  );
  &>div {
    margin-bottom: 1rem;
    margin-left: 5%;
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

const SubDetails = styled.div`
margin-bottom:0.5rem;
p{
  text-transform:lowercase;
    font-size: 0.75rem;
  }
`

const LoadAnimation = styled(LoadingAnimation)`
  width: 96%;
  border-radius: 8px;
  margin: 0px auto;
  aspect-ratio: 6/ 8;
  box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
    rgb(0 0 0 / 73%) 0px 16px 10px -10px;
`;

function Card({ item, title, id, css }) {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  //watchlater list
  const { watchLater, loading } = useSelector((state) => state.list);
  //index in watchlater list
  const [index, setIndex] = useState(-1);

  //finding index in watchlater list
  useEffect(() => {
    const i = getIndexOf(watchLater, item._id);
    setIndex(i);
  }, [watchLater, item._id]);

  //Add to watchlater
  const addToWatchLaterHandler = (e) => {
    e.stopPropagation()
    dispatch(addToListWatch({ type: title, id: item._id }));
  };
  //Remove from watchlater
  const removeFromWatchLater = (e, index) => {
    e.stopPropagation()
    dispatch(removeFromListWatch(index));
  };
  return (
    <Container css={css} onClick={() => {
      navigate(`/${title}/${item._id}`);
    }} >
      <Img
        src={item?.thumbnail}
        alt=""
        width="100%"
        effect="blur"
        threshold={500}
        placeholder={<LoadAnimation />}

      />
      <Details>
        <div>
          <h4>{item?.name}</h4>
          <SubDetails>
            <p>{item?.category}</p>
            {item?.seasons ? (item.seasons > 1) ? <p>{item?.seasons} Seasons</p> : <p>{item.seasons} Season</p> : ''}
            {item?.time && <p>{item?.time} </p>}
          </SubDetails>

          {index < 0 ? (
            <button disabled={loading}
              onClick={(e) => {
                addToWatchLaterHandler(e);
              }}>
              <AiOutlinePlusCircle />
              Add to Watchlist
            </button>
          ) : (
            <button disabled={loading}
              onClick={(e) => {
                removeFromWatchLater(e, index);
              }}>
              <AiOutlineCheckCircle />
              Added to Watchlist
            </button>
          )}
        </div>
      </Details>
    </Container>
  );
}

export default Card;
