import React from "react";
import styled from "styled-components";
import Heading from "./Heading";
import { Link } from "react-router-dom";

const Container = styled.div`
  margin: 0 auto;
  width: 95%;
`;

const Wrapper = styled.div`
  display: flex;
  width: 100%;
  flex-wrap:wrap;
`;

const Wrap = styled(Link)`
  width: 18%;
  margin: 0.5%;
  display: grid;
  place-items: center;
  border-radius: 10px;
  aspect-ratio: 1/1;
  border: 2px solid #180f11;
  overflow: hidden;
  transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
  position: relative;
  cursor: pointer;
  text-decoration:none;
  color:#fff;
  background: hsla(339, 100%, 55%, 1);
  @media screen and (max-width: 768px) and (min-width: 0){
      width:31%;
      margin:2% 0.50%;

    }
  &:hover {
    border: 2px solid ${(p) => p.theme.color.main};
   
  }
  
  p {
    display: grid;
    place-items: center;
    z-index: 3;
    font-weight: bold;
    font-size: 1.25rem;
    height: 100%;
    width: 100%;
    
    @media screen and (max-width: 768px) and (min-width: 0){
      border-radius: 5px;

    }
  }
`;

const Action = styled(Wrap)`
  background: ${(p) => `linear-gradient(to right, #f953c6, #b91d73);`};
`;

const Adventure = styled(Wrap)`
  background: ${(p) => ` linear-gradient(to right, #8e2de2, #4a00e0);`};
`;
const SciFi = styled(Wrap)`
  background: ${(p) => `linear-gradient(to right, #f12711, #f5af19)`};
`;
const Thriller = styled(Wrap)`
  background: ${(p) => `linear-gradient(to right, #ed213a, #93291e)`};
`;
const Crime = styled(Wrap)`
  background: ${(p) => ` linear-gradient(to right, #00c6ff, #0072ff);`};
`;
function Categories() {
  return (
    <Container>
      <Heading>Categories</Heading>
      <Wrapper>
        <Action to="category/action">
          <p> Action</p>
        </Action>
        <Adventure to="category/adventure">
          <p> Adventure</p>
        </Adventure>
        <SciFi to="category/sci-fi">
          <p>Sci-fi</p>
        </SciFi>
        <Thriller to="category/thriller">
          <p> Thriller</p>
        </Thriller>
        <Crime to="category/crime">
          <p> Crime</p>
        </Crime>
      </Wrapper>
    </Container>
  );
}

export default Categories;
