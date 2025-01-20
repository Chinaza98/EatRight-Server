import express from "express";
import fs from "fs";

const restrictionsRouter = express.Router();

restrictionsRouter.get("/", (req, res) => {
  const restrictiondata = fs.readFileSync("./data/restrictions.json");
  res.send(restrictiondata);
});

export default restrictionsRouter;
