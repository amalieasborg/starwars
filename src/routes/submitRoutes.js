const express = require('express');
const router = express.Router();
const submitController = require('../controllers/submitController');

router.post('/submit', submitController.submitData);
router.post('/submitCharacter', submitController.submitCharacter);

// PUT route for editing a character with index
router.put('/characters/:index', submitController.editCharacter);

// DELETE route for deleting a character with index
router.delete('/characters/:index', submitController.deleteCharacter);
module.exports = router;