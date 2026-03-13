const express = require("express");
const app = express();

app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/views/index.html");
});

app.post("/submit", (req, res) => {
  const name = req.body.name;
  res.redirect("/greet?name=" + name);
});

app.get("/greet", (req, res) => {
  const name = req.query.name;
  res.send("<h1>Hello, " + name + "!</h1><a href='/'>Go Back</a>");
});

app.listen(3000, () => {
  console.log("Server running at http://localhost:3000");
});