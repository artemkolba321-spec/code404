import "dotenv/config";
import express from "express";
import multer from "multer";
import rateLimit from "express-rate-limit";

const app = express();
const PORT = 5000;
app.set("view engine", "ejs");
app.use(express.static("public"));

app.get("/", (req, res) => {
  res.render("index");
});

app.listen(PORT, (req, res) => {
  console.info(`server runing in ${PORT}`);
});
