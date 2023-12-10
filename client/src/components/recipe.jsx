import React, { useEffect } from "react";
import Header from "./header";
import Contact from "./contact";
import Footer from "./footer";
import "../styles/recipe.css";
import { Link } from "react-router-dom";
import burger from "../assets/burger1.png";
import AOS from "aos/dist/aos";
import "aos/dist/aos.css";

const Recipe = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // You can change the duration as per your requirement
    });
  }, []);

  return (
    <>
      <Header
        buttonName="Logout"
        buttonLink="/"
        save="/savedRecipe"
        create="/createRecipe"
      />
      <div className="card" data-aos="fade-up">
        <h1 className="tagline_welcome" data-aos="fade-up">
          Welcome to RecipeHub
        </h1>
        <h1 className="tagline_reciep" data-aos="fade-up">
          where every culinary adventure begins with a simple click. Create,
          savor, and store your favorite recipes effortlessly – it all starts
          right here!
        </h1>
        <div className="btn_recipe" data-aos="fade-up">
          <Link to="/createRecipe">
            <button className="create_recipe">Create Your Recipe</button>
          </Link>
        </div>
        <div className="img_reciep" data-aos="fade-up">
          <img src={burger} alt="burger" className="burger" loading="lazy" />
        </div>
      </div>
      <Contact />
      <Footer />
    </>
  );
};

export default Recipe;
