import React, { useState } from "react";
import Header from "./header";
import Footer from "./footer";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const handle = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:5000/login", { username, password })
      .then((res) => {
        console.log(res);
        if (res.data == "login successfully") {
          navigate("/recipe");
        } else {
          alert("Username and Password not Registered");
          navigate("/register");
        }
      })
      .catch((e) => {
        console.log(e);
      });
  };
  return (
    <>
      <Header buttonName="Register" buttonLink="/register" />
      <div className="container">
        <div className="register_box">
          <h1 className="register_names">Login</h1>
          <form onSubmit={handle} className="enter">
            <label htmlFor="">Username</label>
            <input
              type="text"
              name="username"
              placeholder="Enter Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="register_input"
            />
            <label htmlFor="">Password</label>
            <input
              type="password"
              name="password"
              placeholder="Enter Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="register_input"
            />
            <div className="btn_submit">
              <button className="submiting">Submit</button>
            </div>
          </form>
          <div className="account">
            <p className="have">Don't Have an Account ?</p>
            <Link to="/register">
              <button className="log">Register</button>
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default login;
