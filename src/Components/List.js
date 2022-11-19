import React from "react";
import styled from "styled-components";
import { MdOutlineSort } from "react-icons/md";
import { useLocation, useNavigate } from 'react-router-dom'
import ListElement from "./ListElement";

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



const NoItem = styled.div`
  min-height: 50vh;
  display: grid;
  place-items: center;
`;
function List({ data }) {
  const { pathname } = useLocation();
  const title = pathname.replace("/", "");


  return (
    <Container>
      <Wrapper>
        <h2>{title}</h2>
        <button>
          <MdOutlineSort />
          <h3>Sort</h3>
        </button>
        {data?.length === 0 | data === undefined | data === null ? (
          <NoItem>Nothing to watch</NoItem>
        ) : (
          data?.map((item, index) => {
            return (
              <ListElement key={item._id} index={index} id={item.id} type={item.type} />

            );
          })
        )}
      </Wrapper>
    </Container>
  );
}

export default List;
