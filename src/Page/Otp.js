import React, { useState, useRef, useEffect } from "react";
import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";
import { CgProfile } from "react-icons/cg";
import axios from "../axios";
import Cookies from "universal-cookie";

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

const Wrapper = styled.div`
  & > div {
    display: flex;
    flex-direction: column;
    width: 95vh;
    background-color: rgba(89, 89, 89, 0.8);
    padding: 2rem;
    max-width: 370px;
    margin-bottom: 30%;
    & > div {
      align-items: center;
      display: flex;
      flex-direction: column;
      svg {
        font-size: 2.5rem;
      }
    }
  }
`;

const Form = styled.form`
  margin: 5% 0;
  div {
  }
  h2 {
    margin-bottom: 1rem;
    width: 100%;
    text-align: center;
  }

  span {
    height: 1rem;
    color: white;
  }
  button {
    padding: 0.75rem 0;
    width: 100%;
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
const Input = styled.div`
  display: flex;
  justify-content: space-between;
  input {
    width: 20%;
    max-width: 70px;
    aspect-ratio: 1/1;
    font-size: 1rem;
    margin: 0.75rem 0%;
    border: none;
    outline: none;
    font-size: 1rem;
    text-align: center;
    font-size: 1.25rem;
    &:focus {
      outline: none;
    }
    &:active {
      outline: none;
    }
  }
`;

export default function Otp() {
  const btnRef = useRef();
  const navigate = useNavigate();
  const cookies = new Cookies();
  const [otp, setOtp] = useState(new Array(4).fill(""));
  const [auth, setAuth] = useState(false);
  const email = sessionStorage.getItem("email");
  const authToken = cookies.get("authToken");
  useEffect(() => {
    if (!email || !authToken) {
      navigate('/signup')
    } else {
      setAuth(true);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [authToken, email])

  const onSubmit = async (e) => {
    e.preventDefault();
    const Otp = otp.join("");
    try {
      const res = await axios.put("auth/verify", {
        token: authToken,
        otp: Otp,
      });

      if (res.data && res?.data?.success === true) {
        cookies.set("token", res?.data.token, { path: "/", maxAge: 1296000 });
        navigate("/", { replace: true });
      }
    } catch (error) {
      if (error) {
        return;
      }
    }
  };

  const enter = (e, index) => {
    e.select();
    if (isNaN(e.value)) return false;
    setOtp([...otp.map((d, id) => (id === index ? e.value : d))]);
    if (e.nextSibling) {
      e.nextSibling.focus();
    }
    else {
      btnRef.current.focus()
    }
  };
  return (
    <>
      {
        auth &&
        (<Container>
          <Wrapper>
            <Logo to="/">
              <img src="../images/Logo.png" alt="" />
            </Logo>
            <div>
              <div>
                <CgProfile />
                <h2>{email}</h2>
              </div>
              <Form onSubmit={onSubmit}>
                <label htmlFor="otp">OTP</label>
                <Input>
                  {otp.map((d, i) => {
                    return (
                      <input
                        key={i}
                        value={d}
                        onChange={(e) => enter(e.target, i)}
                        type="number"
                        maxLength="1"
                        required={true}
                        max={9}
                        onFocus={(e) => e.target.select()}
                      />
                    );
                  })}
                </Input>
                <button ref={btnRef} type="submit">Next</button>
              </Form>
            </div>
          </Wrapper>
        </Container>)
      }
    </>
  );
}
