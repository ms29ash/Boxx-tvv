import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
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
  justify-content: space-between;
  margin: 0 auto;
  width: 95%;

  padding: 0.25rem;
`;
const NavLinks = styled.div`
  display: flex;
`;

const User = styled.div`
  display: flex;
  align-items: center;
`;

const Register = styled.div`
  display: flex;
  align-items: center;
`;
const NavLink = styled(Link)`
  padding: 0.75rem;
  margin: 0.25rem 1rem;
  cursor: pointer;
  text-align: center;
  color: white;
  text-decoration: none;
  width: 8rem;
  font-weight: bold;
  border-radius: 8px;
  background-color: ${(p) => p.theme.color.main};
  transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;

  &:hover {
    background-color: ${(p) => p.theme.color.mainDark};
  }
  @media screen and (min-width: 0px) and (max-width: 1024px) {
    display: none;
  }
`;
const NavBtn = styled(NavLink)`
  color: ${(p) => p.theme.color.main};
  background: #fff;
  &:hover {
    background-color: #f2f2f2;
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
  flex: 1;
  font-weight: bold;
  cursor: pointer;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  svg {
    margin: 0 0.25rem;
  }
  input {
    outline: none;
    border: none;
    border-bottom: 2px solid #fff;
    background-color: #000;
    font-size: 1rem;
    padding: 0.25rem;
    color: #fff;
    @media screen and (min-width: 0px) and (max-width: 720px) {
      display: none;
    }
  }
`;
const Profile = styled.div`
  img {
    margin: 0 1rem;
    height: 3rem;
    width: 3rem;
    border-radius: 5000px;
    object-fit: cover;
  }
`;
function Header() {
  const dispatch = useDispatch();
  const isOpen = useSelector((state) => state.menu.isOpen);
  const user = useSelector((state) => state.user.user);

  const { pathname } = useLocation();
  const title = pathname.replace("/", "");

  return (
    <Nav>
      <Container>
        <NavLinks>
          <Menu>
            <Hamburger
              toggled={isOpen}
              onToggle={() => {
                dispatch(setOpen());
                console.log("click");
              }}
            />
          </Menu>

          <Logo to="/">
            <img src="./images/Logo.png" alt="" />
          </Logo>
        </NavLinks>

        {user ? (
          <User>
            <Input>
              <AiOutlineSearch />
              <input type="text" placeholder="Search" />
            </Input>

            <Profile>
              <img
                src="https://www.dmarge.com/wp-content/uploads/2021/01/dwayne-the-rock--480x320.jpg"
                alt=""
              />
            </Profile>
          </User>
        ) : (
          <Register>
            <NavLink to="/login" value="shows" location={title}>
              Login
            </NavLink>

            <NavBtn to="/subscribe" value="shows" location={title}>
              Join Now
            </NavBtn>
          </Register>
        )}
      </Container>
    </Nav>
  );
}

export default Header;
