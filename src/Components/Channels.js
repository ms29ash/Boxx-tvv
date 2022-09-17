import React from "react";
import styled from "styled-components";
import { useNavigate } from 'react-router-dom'
import Heading from "./Heading";

const Container = styled.div`
  width: 100%;
  margin: 2rem 0 1.5rem;

  @media screen and (max-width: 500px) and (min-width: 0) {
    
    margin: 1.25rem 0 3rem;
  }
`;

const ChannelContainer = styled.div`
  width: 95%;
  margin: 0 auto;
  `;
const Wrapper = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  flex-wrap: wrap;
  div {
    background: #151515;
    width: 18%;
    aspect-ratio: 1/1;
    display: grid;
    place-items: center;
    border-radius: 10px;
    border: 2px solid #151515;
    cursor: pointer;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px,
      rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;
    box-shadow: rgba(0, 0, 0, 0.25) 0px 14px 28px,
      rgba(0, 0, 0, 0.22) 0px 10px 10px;
      transition-property: all;
      transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
      transition-duration: 250ms;
      margin:0.60%;
  
    @media screen and (max-width: 768px) and (min-width: 0){
      width:31%;
      margin:2% 0.50%;

    }
    &:hover {
      transform: scale(1.1);
      border: 2px solid #f20544;
    }
    img {
      width: 50%;
    }
  }
`;

function Channels() {
  const navigate = useNavigate();
  return (
    <Container>
      <ChannelContainer>
        <Heading>Channels</Heading>
        <Wrapper>
          <div onClick={() => { navigate('/channels/disney+') }}>
            <img src="./images/disney+-logo.png" alt="" />
          </div>
          <div onClick={() => { navigate('/channels/netflix') }}>
            <img src="./images/netflix-logo.png" alt="" />
          </div>
          <div onClick={() => { navigate('/channels/zee5') }}>
            <img src="./images/zee5-logo.png" alt="" />
          </div>
          <div onClick={() => { navigate('/channels/primeVideo') }}>
            <img src="./images/primeVideo-logo.png" alt="" />
          </div>
          <div onClick={() => { navigate('/channels/sonyliv') }}>
            <img src="./images/sonyliv-logo.png" alt="" />
          </div>

        </Wrapper>
      </ChannelContainer>
    </Container>
  );
}

export default Channels;
