const dataMapper = require("../dataMapper");

const articleController = {
  async articleCatalogue(req,res) {
    try {
      const coffees = await dataMapper.getAllProducts();
      res.render("catalogue", { coffees });
    }
    catch (error) {
      res.status(500).send(`Erreur de notre côté : ${error}`)
    }
  },
  async articleReducedCatalogue(req,res) {
    try {
      const coffeesSample = await dataMapper.getSomeProducts();
      res.render("catalogue", { coffeesSample });
    }
    catch (error) {
      res.status(500).send(`Erreur de notre côté : ${error}`)
    }
  },
  async articlePage(req,res) {
    const targetId = Number(req.params.id);
    try {
      const article = await dataMapper.getProductbyId(targetId);
      res.render("article", { article });
    }
    catch (error) {
      res.status(500).send(`Erreur de notre côté : ${error}`)
    }
  },
  async CategoryPage(req,res) {
    const targetCat = Number(req.params.category);
    try {
      const coffees = await dataMapper.getProductbyCategory(targetCat);
      res.render("catalogue", { coffees });
    }
    catch (error) {
      res.status(500).send(`Erreur de notre côté : ${error}`)
    }
  },
};

module.exports = articleController;
