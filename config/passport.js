const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const mongoose = require('mongoose');
const User = require('./../server/models/User');


passport.serializeUser(function(user, done) {
  // placeholder for custom user serialization
  // null is for errors
  done(null, user);
});

passport.deserializeUser(function(user, done) {
  // placeholder for custom user deserialization.
  // maybe you are going to get the user from mongo by id?
  // null is for errors
  done(null, user);
});

passport.use('local-login', new LocalStrategy({
  usernameField: 'email',
  passwordField: 'password'
},
(username, password, done) => {
  User.findOne({email: username}, (err, user) => {
      if(err) { return done(err); }
      if(!user) {
        return done(null, false, {
          message: 'User not found'
        });
      }
      if(!user.validPassword(password)) {
        return done(null, false, {
          message: 'Password is wrong'
        });
      }

      return done(null, user);
    });
  }
));
