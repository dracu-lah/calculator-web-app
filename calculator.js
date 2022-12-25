const express = require("express");
const bodyParser = require("body-parser");
const app = express();

app.use(bodyParser.urlencoded({ extended: true })); // to use body parser

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html"); // __dirname prints the pwd
});

app.post("/", (req, res) => {
  var x = Number(req.body.num1);
  var y = Number(req.body.num2);
  var sum = x + y;
  res.send(`SUM: ${sum}`);
});

app.listen(3000, () => {
  console.log("server started");
});
