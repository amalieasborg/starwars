const express = require('express');
const router = express.Router();
const submitController = require('../controllers/submitController');

router.post('/submit', submitController.submitData);
router.post('/submitCharacter', submitController.submitData);

module.exports = router;