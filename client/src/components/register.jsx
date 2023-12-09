import React, { useState } from "react";
import "../styles/register.css";
import Header from "../components/header";
import Footer from "../components/footer";
import { Link } from "react-router-dom";
import baseUrl from "../baseUrl";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const register = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .post(`${baseUrl}/register`, { username, password })
      .then((res) => {
        console.log(res);
        if (res.data == "user existed") {
          alert("User already existed, Please Login");
          navigate("/login");
        } else {
          alert("User Registered Successfully");
          navigate("/recipe");
        }
      })
      .catch((e) => {
        console.log(e);
      });
  };

  return (
    <>
      <Header buttonName="Login" buttonLink="/login" />
      <div className="container">
        <div className="register_box">
          <h1 className="register_names">Register</h1>
          <form onSubmit={handleSubmit} className="enter">
            <label htmlFor="">Username</label>
            <input
              type="text"
              name="username"
              placeholder="Enter Username"
              onChange={(e) => setUsername(e.target.value)}
              value={username}
              className="register_input"
            />
            <label htmlFor="">Password</label>
            <input
              type="password"
              name="password"
              placeholder="Enter Password"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
              className="register_input"
            />
            <div className="btn_submit">
              <button className="submiting">Submit</button>
            </div>
          </form>
          <div className="account">
            <p className="have">Have an Account ?</p>
            <Link to="/login">
              <button className="log">Login</button>
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default register;
