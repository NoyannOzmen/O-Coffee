const express = require('express');

const mainController = require('./controllers/mainController');
const articleController = require('./controllers/articleController')
const cartController = require('./controllers/cartController');

const router = express.Router();

router.get('/', mainController.homePage);

router.get('/catalogue', articleController.articleCatalogue);
router.get('/catalogue/category', articleController.categoryPage);
router.get('/article/:id', articleController.articlePage);

router.get('/panier', cartController.cartPage);
router.get('/panier/add/:id', cartController.addToCart);
router.get('/panier/delete/:id', cartController.removeFromCart);

module.exports = router;