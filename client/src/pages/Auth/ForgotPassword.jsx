import React, { useState } from "react";
import Layout from "../../components/layout/Layout.jsx";
import { toast } from "react-toastify";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const ForgotPassword = (props) => {
  const [email, setEmail] = useState("");
  const [question, setQuestion] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const navigate = useNavigate();
  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        "http://localhost:8080/api/v1/auth/forgot-password",
        {
          email,
          newPassword,
          question,
        }
      );
      if (res && res.data.success) {
        toast.success(res.data && res.data.message);
        navigate("/login");
      }
    } catch (error) {
      console.log(error);
      toast.error("something went wrong");
    }
  };
  return (
    <Layout>
      <div className={"register"}>
        <h1>Forgot Password</h1>
        <form onSubmit={submitHandler}>
          <div className="mb-3">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="form-control"
              placeholder="Enter your email"
              required
            />
          </div>
          <div className="mb-3">
            <input
              value={question}
              type="text"
              onChange={(e) => setQuestion(e.target.value)}
              className="form-control"
              placeholder="Enter your answer"
              required
            />
          </div>
          <div className="mb-3">
            <input
              value={newPassword}
              type="password"
              onChange={(e) => setNewPassword(e.target.value)}
              className="form-control"
              placeholder="Enter your new password"
              required
            />
          </div>

          <button type={"submit"} className={"m-3 btn btn-primary"}>
            Submit
          </button>
        </form>
      </div>
    </Layout>
  );
};

export default ForgotPassword;
