const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/db_buku");

const db = mongoose.connection;

db.on("error", console.error.bind(console, "connection error:"));

db.once("open", function () {
  console.log("Database connected");
});
