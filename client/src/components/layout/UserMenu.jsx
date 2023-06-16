import React from "react";
import { NavLink } from "react-router-dom";

function UserMenu() {
  return (
    <div className={"text-center"}>
      <div className="list-group">
        <NavLink
          className="list-group-item list-group-item-action"
          to={"/dashboard/user/orders"}
        >
          Orders
        </NavLink>
        <NavLink
          className="list-group-item list-group-item-action"
          to={"/dashboard/user/profile"}
        >
          Profile
        </NavLink>
      </div>
    </div>
  );
}

export default UserMenu;
