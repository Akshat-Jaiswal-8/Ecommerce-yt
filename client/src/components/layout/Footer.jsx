import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="footer">
      <h4 className={"footer-heading text-center"}>
        All rights reserved &copy; Akshat_Jaiswal
      </h4>
      <p className={"footerContent text-center mt-3"}>
        <Link className={"footerPlaces"} to={"/about"}>
          About
        </Link>
        <Link className={"footerPlaces"} to={"/contact"}>
          Contact
        </Link>
        <Link className={"footerPlaces"} to={"/policy"}>
          Policy
        </Link>
      </p>
    </div>
  );
}

export default Footer;
