const Favorite = require('../../models/favoriteLocation');



async function create(req, res) {
    const favorite =  await Favorite.create(req.body);
    res.status(200).json(favorite)
}

//function show(req, res) {}

//function update(req, res) {}

//function delete(req, res) {}

module.exports = {
  create,
//     show,
//     update,
//     delete
  };
