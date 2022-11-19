import React from 'react'
import styled from 'styled-components'
import { useDispatch } from "react-redux";
import { MdDeleteOutline } from "react-icons/md";
import { removeFromListWatch } from "../features/list/listSlice";
import { useNavigate } from 'react-router-dom'
import { useQuery } from "@tanstack/react-query";
import axios from '../axios'

function ListElement({ id, type, index }) {

  //fetch data from server
  const fetchData = async () => {
    return axios.get(`${type}/${id}`)
  }
  const { data: item } = useQuery([type, id], fetchData)

  //react redux dispatch
  const dispatch = useDispatch();

  //remove from watchlist
  const removeWatchlist = (index) => {
    dispatch(removeFromListWatch(index));
  };
  //navigation
  const navigate = useNavigate();

  return (
    <Wrap key={item?.data[0]._id}  >
      <Main onClick={() => navigate(`/${type}/${item?.data[0]._id}`)} >
        <img src={item?.data[0].thumbnail} alt="" />
        <Details>
          <h3>{item?.data[0].name}</h3>
          <h5>{item?.data[0].category}</h5>
        </Details>

      </Main>
      <Buttons>
        <button onClick={() => removeWatchlist(index)}>
          <MdDeleteOutline />
        </button>

      </Buttons>
      <hr />
    </Wrap>
  )
}

export default ListElement

const Wrap = styled.div`
  cursor: pointer;
  height: 150px;
  position: relative;
  &:hover {
    background: rgba(242, 5, 68, 0.84);
  }
  

  hr {
    background: #7b7b7b;
    margin: 0.25rem 0;
    height: 1px;
    border: none;
  }
`;
const Main = styled.div`
    display: flex;
    align-items: center;
    height: 150px;
    border-radius: 2px;
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;

    @media screen and (max-width: 768px) and (min-width: 0) {
      height: 100px;
    }
    img {
      height: 90%;
      margin: 0 1rem;
      aspect-ratio: 6/ 8;
      object-fit: cover;
    }
`

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
