import React, { useState, useEffect } from "react";
import Header from "./header";
import Footer from "./footer";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import baseUrl from "../baseUrl";
import AOS from "aos/dist/aos";
import "aos/dist/aos.css";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    AOS.init({
      duration: 1000, // You can change the duration as per your requirement
    });
  }, []);

  const handle = (e) => {
    e.preventDefault();
    axios
      .post(`${baseUrl}/login`, { username, password })
      .then((res) => {
        console.log(res);
        if (res.data === "login successfully") {
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
      <div className="container" data-aos="fade-up">
        <div className="register_box" data-aos="fade-up">
          <h1 className="register_names" data-aos="fade-up">
            Login
          </h1>
          <form onSubmit={handle} className="enter" data-aos="fade-up">
            <label htmlFor="" data-aos="fade-up">
              Username
            </label>
            <input
              type="text"
              name="username"
              placeholder="Enter Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="register_input"
              data-aos="fade-up"
            />
            <label htmlFor="" data-aos="fade-up">
              Password
            </label>
            <input
              type="password"
              name="password"
              placeholder="Enter Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="register_input"
              data-aos="fade-up"
            />
            <div className="btn_submit" data-aos="fade-up">
              <button className="submiting">Submit</button>
            </div>
          </form>
          <div className="account" data-aos="fade-up">
            <p className="have" data-aos="fade-up">
              Don't Have an Account ?
            </p>
            <Link to="/register" data-aos="fade-up">
              <button className="log">Register</button>
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Login;
