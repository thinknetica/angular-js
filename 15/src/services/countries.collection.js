angular.module('thSample').factory('CountriesCollection', function($http, config){
  var self = {};
  var countries = []

  function init() {
    $http.get(config.apiBaseUrl + 'Country').then(function(response){
      angular.forEach(response.data.results, function(country){
        countries.push(country);
      })
    })
  }

  init();

  self.all = function(){
    return countries;
  }

  return self;
});
