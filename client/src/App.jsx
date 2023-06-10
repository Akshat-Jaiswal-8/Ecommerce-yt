import React from "react";
import Layout from "./components/layout/Layout.jsx";
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage.jsx";
import About from "./pages/About.jsx";
import Contacts from "./pages/Contacts.jsx";
import Policy from "./pages/Policy.jsx";
import Error from "./pages/Error.jsx";

function App(props) {
  return (
    <Routes>
      <Route path={"/"} element={<HomePage />} />
      <Route path={"/about"} element={<About />} />
      <Route path={"/contact"} element={<Contacts />} />
      <Route path={"/policy"} element={<Policy />} />
      <Route path={"*"} element={<Error />} />
    </Routes>
  );
}

export default App;
