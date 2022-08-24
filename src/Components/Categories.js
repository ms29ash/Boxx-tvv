import React from "react";
import styled from "styled-components";

const Container = styled.div`
  margin: 0 auto;
  width: 90%;
  h3 {
    margin: 0 1%;
    text-transform: capitalize;
  }
`;

const Wrapper = styled.div`
  display: flex;
  width: 100%;
`;

const Wrap = styled.div`
  width: 19%;
  margin: 1%;
  display: grid;
  place-items: center;
  border-radius: 10px;
  aspect-ratio: 3/2;
  border: 2px solid #180f11;

  transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
  position: relative;
  cursor: pointer;
  &:hover {
    border: 2px solid ${(p) => p.theme.color.main};
    p {
      background: radial-gradient(rgba(0, 0, 0, 0) 30%, rgba(0, 0, 0, 0.5) 90%);
    }
    img {
      opacity: 1;
    }
  }
  img {
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    object-fit: cover;
    width: 100%;
    height: 100%;
    border-radius: 10px;
    opacity: 1;
  }
  p {
    display: grid;
    place-items: center;
    z-index: 3;
    border-radius: 10px;
    font-weight: bold;
    font-size: 1.25rem;
    height: 100%;
    width: 100%;
    background: radial-gradient(rgba(0, 0, 0, 0) 70%, rgba(0, 0, 0, 0.5) 100%);
  }
`;

function Categories() {
  return (
    <Container>
      <h3>Categories</h3>
      <Wrapper>
        <Wrap>
          <img
            src="https://wallup.net/wp-content/uploads/2017/11/22/393344-video_games-Call_of_Duty-Call_of_Duty_Infinite_Warfare-748x421.jpg"
            alt=""
          />
          <p> Action</p>
        </Wrap>
        <Wrap>
          <img src="https://wallpapercave.com/wp/wp1879136.jpg" alt="" />
          <p> Adventure</p>
        </Wrap>
        <Wrap>
          <img src="https://wallpaperaccess.com/full/234124.jpg" alt="" />
          <p>Sci-fi</p>
        </Wrap>
        <Wrap>
          <img src="https://cdn.wallpapersafari.com/38/98/htY5BF.jpg" alt="" />
          <p> Thriller</p>
        </Wrap>
        <Wrap>
          <img src="https://wallpaperaccess.com/full/2015454.jpg" alt="" />
          <p> Crime</p>
        </Wrap>
      </Wrapper>
    </Container>
  );
}

export default Categories;
