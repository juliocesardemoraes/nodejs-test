// No nodejs nós usamos require para pegar pacotes, ou modulos
const express = require("express");
const { teste } = require("./module");
const app = express();

// Respond with "hello world" when a GET request is made to the homepage
app.get("/", (req, res) => {
  res.send("hello world");
});

app.listen(3000);
