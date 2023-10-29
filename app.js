const express = require("express");
const sellersRoutes = require("./routes/sellersRoutes");
const bodyParser = require('body-parser');
const app = express();

app.set("view engine", "ejs");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/", sellersRoutes);

app.use("*", (req, res) => {
  res.status(404).json({ msg: "Page Not Found!" });
});

app.listen(4000);
