import React from 'react'
import styled from 'styled-components';
import "slick-carousel/slick/slick.css";

import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";



const Container = styled.div`
/* width:100%;
height:50vh; */
margin:0 auto;
`
const Carousel = styled(Slider)`
margin-top:20px;
overflow-x: visible;
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
    /* overflow-x:hidden; */
    img{
        width:100%;
        object-fit:cover;
        border-radius:14px;
        margin:0px 1%;
    /* height:50vh; */
    box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px , rgb(0 0 0 / 73%) 0px 16px 10px -10px ;
    border:4px solid transparent;
    cursor:pointer;
    transition-duration:300ms;
    &:hover{
        border:4px solid rgb(249 ,249 ,249 ,0.8);
    }
}`

function Categories() {
    let settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3
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

export default Categories;