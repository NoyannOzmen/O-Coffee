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
    async articlePage(req,res) {
      const targetId = Number(req.params.id);
      try {
        const article = await dataMapper.getArticlebyId(targetId);
        res.render("article", { article });
      }
      catch (error) {
        res.status(500).send(`Erreur de notre côté : ${error}`)
        }
      },
};

module.exports = articleController;
