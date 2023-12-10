import React, { useState, useEffect } from "react";
import "../styles/createRecipe.css";
import Header from "./header";
import Footer from "./footer";
import baseUrl from "../baseUrl";
import recipe from "../assets/recipe.jpg";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import AOS from "aos/dist/aos";
import "aos/dist/aos.css";

const CreateRecipe = () => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [url, setUrl] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    // Initialize AOS on component mount
    AOS.init({
      duration: 1000, // You can change the duration as per your requirement
    });
  }, []);

  const recipeSubmit = async (e) => {
    e.preventDefault();
    axios
      .post(`${baseUrl}/createRecipe`, {
        name,
        description,
        ingredients,
        url,
      })
      .then((res) => {
        console.log(res);
        alert("Recipe Created");
        navigate("/savedRecipe");
      })
      .catch((e) => {
        console.log(e);
      });
  };

  return (
    <>
      <Header
        buttonName="Logout"
        buttonLink="/"
        save="/savedRecipe"
        create="/createRecipe"
      />
      <div className="containing" data-aos="fade-up">
        <div className="recipe_box" data-aos="fade-up">
          <div className="boxer" data-aos="fade-up">
            <h1 className="create_your_recipe" data-aos="fade-up">
              Create Your Recipe
            </h1>
            <form
              onSubmit={recipeSubmit}
              className="create_form"
              data-aos="fade-up"
            >
              <label htmlFor="" data-aos="fade-up">
                Name
              </label>
              <input
                type="text"
                name="name"
                placeholder="Enter Name"
                className="reaipe_inputss"
                onChange={(e) => setName(e.target.value)}
                value={name}
                required
                data-aos="fade-up"
              />
              <label htmlFor="" data-aos="fade-up">
                Description
              </label>
              <input
                type="text"
                name="description"
                placeholder="Enter Description"
                className="reaipe_inputss"
                onChange={(e) => setDescription(e.target.value)}
                value={description}
                required
                data-aos="fade-up"
              />
              <label htmlFor="" data-aos="fade-up">
                Ingredients
              </label>
              <input
                type="text"
                name="ingredients"
                placeholder="Enter Ingredients"
                className="reaipe_inputss"
                onChange={(e) => setIngredients(e.target.value)}
                value={ingredients}
                required
                data-aos="fade-up"
              />
              <label htmlFor="" data-aos="fade-up">
                Image URL
              </label>
              <input
                type="text"
                name="image"
                placeholder="Enter Image URL"
                className="reaipe_inputss"
                onChange={(e) => setUrl(e.target.value)}
                value={url}
                required
                data-aos="fade-up"
              />

              <div className="recipe_submit_btn" data-aos="fade-up">
                <button
                  type="submit"
                  className="recipe_submit"
                  data-aos="fade-up"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
        <div className="instr_img" data-aos="fade-up">
          <img
            src={recipe}
            alt="recipe"
            className="recipe_instruction"
            loading="lazy"
          />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default CreateRecipe;
