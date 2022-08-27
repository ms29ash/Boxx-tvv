import React from "react";
import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";


const Container = styled.div`
  background-color: rgba(0, 0, 0, 0.653);
  place-items: center;
  display: grid;
  align-items: center;
  justify-content: center;
  width: 100vw;
  min-height: 100vh;
  &:before {
    content: "";
    top: 0;
    left: 0;
    right: 0;
    height: 100%;
    position: fixed;
    background: url("./images/SignUp.jpg") no-repeat center center/cover;
    z-index: -1;
  }
`;
const Logo = styled(Link)`
  width: 100%;
  height: fit-content;
  display: grid;
  place-items: center;
  img {
    width: 25%;
    margin: 0rem 0 3rem;
  }
`;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  h1 {
    margin-bottom: 1rem;
    width: 100%;
    text-align: center;
    font-size: 2.5rem;
  }
`;
const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 95vh;
  padding: 2rem;
  max-width: 370px;
  margin-bottom: 30%;

  input {
    width: 95%;
    font-size: 1rem;
    padding: 0.75rem 2.5%;
    margin: 0.25rem 0 0;
    border: none;
    outline: none;
    font-size: 1rem;
  }
  span{
  height:1rem;
  }
  button {
    padding: 0.75rem 0;
    margin: 0.5rem 0;
    font-size: 1rem;
    background-color: ${(p) => p.theme.color.main};
    border: none;
    color: white;
    font-weight: bold;
    cursor: pointer;
    &:hover {
      background-color: ${(p) => p.theme.color.mainDark};
    }
  }
  label {
    margin: 0.15rem 0;
  }
  small {
    margin: 0.5rem 0 0;
  }
  p {
    width: 100%;
    text-align: center;
    margin: 0.5rem 0 0;
  }
  a {
    color: white;
    font-size: 1.15rem;
    text-decoration: none;
    &:hover {
      text-decoration: underline;
    }
  }
`;

export default function Signup() {
  const navigate = useNavigate();

  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = data => {
    sessionStorage.setItem("email", data.email);
    navigate('password')
  };

  return (
    <Container>
      <Wrapper>
        <Logo to="/">
          <img src="./images/Logo.png" alt="" />
        </Logo>
        <h1>
          Unlimited movies, TV shows , <br /> Different OTT Platforms and more.
        </h1>
        <Form onSubmit={handleSubmit(onSubmit)} >
          <label htmlFor="email" >Email</label>
          <input type="text" id="email" {...register("email", {
            required: "email is required",
            pattern: {
              value: /\S+@\S+\.\S+/,
              message: "Entered value does not match email format"
            }
          })} />
          <span>{errors.email && errors.email.message}</span>

          <button type="submit">Continue</button>
          <p>
            Already have an account? <Link to="/signin">Sign in now</Link>
          </p>
        </Form>
      </Wrapper>
    </Container>
  );
}
