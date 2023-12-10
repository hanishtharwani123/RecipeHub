import React, { useEffect, useState } from "react";
import "../styles/savedRecipe.css";
import Header from "./header";
import Footer from "./footer";
import axios from "axios";
import baseUrl from "../baseUrl";
import burger from "../assets/burger.png";
import { Link } from "react-router-dom";
import AOS from "aos/dist/aos";
import "aos/dist/aos.css";

const SavedRecipe = () => {
  const [recipe, setRecipe] = useState([]);

  useEffect(() => {
    axios.get(`${baseUrl}/savedRecipe`).then((res) => {
      console.log(res.data);
      setRecipe(res.data);
    });

    // Initialize AOS on component mount
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
      <div className="cater" data-aos="fade-up">
        <h1 className="savedFood" data-aos="fade-up">
          Saved Recipes
        </h1>
        <div className="actualRecipe" data-aos="fade-up">
          {recipe.map((item) => (
            <div className="bex1" key={item.id} data-aos="fade-up">
              <Link className="links" to={`/oneRecipe/${item._id}`}>
                <h1 className="titleRecipe">{item.name}</h1>
              </Link>
              <img
                src={item.url}
                alt="Recipe"
                className="recipeImag"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default SavedRecipe;
