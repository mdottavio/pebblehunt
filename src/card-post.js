/**  simple error card for the app **/

var UI = require('ui');
var Vector2 = require('vector2');
var postCardConfig = require('./config-postCard.js');
var ph = require('./producthunt-reader.js');

var postsCard = function(){
  var theScreen;
  var headerText;
  var voteImage;
  var votesText;
  var subtitleText;
  var actualIndex = 0;
  
  
  var moveUp = function(){
    if(actualIndex > 0){
      actualIndex--;
      updateScreen();
    }
  };
  
  var moveDown = function(){
    if(actualIndex < (postList.length - 1)){
      actualIndex++;
      updateScreen()
    }
  };
  
  var markAsVoted = function(){
    postList[actualIndex].voted = true;
    votesText.color('white');
    votesText.backgroundColor('black');
  };
  
  var markAsNoVote = function(){
    votesText.color('black');
    votesText.backgroundColor('white');
  };
  
  var updateScreen = function(){
    if(postList[actualIndex].voted){
      markAsVoted();
    } else {
      markAsNoVote();
    }
    headerText.text(postList[actualIndex].original.name);
    votesText.text(postList[actualIndex].original.votes_count);
    subtitleText.text(postList[actualIndex].original.tagline);
  };
  
  var vote = function(){
    if(!postList[actualIndex].voted){
      ph.vote(postList[actualIndex].original, function(result){
        markAsVoted();
      }, function(){
        error.show('voting the post..');
      });
    }    
  };
  
  var createScreen = function(){
    var mainWindow = new UI.Window({
      scrollable: false,
      fullscreen: true
    });
    
    mainWindow.on('click', 'up', function() {
      moveUp();
    });
    
    mainWindow.on('click', 'down', function() {
      moveDown();
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
    voteImage = new UI.Image({
      position: new Vector2(postCardConfig.margins.left + 6, postCardConfig.margins.top),
      size: new Vector2(16, 16),
      image: postCardConfig.votes.imageup
    });
    votesText = new UI.Text({
      position: new Vector2(postCardConfig.votes.position.left, postCardConfig.votes.position.top),
      size: new Vector2(postCardConfig.votes.size.width, postCardConfig.votes.size.height),
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
  
  var showPost = function(index){
    if( !theScreen ){
      theScreen =  createScreen();
    }
    actualIndex = index;
    updateScreen();
    theScreen.show();
  };
  
  return {
    showPost: showPost
  };
};

module.exports = postsCard();