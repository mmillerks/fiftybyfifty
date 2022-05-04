const express = require('express');
const router = express.Router();
const favesCtrl = require('../../controllers/api/favoriteLocations-api');


//CREATE
router.post('/', favesCtrl.create);

// // GET /api/favoriteLocations/favorites
// router.get('/read', favesCtrlCtrl.read);
//

//update
// PUT

//delete
// DELETE


module.exports = router;