const mongoose = require("mongoose");

const recipeSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Name is required"],
  },
  description: {
    type: String,
    required: [true, "Description is required"],
  },
  ingredients: {
    type: String,
    required: [true, "Ingredients is required"],
  },
  url: {
    type: String,
    required: [true, "URL is required"],
  },
});

const recipeModel = new mongoose.model("recipe", recipeSchema);
module.exports = recipeModel;
