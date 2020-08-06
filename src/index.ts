import express from "express";
import { resolve } from "path";

const app = express();

app.get("/", (req, res) => {
  res.send("Node with Type Script");
});

app.listen(3000, () => {
  console.log("running on port 3000");
});
