const Favorite = require('../../models/favoriteLocation');



async function create(req, res) {
    const favorite =  await Favorite.create(req.body);
    res.status(201).json(favorite)
}

async function read (req, res) {
    const favorites = await Favorite.find();
    res.status(200).json(favorites)
}

//function update(req, res) {}

//function delete(req, res) {}

module.exports = {
  create,
  read,
//     update,
//     delete
  };
