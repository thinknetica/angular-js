(function(){
  var app = angular.module('thSample', ['ngRoute', 'ngResource', 'ngMessages', 'ngSanitize', 'ui.router']);

  app.config(function($stateProvider, $urlRouterProvider, $httpProvider, $locationProvider) {

    $stateProvider
    .state('index', {
      url: "/",
      templateUrl: "components/mounts/index.html",
      controller: 'MountsController',
      controllerAs: 'mounts'
    })
    .state('show', {
      // url: "/mount/:id",
      params: {id: null},
      templateUrl: "components/mounts/show.html",
      controller: "MountController"
    })

    $urlRouterProvider.otherwise("/");
    $locationProvider.html5Mode(true);

    $httpProvider.defaults.headers.common = {
      "X-Parse-Application-Id": "TnV3lT7pduMJ6o36MaFMKZUNHrSS8Oqd5qK9KOqi",
      "X-Parse-REST-API-Key": "zOEFi2ipqCgt4svHeslcCXyHRPSSlXRSQ3rbQ3t2"
    };
  })
})();
