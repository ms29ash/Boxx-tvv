import React from 'react'
import styled from 'styled-components'
import Card from '../Components/Card';
import Intro from '../Components/Intro'
import { useLocation, Link } from "react-router-dom";
import axios from "../axios"
import { useQuery } from '@tanstack/react-query'



const Page = styled.div``;
const Container = styled.div`
width:90%;
margin:2rem auto;
h1{
    margin:1rem;
    font-size:2rem;
    text-transform: capitalize;
}
`;
const Wrapper = styled.div`
display:flex;
flex-wrap: wrap;
width: 100%;
`;
const Box = styled(Link)`
position: relative;
width:18%;
margin: 1% ;
color:white;
transition-property: all;
transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
transition-duration: 250ms;
cursor:pointer;
@media screen and (min-width: 0px) and (max-width: 720px) {
    width:31%;
   
  }

img{
    width:100%;
    height:100%;
    object-fit:cover;
    border-radius: 14px;
}
&:hover{
    transform:scale(1.35);
    z-index:5;

    div {
        display: flex;
    }
}
`;

function List() {
    const { pathname } = useLocation();
    const title = pathname.replace('/', '');
    const fetchData = async (path) => {
        return axios.get(path);
    };


    const { data, isSuccess } = useQuery(
        [`${title}`],
        () => fetchData(pathname),


    );
    return (
        <Page>
            <Intro />
            <Container>

                <h1>{title}</h1>
                <Wrapper>

                    {isSuccess &&
                        data?.data.map((item) => {
                            return <Box key={item._id} to={`/${title}/${item._id}`}>
                                <img src={item?.thumbnail} alt="" />
                                <Card name={item.name} time={item?.time} seasons={item?.seasons} category={item.category} />
                            </Box>
                        })
                    }
                </Wrapper>
            </Container>


        </Page>
    )
}

export default List