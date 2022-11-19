import React from "react";
import styled from "styled-components";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const Container = styled.div`
  margin: 0 auto;
`;
const Carousel = styled(Slider)`
  margin-top: 10px;
  ul li button {
    &:before {
      font-size: 10px;
      color: rgb(150, 158, 171);
    }
  }
  .slick-dots li.slick-active button:before {
    color: white;
  }

  button {
    z-index: 1;
  }
`;

const Wrap = styled.div`
  aspect-ratio: 13/4;
  width: 98%;
  position: relative;
  @media screen and (max-width: 768px) and (min-width: 0) {
    aspect-ratio: 13/8;
  }
`;

const Img = styled.div`
  width: 98%;
  height: 100%;
  object-fit: cover;
  border-radius: 3px;
  margin: 0px 1%;
  box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
    rgb(0 0 0 / 73%) 0px 16px 10px -10px;
  cursor: pointer;
  transition-duration: 300ms;
  ${(p) => `background:url(${p.img})`};
  @media screen and (max-width: 768px) and (min-width: 0) {
    width: 196%;
    background-position: top-right;
  }
`;

function Intro({ type }) {
  let settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slideToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    arrows: false,
    loop: true,
  };
  return (
    <Container>
      <Carousel {...settings}>
        {Array(4)
          .fill()
          .map((k, i) => {
            return (
              <Wrap key={i}>
                <Img img={`/images/${type}/${i + 1}.jpg`} alt="" />
              </Wrap>
            );
          })}
      </Carousel>
    </Container>
  );
}

export default Intro;

Intro.defaultProps = {
  type: "movies",
};
