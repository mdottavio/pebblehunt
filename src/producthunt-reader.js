var config = require('./config');
var request = require('./request');


var ph = function(){
  
  //TODO consume this from the API
  var phCategories = [
        {
      id: 1,
      slug: "tech",
      name: "Tech",
      item_name: "product",
      color: "#5898f1"
    },
    {
      id: 2,
      slug: "games",
      name: "Games",
      item_name: "game",
      color: "#ca65e9"
    },
    {
      id: 3,
      slug: "podcasts",
      name: "Podcasts",
      item_name: "podcast episode",
      color: "#4dc667"
    },
    {
      id: 4,
      slug: "books",
      name: "Books",
      item_name: "book",
      color: "#f5a623"
    }
  ];
  
  //https://api.producthunt.com/v1/docs/posts/posts_index_get_the_tech_posts_of_today
  var getPosts = function(callback, failback){
    request.jsonp({
      url: config.apiBaseUrl + 'posts',
      headers: {
         Authorization : "Bearer "+config.phDevToken
      },
      callback: function(data){
        callback( data.posts );
      },
      failback: failback
    });
  };
  
  //https://api.producthunt.com/v1/docs/categories/categories_index_list_of_all_categories
  var getCategories = function(callback, failback){
    request.jsonp({
      url: config.apiBaseUrl + 'categories',
      headers: {
         Authorization : "Bearer "+config.phDevToken
      },
      callback: function(data){
        callback( data.posts );
      },
      failback: failback
    });
  };
  
  var getCategory = function(catID){
    var cat = {};
    for(var i = 0; i<phCategories.length - 1; i++){
      if(phCategories[i].id === catID){
        cat = phCategories[i];
      }
    }
    return cat;
  };
  
  var vote = function(post, callback, failback){
    callback();
  };
  
  
  // public methods
  return {
    getPosts:      getPosts,
    getCategory:   getCategory,
    getCategories: getCategories,
    vote:          vote
  };
};

module.exports = ph();