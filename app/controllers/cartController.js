const dataMapper = require("../dataMapper");

const cartController = {

  cartPage: async (req, res) => {
    const favorites = req.session.favorites;
      try {
        let shoppingList = req.session.cart ?? [];
        res.render("panier", { shoppingList, favorites });
      }
      catch (error) {
        res.status(500).send(`Erreur de notre côté : ${error}`);
      }
  },

  addToCart: async (req, res) => {
    const targetId = Number(req.params.id);
    if (!req.session.cart) {
      req.session.cart = [];
    }
    if (!req.session.cart.find((coffee) => coffee.id === targetId)) {
      try {
        const coffee = await dataMapper.getProductById(targetId);
        req.session.cart.push(coffee);
      }
      catch (error) {
        console.error(error);
        res.status(500).send("Erreur serveur. Réessayez plus tard")
      }
    }
    res.redirect("/panier");
  },

  removeFromCart: async (req, res) => {
    const targetId = Number(req.params.id);
    try {
      req.session.cart = req.session.cart.filter((cart) => cart.id !== targetId);
      res.redirect("/panier");
    }
    catch (error) {
      console.error(error);
      res.status(500).send("Erreur serveur. Réessayez plus tard")
    }
  },
};


module.exports = cartController;