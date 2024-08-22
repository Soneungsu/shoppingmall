import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import { ProuductAll } from "./pages/ProuductAll";
import Login from "./pages/Login";
import Detail from "./pages/Detail";
import Nav from "./component/Nav";
import "bootstrap/dist/css/bootstrap.min.css";
import "./global.scss";
import PrivateRoute from "./route/PrivateRoute";

function App() {
  const [authenticate, setAuthenticate] = useState(false); // true이면 로그인이 됨
  useEffect(() => {
    console.log("aaa", authenticate);
  }, [authenticate]);
  return (
    <>
      <Nav />
      <Routes>
        <Route path="/" element={<ProuductAll />}></Route>
        <Route
          path="/login"
          element={<Login setAuthenticate={setAuthenticate} />}
        ></Route>
        <Route
          path="/detail/:id"
          element={<PrivateRoute authenticate={authenticate} />}
        ></Route>
      </Routes>
    </>
  );
}

export default App;
