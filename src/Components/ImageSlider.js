import React from "react";
import styled from "styled-components";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { useQuery } from "@tanstack/react-query";
import axios from "../axios";
import Card from "./Card";
import LeftArrow, { RightArrow } from "./Arrows";
import Heading from "./Heading";


const Container = styled.div`
  margin: 2rem auto;
  overflow: visible;
 
  @media screen and (max-width: 768px) and (min-width: 0) {
    
    margin: 1rem auto;
  }
  h3{
     @media screen and (min-width: 768px) and (max-width: 720000px) { 
       margin-left: 3rem;
    /* margin: 3rem auto; */
  } 
  }
`;
const Carousel = styled(Slider)`
  width: 95%;
  margin: 0 auto;
  margin-top: 20px;
  overflow-x: visible;
  overflow-y: visible;
  ul li button {
    &:before {
      font-size: 10px;
      color: rgb(150, 158, 171);
    }
  }
  .slick-disabled {
    opacity: 0.4;
    pointer-events: none;
  }

  &:hover {
    .btn {
      display: flex;
    }
  }

  .slick-next:before {
    content: "" !important;
  }
  .slick-prev:before {
    content: "" !important;
  }

  .slick-list {
    overflow: visible;
    width: 100%;
  }
`;

const Wrap = styled.div`
  cursor: pointer;
  position: relative;
  cursor: pointer;
  overflow: visible;
  height: 100%;
  color: #fff;
  transition-property: all;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 250ms;

  @media screen and (min-width: 1024px) and (max-width: 10000px) {
    &:hover {
      transition-duration: 300ms;
      transform: scale(1.25);
      z-index: 10;
      div {
        display: flex;
      }
    }
  }
`;

function ImageSlider({ title }) {
  let settings = {
    infinite: false,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 3,
    swipe: true,
    rows: 1,
    nextArrow: <RightArrow />,
    prevArrow: <LeftArrow />,

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

  const { data, isSuccess } = useQuery([`${title}`], () =>
    fetchData(`/${title}`)
  );

  return (
    <Container>
      <Heading>{title}</Heading>
      <Carousel {...settings}>
        {isSuccess &&
          data?.data.map((item) => (
            <Wrap key={item._id}>
              <Card title={title} item={item} />
            </Wrap>
          ))}
      </Carousel>
    </Container>
  );
}

export default ImageSlider;
