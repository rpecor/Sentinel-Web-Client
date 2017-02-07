var express = require('express');
var router = express.Router();
const User = require('./../models/User');
const Project = require('./../models/Project');
const mongoose = require('mongoose');

router.get('/', isLoggedIn, (req, res) => {
    res.render('index');
});

router.get('/getLoggedInUser', (req, res) => {
  res.json({
    user: req.user
  });
});

router.get('/getAllUsers', (req, res) => {
  User.find((err, users) => {
    res.json({
      users: users
    });
  });
});



function isLoggedIn(req, res, next) {
      if (req.isAuthenticated())
        return next();

        res.redirect('/account/login');
}

module.exports = router;
