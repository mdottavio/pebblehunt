/**  simple error card for the app **/

var UI = require('ui');
var config = require('./config');

var errorMessage = function(){
  var errorCard;
  
  var showErrorCard = function(message){
    if( !errorCard ){
      errorCard =  new UI.Card({
  			title: ' Something when wrong...',
  			icon: config.images.error,
  			scrollable: true
  		});
    }
    errorCard.body('Error: ' + message);
	  errorCard.show();
  };
  
  var hiderErrorCard = function(){
    if( errorCard ){
      errorCard.hide();
    }
  };
  
  
  return {
    show: showErrorCard,
    hide: hiderErrorCard
  };
};

module.exports = errorMessage();