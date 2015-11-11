angular.module('thSample').controller('MountsController', function($scope, Mount, MountainRange, $http, feetLength){
  $scope.title = "Альпы";
  $scope.newMount = {};
  $scope.displayNewForm = false
  var allMounts = Mount.query();
  $scope.mounts = allMounts;

  $scope.mountainRanges = MountainRange.all();
  $scope.filterRange = null;

  $scope.countries = [
    {title: 'Грузия'},
    {title: 'Непал'},
    {title: 'Франция'},
    {title: 'Швейцария'}
  ]

  $scope.feetLength = feetLength;
  $scope.counter = 0;

  $scope.filterMountsByCountry = function (country) {
    $scope.mounts = allMounts.filter(function(m){return m.country == country.title})
  }

  $scope.filterMountsByRange = function (range) {
    $scope.mounts = allMounts.filter(function(m){return m.mountainRange == range.title})
  }

})
