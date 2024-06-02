import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());
dotenv.config();

import bookRoute from "./route/book.route.js";
import userRouter from "./route/user.route.js";

const port = process.env.PORT || 4000;
const URI = process.env.Mongodb_URI;

try {
  mongoose.connect(URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  console.log("connected to mongodb");
} catch (error) {
  console.log("Error", error);
}

app.use("/book", bookRoute);
app.use("/user", userRouter);
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
