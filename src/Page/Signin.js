import React from "react";
import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import axios from '../axios'
import Cookies from 'universal-cookie';

const Container = styled.div`
  background-color: rgba(0, 0, 0, 0.593);
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
    background: url("./images/SignIn.jpg") no-repeat center center/cover;
    z-index: -1;
  }
`;
const Logo = styled(Link)`
  width: 100%;
  height: fit-content;
  display: grid;
  place-items: center;
  img {
    width: 50%;
    margin: 0rem 0 2rem;
  }
`;

const Wrapper = styled.div`
`;
const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 90vw;
  background-color: rgba(89, 89, 89, 0.8);
  padding:1rem 3vw;
  max-width: 370px;
  margin-bottom: 30%;
  h2 {
    margin-bottom: 1rem;
    width: 100%;
    text-align: center;
  }
  input {
    width: 90%;
    font-size: 1rem;
    padding: 0.75rem 2.5%;
    margin: 0.25rem auto;
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
    margin: 0.15rem 2.5%;
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

export default function Signin() {
  const cookies = new Cookies();
  const navigate = useNavigate();

  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = async (data) => {
    try {
      const res = await axios.post('auth/signin', { email: data.email, password: data.password });

      if (res.data && res?.data?.success === true) {
        cookies.set('token', res?.data.token, { path: '/', maxAge: 1296000 });
        navigate('/', { replace: true });
      }
    } catch (error) {
      if (error) {
        console.log(error)
        return;
      }
    }
  };

  return (
    <Container>
      <Wrapper>
        <Logo to="/">
          <img src="./images/Logo.png" alt="" />
        </Logo>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <h2>Login</h2>
          <label htmlFor="email">Email</label>
          <input type="text" id="email" {...register("email", {
            required: "email is required",
            pattern: {
              value: /\S+@\S+\.\S+/,
              message: "Entered value does not match email format"
            }
          })} />
          <span>{errors.email && errors.email.message}</span>
          <label htmlFor="password">Password</label>
          <input type="password" id="password"  {...register('password', {
            required: "password is required",
            minLength: {
              value: 6,
              message: "min length is 5"
            }
          })} />
          <span>{errors.password && errors.password.message}</span>
          <small>forget password?</small>
          <button type="submit">Login</button>
          <p>
            New to Boxx? <Link to="/signup">Sign up now</Link>
          </p>
        </Form>
      </Wrapper>
    </Container>
  );
}
