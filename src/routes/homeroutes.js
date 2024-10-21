const express = require('express');
const router = express.Router();
const homeController = require('../controllers/homeController');

router.get('/', homeController.getHomePage);
router.get('/characters', homeController.getCharacters);

module.exports = router;