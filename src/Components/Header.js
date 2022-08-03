import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { useSearchParams } from "react-router-dom";
import Hamburger from "hamburger-react";
import { useSelector, useDispatch } from "react-redux";
import { setOpen } from "../features/menu/menuSlice";
import { AiOutlineSearch } from "react-icons/ai";

const Nav = styled.nav`
  width: 100%;
  background-color: #000;
  border-radius: 0px 0px 5px 5px;
  position: sticky;
  top: 0;
  right: 0;
  left: 0;
  z-index: 1000;
`;
const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin: 0 auto;
  width: 95%;

  padding: 0.25rem;
`;
const NavLink = styled(Link)`
  padding: 0.75rem;
  margin: 0.25rem 1rem;
  cursor: pointer;
  position: relative;
  color: white;
  text-decoration: none;
  width: 5%;
  text-align: center;
  font-weight: bold;

  &:before {
    content: "";
    position: absolute;
    bottom: 0;
    right: 0;
    left: 0;
    height: 3px;
    border-radius: 2rem;
    background-color: ${(p) => p.theme.color.main};
    opacity: 0;
    transform: scaleX(0);
    transform-origin: left center;
    transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
  }
  &:hover {
    &:before {
      opacity: 1;
      transform: scaleX(1);
    }
  }
  @media screen and (min-width: 0px) and (max-width: 1024px) {
    display: none;
  }
`;

const Menu = styled.div`
  display: none;
  @media screen and (min-width: 0px) and (max-width: 500px) {
    display: block;
  }
`;
const Logo = styled(Link)`
 
  img {
    width: 150px;
    @media screen and (min-width: 0px) and (max-width: 500px) {
    width: 100px;
  }
  }
`;

const Input = styled.div`
  font-size: 2rem;
  flex:1;
  font-weight: bold;
  cursor: pointer;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  input {
    outline: none;
    border: none;
    border-bottom: 2px solid #fff;
    background-color: #000;
    font-size: 1rem;
    padding:0.25rem;
    color:#fff;
    @media screen and (min-width: 0px) and (max-width: 720px) {
    display:none;
   
    }}
`;
const Profile = styled.div`
img{
  margin:0 1rem;
  height:3rem;
width:3rem;
border-radius:5000px;
object-fit:cover;
}
`
function Header() {
  const dispatch = useDispatch();
  const isOpen = useSelector((state) => state.menu.isOpen);

  // eslint-disable-next-line
  let [searchParams, setSearchParams] = useSearchParams();

  const title = searchParams.get("search");

  return (
    <Nav>
      <Container>
        <Menu>
          <Hamburger
            toggled={isOpen}
            onToggle={() => {
              dispatch(setOpen());
              console.log("click");
            }}
          />
        </Menu>
        <Logo to='/' >
          <img src="./images/Logo.png" alt="" />
        </Logo>

        <NavLink to="/login" value="shows" location={title}>
          Login
        </NavLink>
        <NavLink to="/subscribe" value="shows" location={title}>
          Subscribe
        </NavLink>
        <Input>
          <input type="text" placeholder="Search" />
          <AiOutlineSearch />
        </Input>
        <Profile>
          <img src="https://www.dmarge.com/wp-content/uploads/2021/01/dwayne-the-rock--480x320.jpg" alt="" />
        </Profile>
      </Container>
    </Nav>
  );
}

export default Header;
