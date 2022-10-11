const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const routeAkses = require("./routes.js");

require("./db");

const app = express();
const port = 4000;

app.use(cors());
app.use(morgan("dev"));
app.use(express.json());
app.use("/book", routeAkses);

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
