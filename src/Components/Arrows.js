import React from "react";
import styled from "styled-components";
import { AiOutlineCaretLeft, AiOutlineCaretRight } from "react-icons/ai";

const Container = styled.div`
  height: 50px;
  display: none;
  min-width: 50px;
  height: 40%;
  background: white;
  position: absolute;
  z-index: 15;
  left: -3%;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  &:disabled {
    background: #ffffff26 !important;
  }
  svg {
    color: #000 !important;
    font-size: 2rem;
  }
  &:hover {
    background: rgb(199, 199, 199);
  }
`;
const Wrapper = styled(Container)`
  right: 0%;
  left: 98%;
`;

function LeftArrow(props) {
  const { className, onClick } = props;

  return (
    <Container className={`${className} btn`} onClick={onClick}>
      <AiOutlineCaretLeft />{" "}
    </Container>
  );
}

export const RightArrow = (props) => {
  const { className, onClick } = props;

  return (
    <Wrapper className={`${className} btn`} onClick={onClick}>
      <AiOutlineCaretRight />{" "}
    </Wrapper>
  );
};

export default LeftArrow;
