var UI = require('ui');
var config = require('./config');
// var errorCard = require('./errorCard');
// var ph = require('./phunt-reader');

var main = new UI.Card({
  title: 'PebbleHunt',
  icon: config.images.logo,
  subtitle: 'fetching the latest PHunt posts',
  body: ''
});
main.show();

// var showIndex = function(postsList){
//   console.log('We have data');
//   console.log(postsList);
//   var events = new UI.Menu({
//     sections: [{
//       items: postsList
//     }]
//   });
//   events.show();
// };

// var showError = function(err){
//   console.log('We have an error', err);
//   errorCard.show('Ups, something went wrong...');
// };

// ph.posts(showIndex, showError);