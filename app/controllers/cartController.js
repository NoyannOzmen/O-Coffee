const dataMapper = require("../dataMapper");

const cartController = {

  cartPage: async (req, res) => {
      try {
        let shoppingList = req.session.cart ?? [];
        res.render("panier", { shoppingList });
      }
      catch (error) {
        res.status(500).send(`Erreur de notre côté : ${error}`);
      }
  },

  addToCart: async (req, res) => {
    if (!req.session.cart) {
      req.session.cart = [];
    }
    if (!req.session.cart.find((coffee) => coffee.id === req.params.id)) {
      try {
        const coffee = await dataMapper.getProductbyId(req.params.id);
        req.session.cart.push(coffee);    
      }
      catch (error) {
        res.status(500).send(`Erreur de notre côté : ${error}`);
      }
    }
    res.redirect("/panier");
  },

  removeFromCart: async (req, res) => {
    const targetId = Number(req.params.id);
    try {
      req.session.cart = req.session.cart.filter((cart) => cart.id === targetId);
      res.redirect("/panier");
    }
    catch (error) {
      res.status(500).send(`Erreur de notre côté : ${error}`);
    }
  },
};


module.exports = cartController;