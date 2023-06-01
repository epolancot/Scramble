var express = require('express');
var router = express.Router();
const passport = require('passport');
const scramble = require('../models/scramble');
let scrambleID = "/scrambles"


/* GET home page. */
router.get('/', function(req, res, next) {
  res.redirect('/users/start');
});

router.post('/s-oauth2/:id', function(req, res){
  scrambleID = `/invites/scrambles/${req.params.id}`
  passport.authenticate('google',{
      scope: ['profile', 'email'], 
      prompt: "select_account",
      state: scrambleID,
      failureRedirect: '/aaaa',
      failureMessage: true
      })(req, res) 
    }
)
// Google Oauth -----------------------------
// login route
router.get('/auth/google', function(req, res) {
},passport.authenticate(
  // Which passport strategy is being used?
  'google',
  {
    // Requesting the user's profile and email
    scope: ['profile', 'email'],
    // Optionally force pick account every time
    state: "/scrambles",
    //prompt: "select_account"
  }
));

// Google OAuth callback route
router.get('/oauth2callback', function(req, res) {
  passport.authenticate(
    'google',
    {
      successRedirect: req.query.state,
      failureRedirect: '/'
    }
  )(req, res)
});

// OAuth logout route
router.get('/logout', function(req, res){
  req.logout(function() {
    res.redirect('/');
  });
});

module.exports = router;
