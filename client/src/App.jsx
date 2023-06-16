import React from "react";
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
import CreateCategory from "./pages/admin/CreateCategory.jsx";
import CreateProduct from "./pages/admin/createProduct.jsx";
import Users from "./pages/admin/Users.jsx";
import Profile from "./pages/user/Profile.jsx";
import Orders from "./pages/user/Orders.jsx";

function App() {
  return (
    <Routes>
      <Route path={"/"} element={<HomePage />} />
      <Route path={"/dashboard"} element={<Private />}>
        <Route path={"user"} element={<Dashboard />} />
        <Route path={"user/profile"} element={<Profile />} />
        <Route path={"user/orders"} element={<Orders />} />
      </Route>
      <Route path={"/dashboard"} element={<AdminRoute />}>
        <Route path={"admin"} element={<AdminDashboard />} />
        <Route path={"admin/create-category"} element={<CreateCategory />} />
        <Route path={"admin/create-product"} element={<CreateProduct />} />
        <Route path={"admin/users"} element={<Users />} />
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
