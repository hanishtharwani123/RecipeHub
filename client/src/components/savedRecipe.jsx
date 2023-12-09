import React, { useEffect, useState } from "react";
import "../styles/savedRecipe.css";
import Header from "./header";
import Footer from "./footer";
import axios from "axios";
import baseUrl from "../baseUrl";
import burger from "../assets/burger.png";
import { Link } from "react-router-dom";

const savedRecipe = () => {
  const [recipe, setRecipe] = useState([]);
  useEffect(() => {
    axios.get(`${baseUrl}/savedRecipe`).then((res) => {
      console.log(res.data);
      setRecipe(res.data);
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
      <div className="cater">
        <h1 className="savedFood">Saved Recipes</h1>
        <div className="actualRecipe">
          {recipe.map((item) => (
            <div className="bex1" key={item.id}>
              <Link className="links" to={`/oneRecipe/${item._id}`}>
                <h1 className="titleRecipe">{item.name}</h1>
              </Link>
              <img src={item.url} alt="Recipe" className="recipeImag" />
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default savedRecipe;
