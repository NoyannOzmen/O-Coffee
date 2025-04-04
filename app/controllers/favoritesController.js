const dataMapper = require("../dataMapper");

const favoritesController = {
  
  favoritesPage: async (req, res) => {
    try {
      let favoritesList = req.session.favorites ?? [];
      res.render("favoris", { favoritesList });
    }
    catch (error) {
      console.error(error);
      res.status(500).send("Erreur serveur. Réessayez plus tard")
    }
  },
  

  addToFavorites: async (req, res) => {
    const targetId = Number(req.params.id);

    if (!req.session.favorites.find((coffee) => coffee.id === targetId)) {
      try {
        const coffee = await dataMapper.getProductById(targetId);
        req.session.favorites.push(coffee);   
      }
      catch (error) {
        console.error(error);
        res.status(500).send("Erreur serveur. Réessayez plus tard")
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
      console.error(error);
      res.status(500).send("Erreur serveur. Réessayez plus tard")
    }
  },
};


module.exports = favoritesController;