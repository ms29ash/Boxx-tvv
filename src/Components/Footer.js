import React from 'react'
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { FaFacebookF, FaYoutube, FaTwitter, FaInstagram } from 'react-icons/fa'

const Container = styled.div`
background:rgb(21, 21, 21);
padding:2rem 0;
width:100%;
max-width: 100%;
@media screen and (max-width:768px) and (min-width: 0){
    padding:2rem 0;
    }
`
const Head = styled.div`
display:flex;
width:100%;
align-items:center;
@media screen and (max-width:768px) and (min-width: 0){
            flex-direction:column;
            align-items:flex-start;
    } 
h1{
    font-size:1rem;
}
&>div{
    display:flex;
    img{
        height:3rem;
        margin:1.5rem  1rem;
        @media screen and (max-width:768px) and (min-width: 0){
           margin:1rem 0;
           margin-right:1rem;
    } 
    }
}

`;

const Wrapper = styled.div`
display:flex;
flex-direction:column;
align-items:center;
justify-content:space-between;
width:90%;
margin:0 auto;
@media screen and (max-width:768px) and (min-width: 0){
    width:95%;
    }
    `
const Group = styled.div`
width: 95%;
display:flex;
align-items: flex-start;
justify-content:space-between;
flex-wrap:wrap;

@media screen and (max-width:768px) and (min-width: 0){
    width:100%;
    }
    &>div{
        display:flex;
        flex-direction: column;
        margin-top:3rem;
        @media screen and (max-width:768px) and (min-width: 0){
            width:50%;
    } 

    h3{
        font-size: 1rem;
    }
   a{
      font-size: 0.8rem;
      margin: 0.5rem 0;
      text-decoration:none;
      color:#f2f2f2c6;
      cursor: pointer;
      &:hover {
          text-decoration:underline;
          color:#ffffff
        }
    }
}
`;
const Social = styled.div`
display:flex;
align-items:center;
margin-top:1rem;
svg{
    color:#f2f2f2c6;
    font-size:1.5rem;
    margin-right:1rem;
    cursor: pointer;
    &:hover{
        color:#fff;
    }
}
`

function Footer() {
    return (
        <Container>
            <Wrapper>
                <Head>
                    <h1>Download Apps</h1>
                    <div>

                        <img src="/images/googlePlay.jpg" alt="" />
                        <img src="/images/appStore.png" alt="" />
                    </div>
                </Head>

                <Group>
                    <div>
                        <h3>Popular Movies</h3>
                        <Link to="/movies/62e8e9580c88c34332acc7de" >Vikram</Link>
                        <Link to="/movies/62e8e9580c88c34332acc7e0" >RRR</Link>
                        <Link to="/movies/62e8e9580c88c34332acc7e2" >KGF</Link>
                        <Link to="/movies/62e8e9580c88c34332acc7df" >White Tiger</Link>
                        <Link to="/movies/630389442e6db86f2ee7a4ee" >Tenet</Link>

                    </div>
                    <div>
                        <h3>Popular Shows</h3>
                        <Link to="/shows/62e8eacc11eb32781e737898" >Panchayat</Link>
                        <Link to="/shows/62e8eacc11eb32781e73789c" >Stranger Things</Link>
                        <Link to="/shows/62e8eacc11eb32781e737894" >Squid Games</Link>
                        <Link to="/shows/62e8eacc11eb32781e737899" >Kota Factory</Link>
                        <Link to="/shows/62e8eacc11eb32781e737895" >Money Heist</Link>

                    </div>
                    <div>
                        <h3>Popular Anime</h3>
                        <Link to="/anime/6306412a9f7838f783407e08" >Naruto</Link>
                        <Link to="/anime/630646d847d0a40f692355a5" >Attack on Titan</Link>
                        <Link to="/anime/632b659c47b762bfcca81039" >Jujutsu Kaisen</Link>
                        <Link to="/anime/630641e29f7838f783407e0b" >Naruto: Shippuden</Link>
                        <Link to="/anime/6306488447d0a40f692355af" >Death Note</Link>
                    </div>
                    <div>
                        <h3>Top Platfroms</h3>
                        <Link to="/channels/netflix" >Netflix</Link>
                        <Link to="/channels/primeVideo" >Prime Video</Link>
                        <Link to="\/channels/disney+" >Disney+</Link>
                        <Social>
                            <FaFacebookF />
                            <FaInstagram />
                            <FaTwitter />
                            <FaYoutube />
                        </Social>
                    </div>
                </Group>
            </Wrapper>
        </Container>
    )
}

export default Footer