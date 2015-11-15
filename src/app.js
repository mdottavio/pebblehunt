/**
 * Welcome to Pebble.js!
 *
 * This is where you write your app.
 */

// var UI = require('ui');
// var Vector2 = require('vector2');
var splash = require('./card-splash');
var error = require('./card-error');
var ph = require('./producthunt-reader.js');
var menu = require('./menu.js');
var thePostMenu;

splash.show();
ph.getPosts(function(posts){
  splash.hide();
  thePostMenu = menu.create(posts);
  thePostMenu.show();
}, function(){
  error.show('fetching the posts..');
});
