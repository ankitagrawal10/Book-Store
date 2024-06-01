import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
const app = express();

dotenv.config();

import bookRoute from "./route/book.route.js";
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

app.use("/book",bookRoute);
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});