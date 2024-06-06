const express = require('express');

const mainController = require('./controllers/mainController');
const articleController = require('./controllers/articleController')
const cartController = require('./controllers/cartController');
const loginController = require('./controllers/loginController')
const favoritesController = require('./controllers/favoritesController')
const billingController = require('./controllers/billingController');

const router = express.Router();

router.get('/', mainController.homePage);

router.get('/catalogue', articleController.articleCatalogue);
router.get('/catalogue/category', articleController.categoryPage);
router.get('/article/:id', articleController.articlePage);

router.get('/panier', cartController.cartPage);
router.get('/panier/add/:id', cartController.addToCart);
router.get('/panier/delete/:id', cartController.removeFromCart);

router.get('/favoris', favoritesController.favoritesPage);
router.get('/favoris/add/:id', favoritesController.addToFavorites);
router.get('/favoris/delete/:id', favoritesController.removeFromFavorites);

router.get("/connection", loginController.loginPage);
router.post("/connection", loginController.userLogin);

router.get("/paiement", billingController.billingPage);

module.exports = router;