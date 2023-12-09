import React, { useState } from "react";
import "../styles/createRecipe.css";
import Header from "./header";
import Footer from "./footer";
import recipe from "../assets/recipe.jpg";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const createRecipe = () => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [url, setUrl] = useState("");
  const navigate = useNavigate();

  const recipeSubmit = async (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:5000/createRecipe", {
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
      <div className="containing">
        <div className="recipe_box">
          <div className="boxer">
            <h1 className="create_your_recipe">Create Your Recipe</h1>
            <form onSubmit={recipeSubmit} className="create_form">
              <label htmlFor="">Name</label>
              <input
                type="text"
                name="name"
                placeholder="Enter Name"
                className="reaipe_inputss"
                onChange={(e) => setName(e.target.value)}
                value={name}
                required
              />
              <label htmlFor="">Description</label>
              <input
                type="text"
                name="description"
                placeholder="Enter Description"
                className="reaipe_inputss"
                onChange={(e) => setDescription(e.target.value)}
                value={description}
                required
              />
              <label htmlFor="">Ingredients</label>
              <input
                type="text"
                name="ingredients"
                placeholder="Enter Ingredients"
                className="reaipe_inputss"
                onChange={(e) => setIngredients(e.target.value)}
                value={ingredients}
                required
              />
              <label htmlFor="">Image URL</label>
              <input
                type="text"
                name="image"
                placeholder="Enter Image URL"
                className="reaipe_inputss"
                onChange={(e) => setUrl(e.target.value)}
                value={url}
                required
              />

              <div className="recipe_submit_btn">
                <button type="submit" className="recipe_submit">
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
        <div className="instr_img">
          <img src={recipe} alt="recipe" className="recipe_instruction" />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default createRecipe;
