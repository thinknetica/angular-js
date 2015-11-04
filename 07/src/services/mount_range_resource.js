angular.module('thSample').factory('MountainRange', function($http){
  var self = {};
  var mountainRanges = []

  function init() {
    mountainRanges.promise = $http.get('https://api.parse.com/1/classes/MountainRange');
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
