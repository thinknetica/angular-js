angular.module('thSample').factory('MountainRange', function($http, config){
  var self = {};
  var mountainRanges = []

  function init() {
    mountainRanges.promise = $http.get(config.apiBaseUrl + 'MountainRange');
    mountainRanges.promise.then(function(response){
      angular.forEach(response.data.results, function(mountainRange){
        mountainRanges.push(mountainRange);
      })
    })
  }

  init();

  self.all = function(){
    return mountainRanges;
  }

  self.add = function(title){
    mountainRanges.push({title: title});
  }

  return self;
});
