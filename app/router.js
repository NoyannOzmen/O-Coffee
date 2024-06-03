const express = require('express');

const mainController = require('./controllers/mainController');
const articleController = require('./controllers/articleController')

const router = express.Router();

router.get('/', mainController.homePage);
router.get('/about', mainController.aboutPage);

router.get('/catalogue', articleController.articleCatalogue);
router.get('/catalogue/:id', articleController.articlePage);

module.exports = router;