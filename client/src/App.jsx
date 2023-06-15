import React from "react";
import Layout from "./components/layout/Layout.jsx";
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage.jsx";
import About from "./pages/About.jsx";
import Contacts from "./pages/Contacts.jsx";
import Policy from "./pages/Policy.jsx";
import Error from "./pages/Error.jsx";
import Login from "./pages/Auth/Login.jsx";
import Register from "./pages/Auth/Register.jsx";
import Dashboard from "./pages/user/Dashboard.jsx";
import Private from "./components/routes/Private.jsx";
import ForgotPassword from "./pages/Auth/ForgotPassword.jsx";
import AdminRoute from "./components/routes/AdminRoute.jsx";
import AdminDashboard from "./pages/admin/AdminDashboard.jsx";

function App(props) {
  return (
    <Routes>
      <Route path={"/"} element={<HomePage />} />
      <Route path={"/dashboard"} element={<Private />}>
        <Route path={"user"} element={<Dashboard />} />
      </Route>
      <Route path={"/dashboard"} element={<AdminRoute />}>
        <Route path={"admin"} element={<AdminDashboard />} />
      </Route>
      <Route path={"/register"} element={<Register />} />
      <Route path={"/login"} element={<Login />} />
      <Route path={"/forgot-password"} element={<ForgotPassword />} />
      <Route path={"/about"} element={<About />} />
      <Route path={"/contact"} element={<Contacts />} />
      <Route path={"/policy"} element={<Policy />} />
      <Route path={"*"} element={<Error />} />
    </Routes>
  );
}
// 3:16:42

export default App;
