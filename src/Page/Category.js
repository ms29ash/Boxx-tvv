import React from "react";
import styled from "styled-components";
import { useLocation } from "react-router-dom";
import ImageSlider from "../Components/ImageSlider";

const Container = styled.div``;

const TopBackground = styled.div`
  width: 100%;
  aspect-ratio: 8/2;
  position: relative;
  margin-bottom: 5rem;
  display:grid;
  place-items:center;
  @media screen and (min-width: 0px) and (max-width: 1024px) {
    aspect-ratio: 5/1;
  }

    ${p => p.bg === 'action' ? 'background: linear-gradient(to right, #f953c6, #b91d73);' :
    p.bg === 'adventure' ? 'background: linear-gradient(to right, #8e2de2, #4a00e0);' :
      p.bg === 'sci-fi' ? 'background: linear-gradient(to right, #f12711, #f5af19);' :
        p.bg === 'thriller' ? 'background: linear-gradient(to right, #ed213a, #93291e);' :
          p.bg === 'crime' ? 'background: linear-gradient(to right, #00c6ff, #0072ff);' : ''
  }
  
  h3 {
    color: #fff;
    text-transform:capitalize;
    font-size: 3rem;
  }

  img {
    position: absolute;
    top: 0%;
    left: 0%;
    right: 0%;
    bottom: 0%;
    height: 100%;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    object-fit: contain;
    object-position: 20%;
    text-align: center;
  }
  
`;

function Category() {
  const { pathname } = useLocation();
  const path = pathname.split("/");
  return (
    <Container>
      <TopBackground bg={path[2]}>

        <h3>{path[2]}</h3>
      </TopBackground>
      <ImageSlider title="movies" />
      <ImageSlider title="shows" />
    </Container>
  );
}

export default Category;

