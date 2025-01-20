import express from "express";
import cors from "cors";

const app = express();

import recipesRouter from "./routes/recipesRoute.js";
import restrictionsRouter from "./routes/restrictionsRoute.js";

const PORT = 8080;

app.use(cors());
app.use(express.json());

app.use("/recipes", recipesRouter);
app.use("/restrictions", restrictionsRouter);

app.get("/", (_req, res) => {
  res.send("Welcome to our API server");
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
