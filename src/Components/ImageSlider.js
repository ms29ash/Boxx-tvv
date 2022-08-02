import React from "react";
import styled from "styled-components";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { useQuery } from '@tanstack/react-query'
import axios from '../axios'


const Container = styled.div`
  margin: 6rem auto;
  @media screen and (min-width: 0px) and (max-width: 720px) {
    margin: 3rem auto;
  }
  h3 {
    margin: 0 5%;
    text-transform: capitalize;
  }
`;
const Carousel = styled(Slider)`
  width: 90%;
  margin: 0 auto;
  margin-top: 20px;
  overflow: visible;
  ul li button {
    &:before {
      font-size: 10px;
      color: rgb(150, 158, 171);
    }
  }
  &:hover {
    .slick-arrow {
      display: block !important;
      @media screen and (min-width: 0px) and (max-width: 1024px) {
        display: none !important;
      }
    }
  }

  .slick-slider {
    width: 100%;
  }

  .slick-arrow {
    display: none !important;
    height: 300px;
    background: rgb(0, 0, 0);
    background: linear-gradient(
      270deg,
      rgba(0, 0, 0, 0.33967090254070376) 0%,
      rgba(0, 0, 0, 1) 74%
    );
    width: 60px;

    &:before {
      font-size: 3rem;
    }
  }

  .slick-list {
    overflow: visible;
    width: 100%;
  }
  .slick-dots li.slick-active button:before {
    color: white;
  }

  .slick-slide,
  slick-active {
  }

  button {
    z-index: 1;
  }
`;

const Wrap = styled.div`
  cursor: pointer;
  position: relative;
  cursor: pointer;
  height: 100%;

  transition-property: all;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 250ms;
  &:hover {
    transition-duration: 300ms;
    transform: scale(1.25);
    z-index: 10;
    div {
      display: flex;
    }
  }

  img {
    width: 95%;
    margin: 5%;
    object-fit: cover;
    border-radius: 14px;
    margin: 0px 1%;
    height: 300px;
    box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
      rgb(0 0 0 / 73%) 0px 16px 10px -10px;
    @media screen and (min-width: 0px) and (max-width: 720px) {
      height: 200px !important;
    }
  }
`;
const Details = styled.div`
  border-radius: 14px;
  display: none;
  position: absolute;
  align-items: flex-end;
  bottom: 0;
  right: 0%;
  left: 0%;
  top: 0;
  background: rgb(0, 0, 0);
  background: linear-gradient(
    180deg,
    rgba(0, 0, 0, 0.13967090254070376) 40%,
    rgba(0, 0, 0, 0.8) 100%
  );
  div {
    margin-bottom: 2rem;
    margin-left: 10%;
    flex-direction: column;
    
  }
`;

function ImageSlider({ title }) {
  let settings = {
    infinite: false,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 3,
    swipe: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,

        },
      },
    ],
  };

  const fetchData = async (path) => {
    return axios.get(path);
  };


  const { data, isSuccess } = useQuery(
    [`${title}`],
    () => fetchData(`/${title}`),


  );
  return (
    <Container>
      <h3>{title}</h3>
      <Carousel {...settings}>
        {isSuccess && data?.data.map((item, i) => (
          <Wrap>
            <img src={item?.thumbnail} alt="" />
            <Details>
              <div>
                <h4>{item?.name}</h4>
                {item?.seasons && <p>{item?.seasons} Seasons</p>}
                {item?.time && <p>{item?.time} </p>}
                <p>{item?.category}</p>
              </div>
            </Details>
          </Wrap>
        ))}
      </Carousel>
    </Container>
  );
}

export default ImageSlider;
