/** A simple menu handler for the App **/

var UI = require('ui');
var config = require('./config');
var postCard = require('./card-post');

var menuHandler = function(){
  var postList;
  
  // parse Post data into Menu Items
  var parsetPosts = function(posts){
    var postList = [];
    
    for (var i = posts.length - 1; i >= 0; i--) {
      var post = posts[i];
      postList.push({
        title: post.name, 
        subtitle: post.tagline, 
        original: post
      });
    }
    return postList;
  };
  
  /** create a Menu based on posts **/
  var createMenu = function(posts){
    postList = posts;
    var items = parsetPosts(posts.slice(0, config.postLimit));
    var theMenu = new UI.Menu({
      sections: [{
        title: 'Today\'s posts on PH',
        items: items
      }]
    });
    
    theMenu.on('select', function(e) {
      postCard.showPost(e.item.original);
    });
    return theMenu;
  };
  
  return {
    create: createMenu
  };
};

module.exports = menuHandler();
