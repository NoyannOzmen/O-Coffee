const dataMapper = require("../dataMapper");

const mainController = {
  async homePage(req,res) {
    try {
      const coffeesSample = await dataMapper.getSomeProducts();
      res.render("accueil", { coffeesSample });
    }
    catch (error) {
      res.status(500).send(`Erreur de notre côté : ${error}`)
      }
    },
};

module.exports = mainController;