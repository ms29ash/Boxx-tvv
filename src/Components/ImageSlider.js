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
import LoadingAnimation from "./LoadAnimation";

const Container = styled.div`
  margin: 2rem auto;
  overflow: visible;

  @media screen and (max-width: 768px) and (min-width: 0) {
    margin: 1rem auto;
  }
  h3 {
    @media screen and (min-width: 768px) and (max-width: 720000px) {
      margin-left: 3rem;
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
    opacity: 0;
    pointer-events: none;
   
  }

  &:hover {
    .btn {
      display: flex;
    }
  }
  .slick-arrow{
    @media screen and (max-width: 1024px) and (min-width: 0px) {
      opacity: 0;
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
  position: relative;
  height: 100%;
`;

const LoadAnimation = styled(LoadingAnimation)`
  width: 96%;
  border-radius: 8px;
  margin: 0px auto;
  aspect-ratio: 6/ 8;
  box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
    rgb(0 0 0 / 73%) 0px 16px 10px -10px;
`;

function ImageSlider({ title }) {
  let settings = {
    infinite: false,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 3,
    rows: 1,
    nextArrow: <RightArrow />,
    prevArrow: <LeftArrow />,
    initialSide: 0,

    swipeToSlide: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          swipeToSlide: true,
          initialSide: 0,
          slidesToShow: 4,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          swipeToSlide: true,
          initialSide: 0,
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const fetchData = async (path) => {
    return axios.get(path);
  };

  const { data, isSuccess, isLoading } = useQuery([`${title}`], () =>
    fetchData(`/${title}`)
  );

  return (
    <Container>
      <Heading>{title}</Heading>
      <Carousel {...settings}>
        {isSuccess &&
          data?.data.map((item) => (
            <Card key={item._id} css={`height:100%;`} title={title} item={item} />
          ))}
        {isLoading &&
          Array(10)
            .fill("")
            .map((p, i) => (
              <Wrap key={i}>
                <LoadAnimation />
              </Wrap>
            ))}
      </Carousel>
    </Container>
  );
}

export default ImageSlider;
