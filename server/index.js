import express from "express";
import morgan from "morgan";
import cors from "cors";
import { connect } from "mongoose";
import compress from "compression";
import user from "./src/routes/UserRoutes.js";
import cookieParser from "cookie-parser";
import dotenv from "dotenv";

dotenv.config();
const app = express();
const port = process.env.PORT || 3300;
const mongo_uri = process.env.MONGO_URI || "mongodb://localhost:27017/todolist";

app.use(compress());
app.use(
  cors({
    origin: ["http://localhost:3000", "https://user-details-6kot.vercel.app"],
    credentials: true,
  })
);
app.use(express.json());
app.use(morgan("dev"));
app.use(cookieParser());
app.use("/user", user);

app.get("/", (req, res) => {
  res.send("This is Todo server");
});

connect(mongo_uri)
  .then(() => {
    app.listen(port, () => {
      console.log(`Server running on port ${port}`);
    });
  })
  .catch((err) => {
    console.log(err);
  });
