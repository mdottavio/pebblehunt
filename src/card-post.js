/**  simple error card for the app **/

var UI = require('ui');
var Vector2 = require('vector2');
var postCardConfig = require('./config-postCard.js');

var postsCard = function(){
  var theScreen;
  var headerText;
  var votesText;
  var subtitleText;

  
  var createScreen = function(){
    var mainWindow = new UI.Window({
      scrollable: true,
      fullscreen: true
    });
    
    /** Card background **/
    var mainRect = new UI.Rect({
      size: new Vector2(postCardConfig.size.width, postCardConfig.size.height),
      backgroundColor: 'white'
    });
    mainWindow.add(mainRect);
    
    /** Name **/
    headerText = new UI.Text({
      position: new Vector2(postCardConfig.title.position.left, postCardConfig.title.position.top),
      size: new Vector2(postCardConfig.size.width - 47, 75),
      font: postCardConfig.title.font,
      textAlign: 'left',
      color:  postCardConfig.title.color,
      textOverflow: 'ellipsis'
    });
    mainWindow.add(headerText);
    
    /**  votes **/
    var voteImage = new UI.Image({
      position: new Vector2(postCardConfig.margins.left + 6, postCardConfig.margins.top),
      size: new Vector2(16, 16),
      image: "images/voteup.png"
    });
    votesText = new UI.Text({
      position: new Vector2(postCardConfig.votes.position.left, postCardConfig.votes.position.top),
      size: new Vector2(postCardConfig.votes.size.width, postCardConfig.votes.size.height - 3),
      font: postCardConfig.votes.font,
      textAlign: 'center',
      color: postCardConfig.title.color
    });
    mainWindow.add(voteImage);
    mainWindow.add(votesText);
    
    /** subtitle  **/
    subtitleText = new UI.Text({
      position: new Vector2(postCardConfig.subtitle.position.left, postCardConfig.subtitle.position.top),
      size: new Vector2(postCardConfig.subtitle.size.width, postCardConfig.subtitle.size.height),
      font: postCardConfig.subtitle.text.font,
      textAlign: 'left',
      color: postCardConfig.subtitle.text.color,
      textOverflow: 'ellipsis',
      backgroundColor: postCardConfig.subtitle.text.backgroundColor
    });
    mainWindow.add(subtitleText);
    var column1 = new UI.Rect({
      size: new Vector2(postCardConfig.subtitle.columns.left.size.width, postCardConfig.subtitle.columns.left.size.height),
      position: new Vector2(postCardConfig.subtitle.columns.left.position.left, postCardConfig.subtitle.columns.left.position.top), 
      backgroundColor: postCardConfig.subtitle.text.backgroundColor
    });
    mainWindow.add(column1);
    var column2 = new UI.Rect({
      size: new Vector2(postCardConfig.subtitle.columns.right.size.width, postCardConfig.subtitle.columns.right.size.height),
      position: new Vector2(postCardConfig.subtitle.columns.right.position.left, postCardConfig.subtitle.columns.right.position.top), 
      backgroundColor: postCardConfig.subtitle.text.backgroundColor
    });
    mainWindow.add(column2);
    
    return mainWindow;
  };
  
  var updateScreen = function(post){
    headerText.text(post.name);
    votesText.text(post.votes_count);
    subtitleText.text(post.tagline);
  };
  
  
  var showPost = function(post){
    if( !theScreen ){
      theScreen =  createScreen();
    }
    
    updateScreen(post);
    theScreen.show();
    
  };
  
  return {
    showPost: showPost
  };
};

module.exports = postsCard();