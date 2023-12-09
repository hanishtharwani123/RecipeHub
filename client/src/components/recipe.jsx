import React from "react";
import Header from "./header";
import Contact from "./contact";
import Footer from "./footer";
import "../styles/recipe.css";
import { Link } from "react-router-dom";
import burger from "../assets/burger1.png";

const recipe = () => {
  return (
    <>
      <Header
        buttonName="Logout"
        buttonLink="/"
        save="/savedRecipe"
        create="/createRecipe"
      />
      <div className="card">
        <h1 className="tagline_welcome">Welcome to RecipeHub</h1>
        <h1 className="tagline_reciep">
          where every culinary adventure begins with a simple click. Create,
          savor, and store your favorite recipes effortlessly – it all starts
          right here!
        </h1>
        <div className="btn_recipe">
          <Link to="/createRecipe">
            <button className="create_recipe">Create Your Recipe</button>
          </Link>
        </div>
        <div className="img_reciep">
          <img src={burger} alt="burger" className="burger" />
        </div>
      </div>
      <Contact />
      <Footer />
    </>
  );
};

export default recipe;
