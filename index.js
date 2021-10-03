const express = require("express");
const cors = require("cors");
const getRoutes = require("./Routes/get.routes");
const a = require("dotenv").config();
const app = express();

const result = a;

if (result.error) {
  throw result.error;
}

console.log(result.parsed);

async function load() {
  try {
    app.use(express.json());

    app.use(cors());

    app.use("/", getRoutes);

    app.listen(process.env.port, () => console.log("server is running"));
  } catch (err) {
    console.log("error in starting the server", err);
  }
}

load();
