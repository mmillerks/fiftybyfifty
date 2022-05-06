const express = require('express');
const router = express.Router();
const favesCtrl = require('../../controllers/api/favoriteLocations-api');


//CREATE
router.post('/', favesCtrl.create);

// GET 
router.get('/read', favesCtrl.read);

//UPDATE
router.put('/update', favesCtrl.update);

//DELETE
router.delete('/delete', favesCtrl.delete);


module.exports = router;