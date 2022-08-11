import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./Page/Home";
import List from "./Page/List";
import Page from "./Components/Page";
import Detail from "./Page/Detail";
import Channel from "./Page/Channel";
import Signin from "./Page/Signin";
import Signup from "./Page/Signup";

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
          <Route path="channels" >
            <Route path=":name" element={<Channel />} />

          </Route>

          <Route path="categories" element={<List />} />
          <Route path="details" element={<Detail />} />
        </Route>
        <Route path="signin" element={<Signin />} />
        <Route path="signup" element={<Signup />} />
      </Routes>
    </>
  );
}

export default App;
