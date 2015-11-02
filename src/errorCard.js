var config = require('./config');
var UI = require('ui');

var eCard = {
  card: null,
  show: function(message){
    if(!this.card){
      this.initCard();
    }
    this.card.body('Error: ' + message);
    this.card.show();
  },
  hide: function(){
    if(!this.card){
      this.initCard();
    }
    this.card.hide();
  },
  initCard: function(){
    new UI.Card({
      title: config.appTitle,
      icon: config.icons.error,
      fullscreen: config.useFullScreen,
      scrollable: true
    });
  }
};

module.exports = {
  show: eCard.show,
  hide: eCard.hide
};
