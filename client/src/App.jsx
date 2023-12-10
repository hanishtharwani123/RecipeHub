import React from "react";
import Main from "./components/main";
import Register from "./components/register";
import Login from "./components/login";
import Contact from "./components/contact";
import Recipe from "./components/recipe";
import CreateRecipe from "./components/createRecipe";
import SavedRecipe from "./components/savedRecipe";
import OneRecipe from "./components/oneRecipe";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/recipe" element={<Recipe />} />
          <Route path="/createRecipe" element={<CreateRecipe />} />
          <Route path="/savedRecipe" element={<SavedRecipe />} />
          <Route path="/oneRecipe/:id" element={<OneRecipe />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
