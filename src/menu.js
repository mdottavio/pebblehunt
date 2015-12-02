/** A simple menu handler for the App **/

var UI = require('ui');
var config = require('./config');
var postCard = require('./card-post');

// global post list :S

var menuHandler = function(){
  
  // parse Post data into Menu Items
  var parsetPosts = function(posts){
    var postList = [];
    
    for (var i = posts.length - 1; i >= 0; i--) {
      var post = posts[i];
      postList.push({
        title: post.name, 
        subtitle: post.tagline, 
        original: post,
        voted: false
      });
    }
    return postList;
  };
  
  /** create a Menu based on posts **/
  var createMenu = function(posts){
    postList = parsetPosts(posts.slice(0, config.postLimit));
    var theMenu = new UI.Menu({
      sections: [{
        title: 'Today\'s posts on PH',
        items: postList
      }]
    });
    
    theMenu.on('select', function(e) {
//       postCard.showPost(e.item.original);
      postCard.showPost(e.itemIndex);
    });
    return theMenu;
  };
  
  return {
    create: createMenu
  };
};

module.exports = menuHandler();
