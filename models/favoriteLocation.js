// // //pull schema and model from mongoose using object destructuring
const { Schema, model } = require ("mongoose");

// make favorite schema
const FavoriteSchema = new Schema({
  place: {
      type: String,
      required: true
  },
  city: {
      type: String,
      required: true
  },
  state: {
      type: String,
      required: true
  },
  memories: {
      type: String,
      required: true
  },
  userId: {
      type: String,
      required: false
  }
});

// // // make favorite model
const Favorite = model('Favorite', FavoriteSchema);

module.exports = Favorite;