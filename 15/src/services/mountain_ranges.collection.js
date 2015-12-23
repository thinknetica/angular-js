angular.module('thSample').factory('MountainRangesCollection', function($http, config){
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

  self.byTitle = function(title){
    var range = {};
    mountainRanges.promise.then(function(response){
      angular.extend(
        range,
        response.data.results.filter(function(range){return range.title == title})[0]
      );
    })
    return range;
  }

  return self;
});
