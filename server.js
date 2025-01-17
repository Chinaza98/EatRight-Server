import express from "express";

const app = express();

const PORT = 8000;

app.get("/", (_req, res) => {
  res.send("Welcome to our API server");
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
