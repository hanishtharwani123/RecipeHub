import React from "react";
import "../styles/header.css";
import { Link } from "react-router-dom";

const header = ({ buttonName, buttonLink, save, create }) => {
  return (
    <>
      <div className="navbar_1">
        <div className="log_navLink">
          <h1 className="logos">RecipeHub</h1>
          <ul>
            <Link className="links" to={create}>
              <li>Create Recipe</li>
            </Link>
            <Link className="links" to={save}>
              <li>Saved Recipe</li>
            </Link>
            <li>Contact Us</li>
          </ul>
        </div>
        <div className="btn_login">
          <Link to={buttonLink}>
            {" "}
            <button className="login">{buttonName}</button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default header;
