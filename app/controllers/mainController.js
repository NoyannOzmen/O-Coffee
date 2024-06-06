const dataMapper = require("../dataMapper");

const mainController = {
  async homePage(req,res) {
    if (!req.session.favorites) {
      req.session.favorites = [];
    }
    const favorites = req.session.favorites;
    try {
      const coffeesSample = await dataMapper.getSomeProducts();
      res.render("accueil", { coffeesSample, favorites });
    }
    catch (error) {
      res.status(500).send(`Erreur de notre côté : ${error}`)
      }
    },
};

module.exports = mainController;