const express = require("express");
const parser = require("body-parser");
const cors = require("cors");
const mongoose = require("./db/Gif.js");
const app = express();

const gifsController = require("./controllers/gifs.js");

app.set("port", process.env.PORT || 3000);

app.use(parser.urlencoded({ extended: true }));
app.use(parser.json());
app.use(cors());

app.set("view engine", "hbs");

app.use("/gifs", gifsController);

app.listen(app.get("port"), () => {
  console.log(`✅ PORT: ${app.get("port")} 🌟`);
});
