angular.module("thSample",[]).controller("PlanesController",["$scope","$timeout",function(e){e.title="Пассажирские самолеты",e.planes=[{company:"Airbus",model:"A-319",desc:"The Airbus A320 family consists of short- to medium-range, narrow-body, commercial passenger twin-engine jet airliners."},{company:"Airbus",model:"A-319",desc:"The Airbus A320 family consists of short- to medium-range, narrow-body, commercial passenger twin-engine jet airliners."}]}]);

// angular.module('thSample', []).controller('PlanesController', ['$scope', '$timeout', function($scope, $timeout) {
//   $scope.title = "Пассажирские самолеты";
//
//   $scope.planes = [
//     {
//       company: "Airbus",
//       model: "A-319",
//       desc: "The Airbus A320 family consists of short- to medium-range, narrow-body, commercial passenger twin-engine jet airliners."
//     },
//     {
//       company: "Airbus",
//       model: "A-319",
//       desc: "The Airbus A320 family consists of short- to medium-range, narrow-body, commercial passenger twin-engine jet airliners."
//     }
//   ];
// }]);
