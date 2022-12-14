import React from "react";
import styled from "styled-components";
import Card from "./Card";
import Intro from "./Intro";
import { useLocation } from "react-router-dom";
import axios from "../axios";
import { useQuery } from "@tanstack/react-query";
import LoadingAnimation from "./LoadAnimation";

const Page = styled.div``;
const Container = styled.div`
  width: 90%;
  margin: 2rem auto;
  h1 {
    margin: 1rem;
    font-size: 2rem;
    text-transform: capitalize;
  }
`;
const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
`;
const Box = styled.div`
  position: relative;
  width: 18%;
  aspect-ratio: 6/ 8;
  margin: 1%;
  @media screen and (min-width: 0px) and (max-width: 720px) {
    width: 31%;
  }
`;

const LoadAnimation = styled(LoadingAnimation)`
width: 96%;
border-radius: 8px;
    margin: 0px auto;
    aspect-ratio: 6/ 8;
    box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
      rgb(0 0 0 / 73%) 0px 16px 10px -10px;
`

function Grid() {
  const { pathname } = useLocation();
  const title = pathname.replace("/", "");
  const fetchData = async (path) => {
    return axios.get(path);
  };

  const { data, isSuccess, isLoading } = useQuery([`${title}`], () => fetchData(pathname));
  return (
    <Page>
      <Intro type={title} />
      <Container>
        <h1>{title}</h1>
        <Wrapper>
          {isSuccess &&
            data?.data.map((item) => {
              return (
                <Card key={item._id} css={'width: 18%; margin: 1%;@media screen and (min-width: 0px) and (max-width: 720px) {width: 31%;}'} title={title} id={item._id} item={item} />
              );
            })}
          {
            isLoading && Array(10).fill('').map((p, i) =>
              <Box key={i}>
                <LoadAnimation />
              </Box>
            )
          }
        </Wrapper>
      </Container>
    </Page>
  );
}

export default Grid;