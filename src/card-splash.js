/**  simple error card for the app **/

var UI = require('ui');
var config = require('./config');

var splash = function(){
  var card = new UI.Card({
    title: 'PebbleHunt',
    icon: config.images.error,
    body: 'Downloading kitties, please wait...',
  });
  
  return {
    show: function(){ card.show(); },
    hide: function(){ card.hide(); }
  };
};

module.exports = splash();