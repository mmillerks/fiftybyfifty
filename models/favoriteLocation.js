// // //pull schema and model from mongoose using object destructuring
// const mongoose = require("mongoose");
const { Schema, model } = require ("mongoose");

// make coffee schema
const favoriteSchema = new Schema({
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
const favorite = model('Favorite', favoriteSchema);

module.exports = favorite;