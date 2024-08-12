const dotenv = require("dotenv");
dotenv.config();
const express = require("express");
const mongoose = require("mongoose");
var cors = require("cors");

const todoRoutes = require("./routes/todoRoutes");

//express app
const app = express();

// middlewares
app.use(cors());
app.use(express.json());

// routes
app.use("/api/todos", todoRoutes);

const PORT = process.env.PORT || 8080;

// Connect to database
mongoose
  .connect(process.env.MONGO_URL)
  .then(() => {
    app.listen(PORT, () => {
      console.log(
        `connected to database and server is listening on ${PORT} port`
      );
    });
  })
  .catch((error) => {
    console.log(error);
  });
