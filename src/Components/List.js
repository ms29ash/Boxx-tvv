import React from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { MdOutlineSort, MdDeleteOutline } from "react-icons/md";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import { removefromWatchlist } from "../features/watchlist/watchlistSlice";
import { addToFavorite } from "../features/watchlist/favouriteSlice";
import { useLocation, useNavigate } from 'react-router-dom'

const Container = styled.div`
  width: 100%;
  display: grid;
  place-items: center;
`;
const Wrapper = styled.div`
  background: ${(p) => p.theme.color.gray};
  width: 90%;
  margin: 2.5% 5%;
  padding: 2.5%;
  h2 {
    margin-bottom: 0.75rem;
    text-transform: capitalize;
  }
  button {
    margin: 1rem 0;
    background: none;
    border: none;
    color: #fff;
    display: flex;
    align-items: center;
    svg {
      font-size: 1.5rem;
      color: #fff !important;
      margin-right: 0.5rem;
    }
  }
`;

const Wrap = styled.div`
  cursor: pointer;
  &:hover {
    background: rgba(242, 5, 68, 0.84);
  }
  & > div {
    display: flex;
    align-items: center;
    height: 150px;
    border-radius: 2px;

    position: relative;

    @media screen and (max-width: 768px) and (min-width: 0) {
      height: 100px;
    }
    img {
      height: 90%;
      margin: 0 1rem;
      aspect-ratio: 6/ 8;
      object-fit: cover;
    }
  }

  hr {
    background: #7b7b7b;
    margin: 0.25rem 0;
    height: 1px;
    border: none;
  }
`;

const Details = styled.div`
  flex: 1;
`;
const Buttons = styled.div`
  display: flex;
  position: absolute;
  right: 5%;
  top: 5%;
  @media screen and (max-width: 768px) and (min-width: 0) {
    top: 0%;
    right: 0;
  }
  button {
    aspect-ratio: 1/1;
    border-radius: 50px;

    &:hover {
      background: rgba(0, 0, 0, 0.31);
      cursor: pointer;
    }
  }
  svg {
    font-size: 1.5rem;
    margin: 0 0.5rem;
    @media screen and (min-width: 0px) and (max-width: 768px) {
      margin: 0 0.25rem;
      font-size: 0.75rem;
    }
  }
`;

const NoItem = styled.div`
  min-height: 50vh;
  display: grid;
  place-items: center;
`;
function List({ data }) {
  const { pathname } = useLocation();
  const title = pathname.replace("/", "");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const removeWatchlist = (index) => {
    dispatch(removefromWatchlist(index));
  };

  const addFavourite = (payload) => {
    dispatch(addToFavorite(payload));
  };
  return (
    <Container>
      <Wrapper>
        <h2>{title}</h2>
        <button>
          <MdOutlineSort />
          <h3>Sort</h3>
        </button>
        {data.length === 0 ? (
          <NoItem>Nothing to watch</NoItem>
        ) : (
          data.map(({ item, title }, index) => {
            return (
              <Wrap key={item._id} onClick={() => navigate(`/${title}/${item._id}`)} >
                <div>
                  <img src={item.thumbnail} alt="" />
                  <Details>
                    <h3>{item.name}</h3>
                    <h5>{item.category}</h5>
                  </Details>
                  <Buttons>
                    <button>
                      <MdDeleteOutline onClick={() => removeWatchlist(index)} />
                    </button>
                    {/* <AiFillHeart/> */}
                    <button>
                      <AiOutlineHeart onClick={() => addFavourite(item)} />
                    </button>
                  </Buttons>
                </div>
                <hr />
              </Wrap>
            );
          })
        )}
      </Wrapper>
    </Container>
  );
}

export default List;
