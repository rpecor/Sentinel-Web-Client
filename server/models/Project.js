const mongoose = require("mongoose");
const crypto = require('crypto');
const Schema = mongoose.Schema;
const User = require('./User.js');

var projectSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: 'User'
  },
  members: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  }],
  created_at: Date,
  updated_at: Date
});

projectSchema.pre('save', function (next) {
  var currentDate = new Date();
  this.updated_at = currentDate;

  if(!this.created_at) {
    this.created_at = currentDate;
  }

  next();
});

mongoose.model("Project", projectSchema);
var Project = mongoose.model("Project");
module.exports = Project;
