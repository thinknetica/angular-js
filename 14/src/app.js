(function(){
  var dependentModules = ['ngRoute', 'ngResource', 'ngMessages', 'ngSanitize'];
  var testEnv = false;

  if (testEnv) dependentModules.push('ngMockE2E');

  var app = angular.module('thSample', dependentModules);

  app.config(function($routeProvider, $locationProvider, $httpProvider) {
    $routeProvider
    .when('/',{
      templateUrl: "components/mounts/index.html",
      controller: 'MountsController',
      controllerAs: 'mounts'
    })
    .when('/new',{
      templateUrl: "components/mounts/new.html",
      controller: 'NewMountController'
    })
    .when('/mount/:id', {
      templateUrl: "components/mounts/show.html",
      controller: "MountController"
    })
    .when('/mountain_ranges', {
      templateUrl: "components/mountain_ranges/index.html",
      controller: "MountainRangesController"
    })
    .otherwise({redirectTo: '/'});

    $locationProvider.html5Mode(true);

    $httpProvider.defaults.headers.common = {
      "X-Parse-Application-Id": "TnV3lT7pduMJ6o36MaFMKZUNHrSS8Oqd5qK9KOqi",
      "X-Parse-REST-API-Key": "zOEFi2ipqCgt4svHeslcCXyHRPSSlXRSQ3rbQ3t2"
    };
  })

  if (testEnv) {
    app.run(function($httpBackend){
      $httpBackend.whenGET(/components\//).passThrough();
      $httpBackend.whenGET('https://api.parse.com/1/classes/Mount').passThrough();
      $httpBackend.whenGET('https://api.parse.com/1/classes/Country').passThrough();
      $httpBackend.whenGET('https://api.parse.com/1/classes/MountainRange').respond(200, {results: [{title: "Непал"}, {title: "Грузия"}]});
    });
  }

})();
