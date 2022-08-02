import React from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  margin: 4rem 0 5rem;
  height: 30vh;
  @media screen and (max-width: 1200px) and (min-width: 720px) {
    height: 15vh;
  }
  @media screen and (max-width: 720px) and (min-width: 0) {
    height: 10vh;
  }
`;

const ChannelContainer = styled.div`
width: 90%;
height:100%;
  margin: 0 auto;
  h3{
    margin:1rem;
  }
  `;
const Wrapper = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  align-items: center;
  div {
    background: #595959;
    background: #000;
    background: #151515;
    height: 100%;
    width: 20%;
    margin: 0.5rem;
    display: grid;
    place-items: center;
    border-radius: 10px;
    border: 2px solid #000;
    border: 2px solid #151515;
    cursor: pointer;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px,
      rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;
    box-shadow: rgba(0, 0, 0, 0.25) 0px 14px 28px,
      rgba(0, 0, 0, 0.22) 0px 10px 10px;
     
      transition-property: all;
      transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
      transition-duration: 250ms;
    @media screen and (max-width: 1200px) and (min-width: 0) {
      margin: 0.25rem;
    }
    &:hover {
      transform: scale(1.1);
      border: 2px solid #f20544;
    }
    img {
      width: 50%;
      /* height:50%; */
    }
  }
`;

function Channels() {
  return (
    <Container>
      <ChannelContainer>
        <h3>Channels</h3>
        <Wrapper>
          <div>
            <img src="./images/Disney+logo.png" alt="" />
          </div>
          <div>
            <img src="./images/netflix-logo.png" alt="" />
          </div>
          <div>
            <img src="./images/zee5-logo.png" alt="" />
          </div>
          <div>
            <img src="./images/prime-video-amazon.png" alt="" />
          </div>
          <div>
            <img src="./images/sonyLiv-logo.png" alt="" />
          </div>

        </Wrapper>
      </ChannelContainer>
    </Container>
  );
}

export default Channels;
