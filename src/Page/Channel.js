import React from "react";
import styled from "styled-components";
import { useLocation } from "react-router-dom";
import ImageSlider from "../Components/ImageSlider";

const Container = styled.div``;

const TopBackground = styled.div`
  width: 100%;
  aspect-ratio: 8/1;
  background: url(${(p) => `/images/${p.bg}-background.jpg`}) no-repeat center
    center/cover;
  position: relative;
  margin-bottom: 5rem;
  z-index: -1;
  @media screen and (min-width: 0px) and (max-width:1024px){
    aspect-ratio:5/1;
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
`;
const Img = styled.div`
  position: absolute;
  top: 70%;
  left: 5%;
  height: 60%;
  min-height: 80px;
  aspect-ratio: 1/1;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #f2f2f2;
  overflow-y: visible;
  border-radius: 8px;
  img {
    width: 90%;
    text-align: center;
  }
`;

function Channel() {
  const { pathname } = useLocation();
  const path = pathname.split("/");
  return (
    <Container>
      <TopBackground bg={path[2]}>
        <Img>
          <img src={`/images/${path[2]}-logo.png`} alt="" />
        </Img>
      </TopBackground>
      <ImageSlider title="movies" />
      <ImageSlider title="shows" />
    </Container>
  );
}

export default Channel;
