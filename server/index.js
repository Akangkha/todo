import express, { json } from "express";
import morgan from "morgan";
import { config } from "dotenv";
import cors from "cors";
import { connect } from "mongoose";
import compress from "compression";
import user from "./src/routes/UserRoutes.js";
import dotenv from "dotenv";    
dotenv.config();
const app = express();
const port = process.env.PORT || 3300;
const mongo_uri =
  process.env.MONGO_URI || "mongodb://localhost:27017/todo";

app.use(compress());
app.use(cors());
app.use(json());
app.use(morgan("dev"));

app.use("/", (req, res) => {
  res.send("Hello World");
});

app.use("user",user); 
connect(mongo_uri)
  .then(() => {
    app.listen(port, () => {
      console.log(`Server running on port ${port}`);
    });
  })
  .catch((err) => {
    console.log(err);
  });
