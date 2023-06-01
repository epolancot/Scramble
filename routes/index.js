var express = require('express');
var router = express.Router();
const passport = require('passport');
let scrambleID = "/scrambles"


/* GET home page. */
router.get('/', function(req, res, next) {
  res.redirect('/users/start');
});

router.post('/i/:id', function(req,res) {
  scrambleID = "/invite/scramble/"+req.params.id }, passport.authenticate('google',{
      scope: ['profile', 'email'], 
      prompt: "select_account",
      successRedirect: scrambleID,
      failureRedirect: '/',
      failureMessage: true
    }))

// Google Oauth -----------------------------
// login route
router.get('/auth/google', passport.authenticate(
  // Which passport strategy is being used?
  'google',
  {
    // Requesting the user's profile and email
    scope: ['profile', 'email'],
    // Optionally force pick account every time
    //prompt: "select_account"
  }
));

// Google OAuth callback route
router.get('/oauth2callback', passport.authenticate(
  'google',
  {
    successRedirect: '/scramble',
    failureRedirect: '/'
  }
));

// OAuth logout route
router.get('/logout', function(req, res){
  req.logout(function() {
    res.redirect('/');
  });
});

module.exports = router;
