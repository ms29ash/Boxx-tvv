import "./App.css";
import React from 'react'
import { Routes, Route } from "react-router-dom";
import Home from "./Page/Home";
import Grid from "./Components/Grid";
import Page from "./Components/Page";
import Detail from "./Page/Detail";
import Channel from "./Page/Channel";
import Categories from "./Page/Category";
import Signin from "./Page/Signin";
import Signup from "./Page/Signup";
import Password from "./Page/Password";
import Otp from "./Page/Otp";
import NotFound from './Page/NotFound'
import Auth from "./Components/Auth";
import ScrollToTop from "./Components/ScrollToTop";


function App() {


  return (
    <>
      <ScrollToTop />
      <Routes>


        <Route path="/" element={<Page />}>
          <Route index element={<Home />} />
          <Route path="movies" >
            <Route index element={<Grid />} />
            <Route path=":id" element={<Detail />} />

          </Route>
          <Route path="shows" >
            <Route index element={<Grid />} />
            <Route path=":id" element={<Detail />} />

          </Route>
          <Route path="anime" >
            <Route index element={<Grid />} />
            <Route path=":id" element={<Detail />} />

          </Route>
          <Route path="channels" >
            <Route path=":name" element={<Channel />} />

          </Route>

          <Route path="category" >
            <Route path="action" element={<Categories />} />
            <Route path="adventure" element={<Categories />} />
            <Route path="sci-fi" element={<Categories />} />
            <Route path="thriller" element={<Categories />} />
            <Route path="crime" element={<Categories />} />
          </Route>
          <Route path="details" element={<Detail />} />
        </Route>

        <Route path="*" element={<NotFound />} />
        <Route path="signin" element={<Auth />} >
          <Route index element={<Signin />} />
        </Route>
        <Route path="signup" element={<Auth />}  >
          <Route index element={<Signup />} />
          <Route path="password" element={<Password />} />
          <Route path="otp" element={<Otp />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
