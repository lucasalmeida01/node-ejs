const express = require('express');
const res = require('express/lib/response');
const app = express();

app.set("view engine", "ejs");

app.get("/", function (req, res) {
  const items = [
    {
      title: "D",
      message: "esenvolvendo aplicações/serviços de forma fácil"
    },
    {
      title: "E",
      message: "JS usa Javascript para renderizar HTML :)"
    },
    {
      title: "M",
      message: "uito fácil de aprender!"
    },
    {
      title: "A",
      message: "mo JS"
    },
    {
      title: "I",
      message: "nstale o EJS!"
    },
    {
      title: "S",
      message: "intaxe simples"
    },
  ];

  const subtitle = "Uma linguagem de modelagem para criação de páginas HTML utilizando JS"

  res.render("pages/index", {
    qualities: items,
    subtitle: subtitle,
  });
})



app.get("/about", function (req, res) {
  res.render("pages/about");
})

app.listen(8080);
console.log("Rodando");