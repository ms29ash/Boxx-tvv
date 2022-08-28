import React from 'react'
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Container = styled.div`
background:rgb(21, 21, 21);
padding:8vh 0;
width:100%;
@media screen and (max-width:768px) and (min-width: 0){
    padding:3vh 0;
    }
`
const Wrapper = styled.div`
display:flex;
align-items:center;
justify-content:space-between;
width:90%;
@media screen and (max-width:768px) and (min-width: 0){
    width:95%;
    flex-direction:column;
    }
`
const Logo = styled.div`
width:20%;
@media screen and (max-width:768px) and (min-width: 0){
    width: 50%;
    margin:1rem 0;
    }
img{
    width:100%;
}
    `

const Group = styled.div`
display:flex;
align-items: center;
justify-content:space-between;
flex:0.6;
@media screen and (max-width:1024px) and (min-width: 0){
    flex:0.8;
}
@media screen and (max-width:768px) and (min-width: 0){
    width:90%;
    }
    div{
   a{
      font-size: 1.25rem;
      margin: 0.7rem 0;
      cursor: pointer;
      @media screen and(max-width: 1024px) and(min-width: 0){
          font-size: 1rem;
      }
      &:hover {
        text-decoration:underline;
      }
    }
  }
`;

function Footer() {
    return (
        <Container>
            <Wrapper>
                <Logo>
                    <img src="./images/Logo.png" alt="" />
                </Logo>

                <Group>
                    <div>
                        <Link to="/movies" >Movies</Link>
                        <Link to="/shows" >Shows</Link>
                        <Link to="/anime" >Anime</Link>
                    </div>
                    <div>
                        <Link to="/recent" >Recent</Link>
                        <Link to="/favorite" >Favourite</Link>
                        <Link to="/bookmark" >Bookmarks</Link>
                    </div>
                    <div>
                        <Link to="/" >Facebook</Link>
                        <Link to="/" >Instagram</Link>
                        <Link to="/" >Twitter</Link>
                    </div>
                </Group>
            </Wrapper>
        </Container>
    )
}

export default Footer