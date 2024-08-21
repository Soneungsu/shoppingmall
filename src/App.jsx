import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import { ProuductAll } from "./pages/ProuductAll";
import Login from "./pages/Login";
import Detail from "./pages/Detail";
import Nav from "./component/Nav";
import "./global.scss";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Nav />
      <Routes>
        <Route path="/" element={<ProuductAll />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/detail/:id" element={<Detail />}></Route>
      </Routes>
    </>
  );
}

export default App;
