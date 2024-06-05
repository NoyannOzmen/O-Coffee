const dataMapper = require("../dataMapper");

const favoritesController = {

  favoritesPage: async (req, res) => {
      try {
        let favoritesList = req.session.favorites ?? [];
        res.render("favorites", { favoritesList });
      }
      catch (error) {
        res.status(500).send(`Erreur de notre côté : ${error}`);
      }
  },

  addToFavorites: async (req, res) => {
    if (!req.session.favorites) {
      req.session.favorites = [];
    }
    if (!req.session.favorites.find((coffee) => coffee.id === req.params.id)) {
      try {
        const coffee = await dataMapper.getProductbyId(req.params.id);
        req.session.favorites.push(coffee);    
      }
      catch (error) {
        res.status(500).send(`Erreur de notre côté : ${error}`);
      }
    }
    res.redirect("/favorites");
  },

  removeFromFavorites: async (req, res) => {
    const targetId = req.params.id;
    try {
      req.session.favorites = req.session.favorites.filter((favorites) => favorites.id === targetId);
      res.redirect("/favorites");
    }
    catch (error) {
      res.status(500).send(`Erreur de notre côté : ${error}`);
    }
  },
};


module.exports = favoritesController;