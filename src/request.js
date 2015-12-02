var ajax = require('ajax');

var request = function(){
  var _request = function(requestData){
    requestData.callback = typeof(requestData.callback === 'function') ? requestData.callback : function(){};
    requestData.failback = typeof(requestData.failback === 'function') ? requestData.failback : function(){};
    
    return ajax({
      url:      requestData.url,
      method:   requestData.method,
      type:     requestData.type,
      data:     requestData.data, 
      headers : requestData.headers
    },
    function(data, status, request) {
      requestData.callback(data);
    },
    function(error, status, request) {
      console.log('Failed fetching data: ' + error);
      requestData.failback(error);
    });
  };
  
  var _parseParams = function(baseUrl, params){
    var parsedParams = baseUrl;
    
    for (var key in params) {
      if (params.hasOwnProperty(key)) {
        parsedParams += ((parsedParams.search('?') > -1) ? '&':'?') + 
          key + '=' + encodeURIComponent (params[key]);
      }
    }
    
    return parsedParams;
  };
  
  var _jsonp = function(options){
    var requestData = {
      url:      options.url,
      method:   'get',
      type:     'json',
      data:     {},
      headers:  options.headers,
      callback: options.callback,
      failback: options.failback
    };
    
    return _request(requestData);
  };
  
  var _post = function(options){
    
    var requestData = {
      url:      options.url,
      method:   'post',
      type:     '',
      data:     options.data,
      headers:  options.headers,
      callback: options.callback,
      failback: options.failback
    };
    
    return _request(requestData);
  };
  
  var _get = function(options){
    
    var requestData = {
      url:      _parseParams(options.url, options.data),
      method:   'get',
      type:     '',
      data:     {},
      headers:  options.headers,
      callback: options.callback,
      failback: options.failback
    };
    
    return _request(requestData);
  };

  /** public Methods **/
  return {
    jsonp : _jsonp,
    post: _post,
    get: _get
  };
};
    
  
module.exports = request();