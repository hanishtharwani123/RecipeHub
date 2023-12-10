import React, { useEffect, useState } from "react";
import "../styles/oneRecipe.css";
import Header from "./header";
import Footer from "./footer";
import { useParams } from "react-router-dom";
import axios from "axios";
import burger from "../assets/burger.png";
import baseUrl from "../baseUrl";
import AOS from "aos/dist/aos";
import "aos/dist/aos.css";

const OneRecipe = () => {
  const { id } = useParams();
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [url, setUrl] = useState("");

  useEffect(() => {
    axios.get(`${baseUrl}/oneRecipe/` + id).then((res) => {
      console.log(res.data);
      setName(res.data.name);
      setDescription(res.data.description);
      setIngredients(res.data.ingredients);
      setUrl(res.data.url);
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
      <div className="carding" data-aos="fade-up">
        <div className="crack" data-aos="fade-up">
          <img src={url} alt="Recipe" className="Recipesss" loading="lazy" />
          <div className="craeteRecipeInfo" data-aos="fade-up">
            <h1 className="nameOfRecipe" data-aos="fade-up">
              {name}
            </h1>
            <button className="saved" data-aos="fade-up">
              Saved
            </button>
            <div className="ing" data-aos="fade-up">
              <h1 className="ingredientsnames" data-aos="fade-up">
                Ingredients
              </h1>
              <p className="ingredientsOfRecipe" data-aos="fade-up">
                {ingredients}
              </p>
            </div>
            <div className="ing" data-aos="fade-up">
              <h1 className="ingredientsnames" data-aos="fade-up">
                Description
              </h1>
              <p className="ingredientsOfRecipe" data-aos="fade-up">
                {description}
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default OneRecipe;
