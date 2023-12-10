import React from "react";
import "../styles/main.css";
import { Link } from "react-router-dom";
import web from "../assets/Pasta-pana.png";

const main = () => {
  return (
    <>
      <div className="page">
        <div className="navbar">
          <h1 className="logo_main">RecipeHub</h1>
          <button className="login_register">Register</button>
        </div>
        <div className="main">
          <div className="about">
            <h1 className="tagline">
              Create, save, and savor your unique culinary stories, one
              ingredient at a time.
            </h1>

            <p className="below_tagline">
              Register today, ignite your passion for cooking, and let the
              culinary exploration begin with every recipe you create and save.
            </p>
            <div className="register_btn">
              <Link to="/register">
                {" "}
                <button className="register">Begin Your Journey</button>
              </Link>
            </div>
          </div>
          <div className="image_home">
            <img
              src={web}
              alt="food_Recipe"
              className="Food_img"
              loading="lazy"
            />
          </div>
        </div>
        <div className="me">
          <h1 className="hanish">Made with ❤️ by Hanish</h1>
        </div>
      </div>
    </>
  );
};

export default main;
