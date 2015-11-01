var UI = require('ui');
var config = require('./config');
var errorCard = require('./errorCard');
var ph = require('./phunt-reader');

var main = new UI.Card({
  title: 'PebbleHunt',
  icon: 'images/logo.png',
  subtitle: 'fetching the latest PHunt posts',
  body: ''
});

ph.posts(showIndex, showError);


var showIndex = function(data){
  console.log('We have data');
};

var showError = function(err){
  console.log('We have an error', err);
  errorCard.show('Ups, something went wrong...');
};

