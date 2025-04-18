import express from "express";
// const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("hello World");
});

app.get("/item", (req, res) => {
  res.send("kiya hal ha.");
});

app.listen(3000, () => {
  console.log("Server is running on http://localhost:3000");
});
