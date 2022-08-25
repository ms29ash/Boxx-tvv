import React from 'react'
import styled from 'styled-components';

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
   p{
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
                        <p>Movies</p>
                        <p>Shows</p>
                        <p>Anime</p>
                    </div>
                    <div>
                        <p>Recent</p>
                        <p>Favourite</p>
                        <p>Bookmarks</p>
                    </div>
                    <div>
                        <p>Facebook</p>
                        <p>Instagram</p>
                        <p>Twitter</p>
                    </div>
                </Group>
            </Wrapper>
        </Container>
    )
}

export default Footer