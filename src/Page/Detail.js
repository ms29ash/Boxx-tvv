import React from "react";
import styled from "styled-components";
import { useQuery } from "@tanstack/react-query";
import { useLocation } from "react-router-dom";
import axios from "../axios";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { GiPlainCircle } from "react-icons/gi";
const Container = styled.div`
  width: 100%;
`;
const Wrapper = styled.div`
  /* &:before { */
  background: url(${(p) => p.bg}) no-repeat center center/cover;
  width: 100%;
  height: auto;
  object-fit: cover;
  aspect-ratio: 16 / 8;
  /* } */
`;

const Details = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  width: 100%;
  height: 100%;
  background: rgb(0, 0, 0);
  background: linear-gradient(
    90deg,
    rgba(0, 0, 0, 0.97) 2%,
    rgba(0, 0, 0, 0.84) 36%,
    rgba(0, 0, 0, 0) 56%
  );
`;
const Group = styled.div`
  margin: 5%;

  h2 {
    font-size: 1.5rem;
  }
  p {
    margin: 0.5rem 0rem;
    font-weight: bold;
    font-size: 1.25rem;
  }
  @media screen and (max-width: 1280px) and (min-width: 0) {
    p {
      font-size: 1rem;
    }
  }
`;
const List = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  /* margin: 1rem 0; */
  p {
    font-weight: 400;
  }
  svg {
    margin: 0 0.5rem;
    font-size: 0.5rem;
  }
`;

const Desc = styled.p`
  width: 60%;
  margin-top: 1.7rem !important;
`;

function Detail() {
  const { pathname } = useLocation();
  const path = pathname.split("/");
  const fetchData = async (path) => {
    return axios.get(path);
  };
  const { data, isSuccess } = useQuery([`${path[1]}`, path[2]], () =>
    fetchData(pathname)
  );

  return (
    <Container>
      {isSuccess && (
        <Wrapper bg={data?.data[0]?.poster}>
          <Details>
            <Group>
              <h2>{data?.data[0].name}</h2>

              <List>
                <p>{data?.data[0].time}</p>
                {data?.data[0].seasons && (
                  <p>{data?.data[0].seasons} Seasons</p>
                )}
                <GiPlainCircle />
                <p>{data?.data[0].year}</p>
                <GiPlainCircle />
                <p>{data?.data[0].category}</p>
              </List>

              {data?.data[0].cast && <p> Starring: {data?.data[0].cast}</p>}
              <Desc>{data?.data[0].description}</Desc>
            </Group>
          </Details>
        </Wrapper>
      )}
      <ReactQueryDevtools initialIsOpen={false} />
    </Container>
  );
}

export default Detail;
