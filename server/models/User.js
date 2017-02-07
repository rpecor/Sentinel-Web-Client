const mongoose = require("mongoose");
const crypto = require('crypto');
const Schema = mongoose.Schema;
const Project = require('./Project');

var userSchema = new Schema({
  firstName: {
    type: String,
    required: true
  },
  lastName: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  position: String,
  imgPath: String,
  hash: String,
  salt: String,
});

userSchema.virtual('projects', {
  ref: 'Project',
  localField: '_id',
  foreignField: 'owner'
})

userSchema.methods.setPassword = function(password) {
  this.salt = crypto.randomBytes(16).toString('hex');
  this.hash = crypto.pbkdf2Sync(password, this.salt, 1000, 64).toString('hex');
};

userSchema.methods.validPassword = function (password) {
  var hash = crypto.pbkdf2Sync(password, this.salt, 1000, 64).toString('hex');
  return this.hash === hash;
};

mongoose.model("User", userSchema);
var User = mongoose.model("User");
module.exports = User;
