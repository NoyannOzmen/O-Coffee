const dataMapper = require("../dataMapper");

const articleController = {
  async articleCatalogue(req,res) {
    if (!req.session.favorites) {
      req.session.favorites = [];
    }
    const favorites = req.session.favorites;
    try {
      const coffees = await dataMapper.getAllProducts();
      res.render("catalogue", { coffees, favorites });
    }
    catch (error) {
      res.status(500).send(`Erreur de notre côté : ${error}`)
    }
  },
/*   async articleReducedCatalogue(req,res) {
    try {
      const coffeesSample = await dataMapper.getSomeProducts();
      res.render("catalogue", { coffeesSample });
    }
    catch (error) {
      res.status(500).send(`Erreur de notre côté : ${error}`)
    }
  }, */
  async articlePage(req,res) {
    const targetId = Number(req.params.id);
    if (!req.session.favorites) {
      req.session.favorites = [];
    }
    const favorites = req.session.favorites;
    try {
      const coffee = await dataMapper.getProductbyId(targetId);
      res.render("article", { coffee, favorites });
    }
    catch (error) {
      res.status(500).send(`Erreur de notre côté : ${error}`)
    }
  },
  async categoryPage(req,res) {
    try {
      const targetCat = req.query.category;
      const coffees = await dataMapper.getProductbyCategory(targetCat);
      res.render("catalogue", { coffees });
    }
    catch (error) {
      res.status(500).send(`Erreur de notre côté : ${error}`)
    }
  },
};

module.exports = articleController;
