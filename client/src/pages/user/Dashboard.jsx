import React from "react";
import Layout from "../../components/layout/Layout.jsx";
import { useAuth } from "../../context/auth.jsx";
import UserMenu from "../../components/layout/UserMenu.jsx";

function Dashboard() {
  const [auth] = useAuth();
  return (
    <Layout>
      <div className={"container-fluid m-3 p-3"}>
        <div className={"row"}>
          <div className={"col-md-3"}>
            <UserMenu />
          </div>
          <div className={"col-md-9"}>
            <div className={"card w-75 p-3"}>
              <h1>User Name : {auth?.user?.name}</h1>
              <h1>User Email : {auth?.user?.email}</h1>
              <h1>User Contact: {auth?.user?.phone}</h1>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

//4:09:40

export default Dashboard;
