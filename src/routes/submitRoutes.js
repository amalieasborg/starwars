const express = require('express');
const router = express.Router();
const submitController = require('../controllers/submitController');

router.post('/submit', submitController.submitData);
router.post('/submitCharacter', submitController.submitCharacter);
router.put('/editCharacter', submitController.editCharacter);
router.delete('/deleteCharacter', submitController.deleteCharacter);

module.exports = router;