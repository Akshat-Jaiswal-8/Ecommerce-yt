import React from "react";
import Layout from "../components/layout/Layout.jsx";
import { Link } from "react-router-dom";

function Error(props) {
  return (
    <Layout>
      <div className={"pnf"}>
        <h1 className={"pnf-title"}>404</h1>
        <h2 className={"pnf-heading"}>Oops ! Page not Found</h2>
        <Link to={"/"} className={"pnf-btn"}>
          Go back
        </Link>
      </div>
    </Layout>
  );
}

export default Error;
