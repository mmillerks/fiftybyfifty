const express = require('express');
const router = express.Router();
const favesCtrl = require('../../controllers/api/favoriteLocations-api');


//CREATE
router.post('/', favesCtrl.create);

// GET 
router.get('/', favesCtrl.read);

//UPDATE
// router.put('/', favesCtrl.update);

//DELETE
// router.delete('/', favesCtrl.delete);


module.exports = router;