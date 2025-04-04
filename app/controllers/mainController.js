const dataMapper = require("../dataMapper");

const mainController = {
  async homePage(req,res) {
    const favorites = req.session.favorites;
    try {
      const coffeesSample = await dataMapper.getSomeProducts();
      res.render("accueil", { coffeesSample, favorites });
    }
    catch (error) {
      console.error(error);
      res.status(500).send("Erreur serveur. Réessayez plus tard")
      }
    },
};

module.exports = mainController;