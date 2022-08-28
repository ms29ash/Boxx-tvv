import React from "react";
import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";
import { CgProfile } from "react-icons/cg";
import { useForm, useWatch } from "react-hook-form";
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
    background: url("../images/SignUp.jpg") no-repeat center center/cover;
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

const Wrapper = styled.div``;
const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 95vh;

  background-color: rgba(89, 89, 89, 0.8);
  padding: 2rem;
  max-width: 370px;
  margin-bottom: 30%;
  div{
    align-items: center;
    display:flex;
    flex-direction: column;
    svg{
 font-size:2.5rem;
    }
  }
  h2 {
    margin-bottom: 1rem;
    width: 100%;
    text-align: center;
  }
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
  color:white;
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
    font-weight: bold;
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

export default function Password() {
  const cookies = new Cookies();
  const navigate = useNavigate();
  const { register, handleSubmit, control, formState: { errors } } = useForm();
  const email = sessionStorage.getItem("email");
  const onSubmit = async (data) => {
    try {
      const res = await axios.post('auth/signup', { username: email, email: email, password: data.password });

      if (res.data && res?.data?.success === true) {
        cookies.set('authToken', res?.data.authToken, { path: '/', maxAge: 900 });
        navigate('/signup/otp', { replace: true });
      }
    } catch (error) {
      if (error) {
        console.log(error)
        return;
      }
    }


  };

  const password = useWatch({ control, name: 'password' });
  const isEqual = (cpassword) => cpassword === password;
  return (
    <Container>
      <Wrapper>
        <Logo to="/">
          <img src="../images/Logo.png" alt="" />
        </Logo>
        <Form onSubmit={handleSubmit(onSubmit)} >
          <div>
            <CgProfile />
            <h2>{email}</h2>
          </div>

          <label htmlFor="password">New Password</label>
          <input type="password" id="password" {...register('password', {
            required: "password is required",
            minLength: {
              value: 6,
              message: "min length is 5"
            }
          })} control={control} />


          <span>{errors.password && errors.password.message}</span>
          <label htmlFor="cpassword">Confirm Password</label>
          <input type="password" id="cpassword" {...register('cpassword', {
            required: "password is required",
            minLength: {
              value: 6,
              message: "min length is 5"
            },
            validate: isEqual
          })} />
          <span>{errors.cpassword && (errors.cpassword.type = "validate" ? "password is not equal" : errors.cpassword.message)}</span>

          <button type="submit">Next</button>

        </Form>
      </Wrapper>

    </Container>
  );
}
