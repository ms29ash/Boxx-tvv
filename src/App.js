import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./Page/Home";
import List from "./Page/List";
import Page from "./Components/Page";
import Detail from "./Page/Detail";
import Channel from "./Page/Channel";
import Signin from "./Page/Signin";
import Signup from "./Page/Signup";
import Password from "./Page/Password";
import Otp from "./Page/Otp";
import Categories from "./Page/Category";

function App() {
  return (
    <>
      <Routes>

        <Route path="/" element={<Page />}>
          <Route index element={<Home />} />
          <Route path="movies" >
            <Route index element={<List />} />
            <Route path=":id" element={<Detail />} />

          </Route>
          <Route path="shows" >
            <Route index element={<List />} />
            <Route path=":id" element={<Detail />} />

          </Route>
          <Route path="anime" >
            <Route index element={<List />} />
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
        <Route path="signin" element={<Signin />} />
        <Route path="signup"  >
          <Route index element={<Signup />} />
          <Route path="password" element={<Password />} />
          <Route path="otp" element={<Otp />} />
        </Route>

      </Routes>
    </>
  );
}

export default App;
