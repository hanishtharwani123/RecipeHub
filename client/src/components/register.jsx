import React, { useState, useEffect } from "react";
import "../styles/register.css";
import Header from "../components/header";
import Footer from "../components/footer";
import { Link } from "react-router-dom";
import baseUrl from "../baseUrl";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import AOS from "aos/dist/aos";
import "aos/dist/aos.css";

const Register = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    AOS.init({
      duration: 1000, // You can change the duration as per your requirement
    });
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .post(`${baseUrl}/register`, { username, password })
      .then((res) => {
        console.log(res);
        if (res.data === "user existed") {
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
      <div className="container" data-aos="fade-up">
        <div className="register_box" data-aos="fade-up">
          <h1 className="register_names" data-aos="fade-up">
            Register
          </h1>
          <form onSubmit={handleSubmit} className="enter" data-aos="fade-up">
            <label htmlFor="" data-aos="fade-up">
              Username
            </label>
            <input
              type="text"
              name="username"
              placeholder="Enter Username"
              onChange={(e) => setUsername(e.target.value)}
              value={username}
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
              onChange={(e) => setPassword(e.target.value)}
              value={password}
              className="register_input"
              data-aos="fade-up"
            />
            <div className="btn_submit" data-aos="fade-up">
              <button className="submiting">Submit</button>
            </div>
          </form>
          <div className="account" data-aos="fade-up">
            <p className="have" data-aos="fade-up">
              Have an Account ?
            </p>
            <Link to="/login" data-aos="fade-up">
              <button className="log">Login</button>
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Register;
