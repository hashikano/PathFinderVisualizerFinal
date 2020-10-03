const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname + "/public"));

app.set("view engine", "ejs");

app.get("/", (req, res) => {
   res.render("index")
})

const port = process.env.PORT || 3000;

app.listen(port, () => {
   console.log("Server Up and Running");
})