const path = require("path");
const express = require("express");

const app = express();

const router = require("./router");

app.use(express.urlencoded({ urlencoded: false }));
app.use(express.json());
app.use(express.static("public"));
app.set("views", "views");
app.set("view engine", "hbs");

app.use("/", router);

app.listen(3000, () => {
  console.log("Server up on port 3000");
});
