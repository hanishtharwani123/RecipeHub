require("dotenv").config();
const express = require("express");
const cors = require("cors");
const { urlencoded } = require("body-parser");
const userModel = require("./models/userSchema");
const recipeModel = require("./models/recipeSchema");
const app = express();
const bcrypt = require("bcrypt");
require("./db/connect");
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());
app.use(urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send("Hello world");
});

app.get("/oneRecipe/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const oneRecipe = await recipeModel.findById({ _id: id });
    res.send(oneRecipe);
    console.log(oneRecipe);
  } catch (err) {
    console.log(err);
  }
});

app.get("/savedRecipe", async (req, res) => {
  try {
    const recipe = await recipeModel.find({});
    res.send(recipe);
    console.log(recipe);
  } catch (err) {
    console.log(err);
  }
});

app.post("/createRecipe", async (req, res) => {
  try {
    const recipe = new recipeModel({
      name: req.body.name,
      description: req.body.description,
      ingredients: req.body.ingredients,
      url: req.body.url,
    });
    await recipe.save();
    res.send(recipe);
    console.log(recipe);
  } catch (err) {
    console.log(err);
  }
});

app.post("/login", async (req, res) => {
  const { username, password } = req.body;
  try {
    const userAgainExist = await userModel.findOne({ username, password });
    if (userAgainExist) {
      res.json("login successfully");
    } else {
      res.json("Username and Password are not Registered");
    }
  } catch (err) {
    console.log(err);
  }
});

app.post("/register", async (req, res) => {
  const { username, password } = req.body;
  try {
    const userExist = await userModel.findOne({ username: username });
    if (userExist) {
      return res.json("user existed");
    }

    // const passwordHash = await bcrypt.hash(password, 10);
    const user = new userModel({
      username,
      password,
    });
    await user.save();
    res.json({ message: "user registered successfullly" });
    console.log(user);
    res.send(user);
  } catch (err) {
    console.log(err);
  }
});

app.listen(port, () => {
  console.log(`server is running on ${port}`);
});
