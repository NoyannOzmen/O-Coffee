require('dotenv').config();

const express = require('express');

const router = require('./app/router');

const PORT = process.env.PORT

const app = express();

app.set("views", "./app/views");
app.set("view engine", "ejs");

app.use("/public", express.static('integration'));

app.use(router);

app.use(function(err, req, res, next) {
  console.error(err.stack);
  res.status(404).render("404");
});

app.listen(PORT, () => {
  console.log(`Listening on ${PORT}`)
});