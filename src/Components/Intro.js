import React from 'react'
import styled from 'styled-components';
import "slick-carousel/slick/slick.css";

import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";



const Container = styled.div`
margin:0 auto;
`
const Carousel = styled(Slider)`
margin-top:10px;
ul li button{
    &:before{
        font-size:10px;
        color:rgb( 150 ,158,171);
    }
}
.slick-dots li.slick-active button:before{
    color:white;
}

button {
    z-index: 1;
}
`

const Wrap = styled.div`
  
    img{
        width:98%;
        object-fit:cover;
        border-radius:14px;
        margin:0px 1%;
        box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px , rgb(0 0 0 / 73%) 0px 16px 10px -10px ;
        border:4px solid transparent;
        cursor:pointer;
        transition-duration:300ms;
   
}`

function Intro() {
    let settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slideToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        arrows: false,
        loop: true
    }
    return (
        <Container>
            <Carousel {...settings}>
                <Wrap>
                    <img src="/images/avatar.jpg" alt="" />
                </Wrap>
                <Wrap>
                    <img src="/images/avengers.jpg" alt="" />
                </Wrap>
                <Wrap>
                    <img src="/images/highway.jpg" alt="" />
                </Wrap>
                <Wrap>
                    <img src="/images/extraction.jpg" alt="" />
                </Wrap>

            </Carousel>
        </Container>


    )
}

export default Intro