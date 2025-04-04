const dataMapper = require("../dataMapper");

const articleController = {
  async articleCatalogue(req,res) {
    const favorites = req.session.favorites;
    try {
      const coffees = await dataMapper.getAllProducts();
      res.render("catalogue", { coffees, favorites });
    }
    catch (error) {
      console.error(error);
      res.status(500).send("Erreur serveur. Réessayez plus tard")
    }
  },
  async articlePage(req,res) {
    const targetId = Number(req.params.id);
    const favorites = req.session.favorites;
    try {
      const coffee = await dataMapper.getProductById(targetId);
      res.render("article", { coffee, favorites });
    }
    catch (error) {
      console.error(error);
      res.status(500).send("Erreur serveur. Réessayez plus tard")
    }
  },
  async categoryPage(req,res) {
    try {
      const targetCat = req.query.category;
      const favorites = req.session.favorites;
      const coffees = await dataMapper.getProductByCategory(targetCat);
      res.render("catalogue", { coffees, favorites });
    }
    catch (error) {
      console.error(error);
      res.status(500).send("Erreur serveur. Réessayez plus tard")
    }
  },
};

module.exports = articleController;
