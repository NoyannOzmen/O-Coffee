require('dotenv').config();

const express = require('express');
const bodyParser = require("body-parser");
const session = require('express-session');

const router = require('./app/router');

const PORT = process.env.PORT

const app = express();

app.set("views", "./app/views");
app.set("view engine", "ejs");

app.use("/integration", express.static('integration'));

app.use(bodyParser.urlencoded({ extended: false }));

app.use(session({
  resave: true, 
  saveUninitialized: true,
  secret: "Santa",
  cookie: {
    secure: false,
    maxAge: (1000*60*60)
  }
}));

app.use(router);

app.use((req, res) => {
  res.status(404).render("404");
});

app.listen(PORT, () => {
  console.log(`Listening on ${PORT}`)
});