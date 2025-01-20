import express from "express";
import fs from "fs";
import crypto from "crypto";

const recipesRouter = express.Router();

recipesRouter.get("/", (req, res) => {
  const data = fs.readFileSync("./data/recipes.json");
  const recipesInfo = JSON.parse(data);
  res.send(recipesInfo);
});

// router.get("/:recipesId", (req, res) => {
//   // console.log(req.params);
//   //   const data = fs.readFileSync("./data/recipes.json");
//   //   const recipesInfo = JSON.parse(data);
//   //   const getSingleRecipe = recipesInfo.find((recipes) => {
//   //     return recipes.id === req.params.recipesId;
//   //   });
//   //   if (!getSingleRecipe) {
//   //     res.status(404).send("Single recipes not found");
//   //   }
//   //   res.send(getSingleRecipe);
// });

recipesRouter.get("/recipes/:id", (req, res) => {
  //   console.log(req.params);
  const recipeId = req.params.id;
  const data = fs.readFileSync("./data/recipes.json");
  const recipesInfo = JSON.parse(data);
  const getSingleRecipe = recipesInfo.find((recipes) => {
    return recipes.id === recipeId;
  });
  res.send(getSingleRecipe);
});
export default recipesRouter;
