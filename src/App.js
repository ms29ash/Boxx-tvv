import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./Page/Home";
import List from "./Page/List";
import Page from "./Components/Page";
import Detail from "./Page/Detail";

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
          <Route path="shows" element={<List />} />
          <Route path="categories" element={<List />} />
          <Route path="details" element={<Detail />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
