import React from "react";
import Header from "./Header.jsx";
import Footer from "./Footer.jsx";

function Layout(props) {
  return (
    <>
      <Header />
      <main>{props.children}</main>
      <Footer />
    </>
  );
}

export default Layout;
