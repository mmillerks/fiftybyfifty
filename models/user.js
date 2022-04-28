//pull schema and model from mongoose using object destructuring
const { Schema, model } = require ('mongoose');
const SALT_ROUNDS = 6;  // 6 is a reasonable value
const bcrypt = require('bcrypt');


//POST for user



// make user schema
const userSchema = new Schema({
  firstname: { type: String, required: true, unique: true },
  lastname:{ type: String, required: true, unique: true },
  username: { type: String, required: true, unique: true },
  password: { type: String, minLength: 3, required: true },
});

// make user model
const user = model("User", userSchema);

userSchema.pre('save', async function(next) {
  // 'this' is the user doc
  if (!this.isModified('password')) return next();
  // update the password with the computed hash
  this.password = await bcrypt.hash(this.password, SALT_ROUNDS);
  return next();
});


//export model
module.exports = user;