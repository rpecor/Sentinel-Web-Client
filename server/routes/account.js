const express = require('express');
const accountRouter = express.Router();
const passport = require('passport');


accountRouter.get('/login', (req, res) => {
  if(req.isAuthenticated()) {
    res.redirect('/');
  } else {
    res.render('login');
  }
});

accountRouter.post('/login', passport.authenticate('local-login', {
  successRedirect: '/',
  failureRedirect: '/account/login',
  failureFlash: false
}));

accountRouter.get('/logout', function(req, res) {
  req.logout();
  res.redirect('/account/login');
});


accountRouter.get('/register', (req, res) => {
  if(req.isAuthenticated()) {
    res.redirect('/');
  } else {
    res.render('register');
  }
});

accountRouter.post('/register', (req, res) => {
    var User = require('./../models/User');
    var user = new User();
    user.firstName = req.body.firstName;
    user.lastName = req.body.lastName;
    user.email = req.body.email;
    user.position = req.body.position;
    user.setPassword(req.body.password);

    user.save(function(err) {
        res.redirect("/account/login");
    });
});



module.exports = accountRouter;
