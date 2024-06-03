const express = require('express');

const mainController = require('./controllers/mainController');
const articleController = require('./controllers/articleController')

const router = express.Router();

router.get('/', mainController.homePage);

router.get('/catalogue', articleController.articleCatalogue);
router.get('/catalogue/category', articleController.categoryPage);
router.get('/article/:id', articleController.articlePage);

module.exports = router;