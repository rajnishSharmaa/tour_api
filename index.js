import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import morgan from "morgan";
import userRouter from "./routes/user.js";
import tourRouter from "./routes/tour.js";
import dotenv from "dotenv";
import connect from "./database/database.js";

let port = process.env.SERVER_PORT || 5000


const app = express();
dotenv.config();

connect()
app.use(morgan("dev"));
app.use(express.json({ limit: "30mb", extended: true }));
app.use(express.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

app.use("/users", userRouter); // http://localhost:5000/users/signup
app.use("/tour", tourRouter);
app.get("/", (req, res) => {
  res.send("Welcome to tour API");
});



app.listen(port, () =>
    console.log(`Server running on port ${port}`)
);
