import React from "react";
import { NavLink } from "react-router-dom";

function AdminMenu(props) {
  return (
    <div className={"text-center"}>
      <div className="list-group">
        <NavLink
          className="list-group-item list-group-item-action"
          to={"/dashboard/admin/create-category"}
        >
          Create Category
        </NavLink>
        <NavLink
          className="list-group-item list-group-item-action"
          to={"/dashboard/admin/create-product"}
        >
          Create Product
        </NavLink>
        <NavLink
          className="list-group-item list-group-item-action"
          to={"/dashboard/admin/users"}
        >
          Users
        </NavLink>
      </div>
    </div>
  );
}

export default AdminMenu;
