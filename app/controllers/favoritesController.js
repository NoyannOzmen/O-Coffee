const dataMapper = require("../dataMapper");

const favoritesController = {

  favoritesPage: async (req, res) => {
      try {
        let favoritesList = req.session.favorites ?? [];
        res.render("favoris", { favoritesList });
      }
      catch (error) {
        res.status(500).send(`Erreur de notre côté : ${error}`);
      }
  },

  addToFavorites: async (req, res) => {
    const targetId = Number(req.params.id);
    if (!req.session.favorites) {
      req.session.favorites = [];
    }
    if (!req.session.favorites.find((coffee) => coffee.id === targetId)) {
      try {
        const coffee = await dataMapper.getProductbyId(targetId);
        req.session.favorites.push(coffee);   
      }
      catch (error) {
        res.status(500).send(`Erreur de notre côté : ${error}`);
      }
    }
    res.redirect("/favoris");
  },

  removeFromFavorites: async (req, res) => {
    const targetId = Number(req.params.id);
    try {
      req.session.favorites = req.session.favorites.filter((coffee) => coffee.id !== targetId);
      res.redirect("/favoris");
    }
    catch (error) {
      res.status(500).send(`Erreur de notre côté : ${error}`);
    }
  },
};


module.exports = favoritesController;