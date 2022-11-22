import "./App.css";
import React from 'react'
import { Routes, Route, Outlet } from "react-router-dom";
import { useSelector } from 'react-redux';
//components
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
import ScrollToTop from "./Components/ScrollToTop";
import Watchlater from "./Page/Watchlater";
import Favorites from "./Page/Favorites";
//Routes
import ProtectedRoute from "./Routes/ProtectedRoute";
import AuthRoute from "./Routes/AuthRoute";


function App() {
  const signedIn = useSelector(state => state.user.signedIn);


  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="*" element={<NotFound />} />
        {
          (signedIn === false || signedIn === null) &&
          <>
            ( <Route path="signin" element={<AuthRoute><Signin /></AuthRoute>} />
            <Route path="signup" element={<AuthRoute><Outlet /> </AuthRoute>}  >
              <Route index element={<Signup />} />
              <Route path="password" element={<Password />} />
              <Route path="otp" element={<Otp />} />
            </Route>)
          </>
          // : <></>
        }

        <Route path="/" element={<ProtectedRoute><Page /></ProtectedRoute>}>
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
          <Route path="watchlater" element={<Watchlater />} />
          <Route path="favorites" element={<Favorites />} />
        </Route>

        {/* } */}

      </Routes>
    </>
  );
}

export default App;
