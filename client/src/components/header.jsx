import React, { useEffect } from "react";
import "../styles/header.css";
import { Link } from "react-router-dom";
import AOS from "aos/dist/aos";
import "aos/dist/aos.css";

const Header = ({ buttonName, buttonLink, save, create }) => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // You can change the duration as per your requirement
    });
  }, []);

  return (
    <>
      <div className="navbar_1" data-aos="fade-down">
        <div className="log_navLink" data-aos="fade-up">
          <h1 className="logos" data-aos="fade-up">
            RecipeHub
          </h1>
          <ul>
            <Link className="links" to={create} data-aos="fade-up">
              <li>Create Recipe</li>
            </Link>
            <Link className="links" to={save} data-aos="fade-up">
              <li>Saved Recipe</li>
            </Link>
            <Link to="/contact" className="links" data-aos="fade-up">
              <li>Contact Us</li>
            </Link>
          </ul>
        </div>
        <div className="btn_login" data-aos="fade-up">
          <Link to={buttonLink} data-aos="fade-up">
            {" "}
            <button className="login" data-aos="fade-down">
              {buttonName}
            </button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Header;
