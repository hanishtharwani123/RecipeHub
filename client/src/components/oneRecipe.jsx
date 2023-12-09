import React, { useEffect, useState } from "react";
import "../styles/oneRecipe.css";
import Header from "./header";
import Footer from "./footer";
import { useParams } from "react-router-dom";
import axios from "axios";
import burger from "../assets/burger.png";

const oneRecipe = () => {
  const { id } = useParams();
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [url, setUrl] = useState("");

  useEffect(() => {
    axios.get("http://localhost:5000/oneRecipe/" + id).then((res) => {
      console.log(res.data);
      setName(res.data.name);
      setDescription(res.data.description);
      setIngredients(res.data.ingredients);
      setUrl(res.data.url);
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
      <div className="carding">
        <div className="crack">
          <img src={url} alt="Recipe" className="Recipesss" />
          <div className="craeteRecipeInfo">
            <h1 className="nameOfRecipe">{name}</h1>
            <button className="saved">Saved</button>
            <div className="ing">
              <h1 className="ingredientsnames">Ingredients</h1>
              <p className="ingredientsOfRecipe">{ingredients}</p>
            </div>
            <div className="ing">
              <h1 className="ingredientsnames">Description</h1>
              <p className="ingredientsOfRecipe">{description}</p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default oneRecipe;
