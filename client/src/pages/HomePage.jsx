import React from "react";
import Layout from "../components/layout/Layout.jsx";
import { useAuth } from "../context/auth.jsx";

function HomePage(props) {
  const [auth, setAuth] = useAuth();
  return (
    <Layout>
      <h1>Home Page</h1>
      <pre>{JSON.stringify(auth, null, 4)}</pre>
    </Layout>
  );
}

export default HomePage;
