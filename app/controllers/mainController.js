const dataMapper = require("../dataMapper");

const mainController = {
  async homePage(req,res) {
    try {
      res.render("accueil")
    }
    catch (error) {
      res.status(500).send(`Erreur de notre côté : ${error}`)
      }
    },
    async aboutPage(req,res) {
      try {
        res.render("apropos")
      }
      catch (error) {
        res.status(500).send(`Erreur de notre côté : ${error}`)
        }
      },
};

module.exports = mainController;