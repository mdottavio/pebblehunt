var ajax = require('ajax');
var config = require('./config');

var request = function(requestData, callback, failback){
  requestData.endpoint = requestData.endpoint || '';
  ajax({
    url: config.apiBaseUrl + requestData.endpoint,
    type: 'json',
    headers :{
      Authorization : "Bearer "+config.phDevToken
    }
  },
  function(data) {
    // Success!
    console.log('Successfully fetched data!');
    callback(data);
  },
  function(error) {
    // Failure!
    console.log('Failed fetching data: ' + error);
    failback(error);
  });
};

//https://api.producthunt.com/v1/docs/posts/posts_index_get_the_tech_posts_of_today
ph.posts = function(callback, failback){
  request({endpoint:'posts'}, callback, failback);
};
//https://api.producthunt.com/v1/docs/posts/posts_show_get_details_of_a_post
ph.show = function(postID, callback, failback){
  request({endpoint:'show/'+postID}, callback, failback);
};

module.exports = {
    posts : ph.posts,
    read : ph.read
};
