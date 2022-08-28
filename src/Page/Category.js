import React from "react";
import styled from "styled-components";
import { useLocation } from "react-router-dom";
import ImageSlider from "../Components/ImageSlider";

const Container = styled.div``;

const TopBackground = styled.div`
  width: 100%;
  aspect-ratio: 8/2;
  /* background: url(${(p) =>
    `/images/${p.bg}-background.jpg`}) no-repeat center
    center/cover; */
  position: relative;
  margin-bottom: 5rem;
  z-index: -1;
  @media screen and (min-width: 0px) and (max-width: 1024px) {
    aspect-ratio: 5/1;
  }
  &:before {
    position: absolute;
    content: "";
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    background: linear-gradient(
      to right,
      rgba(0, 0, 0, 0.9) 0%,
      rgba(0, 0, 0, 0) 100%
    );
  }
  h3 {
    color: #fff;
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
        {/* <img src={`/images/${path[2]}-logo.png`} alt="" /> */}
        <img src="https://wallpaper.dog/large/17112733.jpg" alt="" />
        <h3>{path[2]}</h3>
      </TopBackground>
      <ImageSlider title="movies" />
      <ImageSlider title="shows" />
    </Container>
  );
}

export default Category;
