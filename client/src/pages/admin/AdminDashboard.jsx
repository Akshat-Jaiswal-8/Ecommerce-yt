import React from "react";
import Layout from "../../components/layout/Layout.jsx";
import AdminMenu from "../../components/layout/AdminMenu.jsx";
import { useAuth } from "../../context/auth.jsx";

function AdminDashboard() {
  const [auth] = useAuth();
  return (
    <Layout>
      <div className={"container-fluid m-3 p-3"}>
        <div className={"row"}>
          <div className={"col-md-3"}>
            <AdminMenu />
          </div>
          <div className={"col-md-9"}>
            <div className={"card w-75 p-3"}>
              <h1>Admin Name : {auth?.user?.name}</h1>
              <h1>Admin Email : {auth?.user?.email}</h1>
              <h1>Admin Contact: {auth?.user?.phone}</h1>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

//4:09:40

export default AdminDashboard;
