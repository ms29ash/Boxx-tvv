import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useQuery } from "@tanstack/react-query";
import { useLocation } from "react-router-dom";
import axios from "../axios";
import { GiPlainCircle } from "react-icons/gi";
import {
  AiOutlinePlusCircle,
  AiOutlinePlayCircle,
  AiOutlineCheckCircle,
} from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import {
  addToWatchlist,
  removefromWatchlist,
} from "../features/watchlist/watchlistSlice";
import ImageSlider from "../Components/ImageSlider";

const Container = styled.div`
  width: 100%;
`;
const Wrapper = styled.div`
  position: relative;
  width: 100%;
  img {
    object-fit: cover;
    height: auto;
    aspect-ratio: 16 / 8;
    width: 100%;
  }
`;

const Details = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  width: 100%;
  height: 100%;
  background: rgb(0, 0, 0);
  background: linear-gradient(
    90deg,
    rgba(0, 0, 0, 1) 0%,
    rgba(0, 0, 0, 0.87) 18%,
    rgba(0, 0, 0, 0.74) 46%,
    rgba(0, 0, 0, 0) 66%
  );
  @media screen and (min-width: 0px) and (max-width: 1000px) {
    position: static;
    background: #000;
  }
`;
const Group = styled.div`
  margin: 5%;

  h2 {
    font-size: 1.5rem;
  }
  p {
    margin: 0.5rem 0rem;
    font-weight: bold;
    font-size: 1.25rem;
  }
  @media screen and (max-width: 1280px) and (min-width: 0) {
    p {
      font-size: 1rem;
    }
  }
`;
const List = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  p {
    font-weight: 400;
  }
  svg {
    margin: 0 0.5rem;
    font-size: 0.5rem;
  }
`;

const Buttons = styled.div`
  display: flex;
  align-items: center;
`;
const PlayBtn = styled.button`
  background-color: ${(p) => p.theme.color.main};
  color: white;
  width: 200px;
  max-width: 200px;
  border: none;
  margin-right: 0.5rem;
  padding: 0.9rem 0;
  border-radius: 8px;
  font-weight: bold;
  font-size: 1rem;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  margin-bottom: 5%;
  svg {
    font-weight: bold;
    font-size: 1.75rem;
    margin-right: 0.5rem;
  }

  &:hover {
    background-color: ${(p) => p.theme.color.mainDark};
  }

  @media screen and (min-width: 0px) and (max-width: 1000px) {
    font-size: 0.9rem;
    svg {
      margin-right: 0.25rem;
      font-size: 1.25rem;
    }
  }
`;

const WatchListBtn = styled(PlayBtn)`
  border: 1px solid ${(p) => p.theme.color.main};
  color: ${(p) => p.theme.color.main};
  background-color: rgba(0, 0, 0, 0);
  &:hover {
    background-color: rgb(89, 89, 89, 0.5);
  }
`;
const Desc = styled.p`
  width: 56%;
  margin-top: 1.7rem !important;
  @media screen and (min-width: 0px) and (max-width: 1000px) {
    width: 100%;
  }
`;

function Detail() {
  const { pathname } = useLocation();
  const path = pathname.split("/");
  const fetchData = async (path) => {
    return axios.get(path);
  };
  const { data, isSuccess } = useQuery([`${path[1]}`, path[2]], () =>
    fetchData(pathname)
  );

  const findWatchlist = useSelector((state) => state.watchlist.watchlist);

  const [index, setIndex] = useState(-1);
  useEffect(() => {
    const getIndexOf = (list, id) => {
      const ids = list.map((listItem) => listItem._id);
      return ids.indexOf(id);
    };
    const i = getIndexOf(findWatchlist, data?.data[0]?._id);
    setIndex(i);
  }, [data, findWatchlist]);

  const dispatch = useDispatch();

  const addtoWatchList = (item) => {
    dispatch(addToWatchlist(item));
  };
  const removeFromWatchList = (id) => {
    dispatch(removefromWatchlist(id));
  };

  return (
    <>
      <Container>
        {isSuccess && (
          <Wrapper>
            <img src={data?.data[0]?.poster} alt="" />
            <Details>
              <Group>
                <Buttons>
                  {index < 0 ? (
                    <WatchListBtn
                      onClick={() => {
                        addtoWatchList(data?.data[0]);
                      }}>
                      <AiOutlinePlusCircle /> Add to Watchlist
                    </WatchListBtn>
                  ) : (
                    <WatchListBtn
                      onClick={() => {
                        removeFromWatchList(index);
                      }}>
                      <AiOutlineCheckCircle /> Added to Watchlist
                    </WatchListBtn>
                  )}
                  <PlayBtn>
                    <AiOutlinePlayCircle /> Play Now
                  </PlayBtn>
                </Buttons>
                <h2>{data?.data[0].name}</h2>

                <List>
                  <p>{data?.data[0].time}</p>
                  {data?.data[0].seasons && (
                    <p>{data?.data[0].seasons} Seasons</p>
                  )}
                  <GiPlainCircle />
                  <p>{data?.data[0].year}</p>
                  <GiPlainCircle />
                  <p>{data?.data[0].category}</p>
                </List>

                {data?.data[0].cast && <p> Starring: {data?.data[0].cast}</p>}
                <Desc>{data?.data[0].description}</Desc>
              </Group>
            </Details>
          </Wrapper>
        )}
      </Container>
      <ImageSlider title={path[1]} />
    </>
  );
}

export default Detail;
