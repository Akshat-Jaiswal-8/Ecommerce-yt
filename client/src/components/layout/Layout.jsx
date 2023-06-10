import React from "react";
import Header from "./Header.jsx";
import Footer from "./Footer.jsx";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Layout(props) {
  return (
    <>
      <Header />
      <main>
        {props.children}
        <ToastContainer />
      </main>
      <Footer />
    </>
  );
}

export default Layout;
