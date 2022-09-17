import React from "react";
import styled from "styled-components";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Cookies from "universal-cookie";
import { useSelector, useDispatch } from "react-redux";
import { setOpen } from "../features/menu/menuSlice";
import { removeUser } from "../features/user/userSlice";

//Icons
import {
  AiOutlineHome,
  AiOutlineClockCircle,
  AiOutlineHeart,
  AiOutlineCloudDownload,
  AiOutlineSetting,
} from "react-icons/ai";
import { BsBookmark } from "react-icons/bs";
import { BiHelpCircle, BiLogIn } from "react-icons/bi";
import { MdOutlineMovie } from "react-icons/md";
import { RiMovieLine } from "react-icons/ri";
import { FaSignOutAlt } from "react-icons/fa";
import { MdOutlineAnimation } from "react-icons/md";

const Container = styled.div`
  width: 30vw;
  max-width: 200px;

  height: 99vh;
  margin: 0.5vh 1vw 0.5vh 0;
  background-color: ${(p) => p.theme.color.gray};
  border-radius: 0px 5px 5px 0px;
  @media screen and (min-width: 500px) and (max-width: 1024px) {
    width: 100px;
  }
  @media screen and (min-width: 0px) and (max-width: 500px) {
    position: absolute;
    top: 0;
    bottom: 0;
    width: 50%;
    z-index: 50;
    transform-origin: left center;
    transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
    transform: ${(p) =>
      p.isOpen === true ? "translateX(0%)" : "translateX(-100%)"};
  }
`;
const Sidebar = styled.div`
  width: 100%;
  display: grid;
`;
const Wrapper = styled.div`
  width: 95%;
  margin-left: 5%;
  font-size: 1.25rem;
  overflow-y: scroll;
  height: 100vh;
  ::-webkit-scrollbar {
    width: 5px;
  }

  /* Track */
  ::-webkit-scrollbar-track {
    background: ${(p) => p.theme.color.gray};
  }

  /* Handle */
  ::-webkit-scrollbar-thumb {
    background: #595959;
    border-radius: 10px;
    width: 5px;
  }

  /* Handle on hover */
  ::-webkit-scrollbar-thumb:hover {
    background: #595959;
  }
  hr {
    margin: 1rem 0;
    background-color: #f2f2f2;
    border: none;
    height: 2px;
    width: 90%;
    @media screen and (min-width: 500px) and (max-width: 1024px) {
      margin: 1rem auto;
      width: 80%;
    }
  }
`;

const Options = styled.div`
  margin-top: 10%;
`;
const Group = styled.div`
  @media screen and (min-width: 500px) and (max-width: 1024px) {
    font-size: 1rem;
  }
`;
const Head = styled.div`
  margin: 1.5rem 0;
  @media screen and (min-width: 500px) and (max-width: 1024px) {
    margin: 1rem;
  }
`;

const Opt = styled(Link)`
  display: flex;
  color: white;
  text-decoration: none;
  margin: 0.25rem;
  cursor: pointer;
  align-items: center;
  padding: 0.5rem;
  font-weight: bold;
  border-radius: 30px;
  color: ${(p) => p.selected === true && p.theme.color.main};
  p {
    font-size: 1rem;
  }
  &:hover {
    background-color: ${(p) => p.theme.color.main};
    color: ${(p) => p.selected === true && "#fff"};
  }
  @media screen and (min-width: 500px) and (max-width: 1024px) {
    flex-direction: column;
    margin: 0.15rem;
    padding: 0.15rem;
    font-weight: bold;
    p {
      font-size: 0.75rem;
    }
  }
`;
const SignOut = styled.div`
  display: flex;
  color: white;
  text-decoration: none;
  margin: 0.25rem;
  cursor: pointer;
  align-items: center;
  padding: 0.5rem;
  font-weight: bold;
  border-radius: 30px;
  color: ${(p) => p.selected === true && p.theme.color.main};
  p {
    font-size: 1rem;
  }
  &:hover {
    background-color: ${(p) => p.theme.color.main};
    color: ${(p) => p.selected === true && "#fff"};
  }
  @media screen and (min-width: 500px) and (max-width: 1024px) {
    flex-direction: column;
    margin: 0.15rem;
    padding: 0.15rem;
    font-weight: bold;
    p {
      font-size: 0.75rem;
    }
  }
`;
const Icon = styled.div`
  padding-right: 1rem;
  padding-left: 0.5rem;
  svg {
    stroke: #fff;
  }
`;

function SideMenu() {
  const isOpen = useSelector((state) => state.menu.isOpen);
  const user = useSelector((state) => state.user.user);
  const dispatch = useDispatch();
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const cookies = new Cookies();

  const closeMenu = () => {
    dispatch(setOpen());
  };

  const handleSignOut = () => {
    cookies.remove("token");
    dispatch(removeUser());
    navigate("signin");
  };

  return (
    <Container isOpen={isOpen}>
      <Sidebar>
        <Wrapper>
          <Options>
            <Group>
              <Head>Menu</Head>
              <Opt to="/" onClick={closeMenu} selected={pathname === "/"}>
                <Icon>
                  <AiOutlineHome />
                </Icon>
                <p>Home</p>
              </Opt>
              <Opt
                to="/movies"
                onClick={closeMenu}
                selected={pathname === "/movies"}>
                <Icon>
                  <MdOutlineMovie />
                </Icon>
                <p>Movies</p>
              </Opt>
              <Opt
                to="/shows"
                onClick={closeMenu}
                selected={pathname === "/shows"}>
                <Icon>
                  <RiMovieLine />
                </Icon>
                <p>Shows</p>
              </Opt>
              <Opt
                to="/anime"
                onClick={closeMenu}
                selected={pathname === "/anime"}>
                <Icon>
                  <MdOutlineAnimation />
                </Icon>
                <p>Anime</p>
              </Opt>
            </Group>
            <hr />
            <Group>
              <Head>Library</Head>
              <Opt
                to="/recent"
                onClick={closeMenu}
                selected={pathname === "/recent"}>
                <Icon>
                  <AiOutlineClockCircle />{" "}
                </Icon>
                <p>Recent</p>
              </Opt>
              <Opt
                to="/favourite"
                onClick={closeMenu}
                selected={pathname === "/favourite"}>
                <Icon>
                  <AiOutlineHeart />{" "}
                </Icon>
                <p>Favourite</p>
              </Opt>
              <Opt
                to="/watchlist"
                onClick={closeMenu}
                selected={pathname === "/watchlist"}>
                <Icon>
                  <BsBookmark />{" "}
                </Icon>
                <p>Watchlist</p>
              </Opt>
              <Opt
                to="/downloads"
                onClick={closeMenu}
                selected={pathname === "/downloads"}>
                <Icon>
                  <AiOutlineCloudDownload />{" "}
                </Icon>
                <p>Downloads</p>
              </Opt>
            </Group>
            <hr />
            <Group>
              <Opt
                to="/settings"
                onClick={closeMenu}
                selected={pathname === "/settings"}>
                <Icon>
                  <AiOutlineSetting />{" "}
                </Icon>
                <p>Settings</p>
              </Opt>
              <Opt
                to="/help"
                onClick={closeMenu}
                selected={pathname === "/help"}>
                <Icon>
                  <BiHelpCircle />{" "}
                </Icon>
                <p>Help</p>
              </Opt>
            </Group>
          </Options>
          {user ? (
            <SignOut onClick={handleSignOut}>
              <Icon>
                <FaSignOutAlt />{" "}
              </Icon>
              <p>Sign Out</p>
            </SignOut>
          ) : (
            <Opt to="/signin">
              <Icon>
                <BiLogIn />{" "}
              </Icon>
              <p>Login</p>
            </Opt>
          )}
        </Wrapper>
      </Sidebar>
    </Container>
  );
}

export default SideMenu;
