angular.module('thSample', ['ngRoute', 'ngResource'])
.config(function($routeProvider, $locationProvider, $httpProvider) {
  $routeProvider
  .when('/',{
    templateUrl: "list.html",
    controller: 'MountsController'
  })
  .when('/mount/:id', {
    templateUrl: "item.html",
    controller: "MountController"
  }).otherwise({redirectTo: '/'});

  $locationProvider.html5Mode(true);

  $httpProvider.defaults.headers.common = {
    "X-Parse-Application-Id": "TnV3lT7pduMJ6o36MaFMKZUNHrSS8Oqd5qK9KOqi",
    "X-Parse-REST-API-Key": "zOEFi2ipqCgt4svHeslcCXyHRPSSlXRSQ3rbQ3t2"
  };
});
