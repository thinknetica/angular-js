angular.module('thSample').controller('MountainRangesController', function($scope, MountainRange){
  $scope.mountainRanges = MountainRange.all();
  $scope.newRangeTitle = null;

  $scope.addRange = function(){
    MountainRange.add($scope.newRangeTitle);
    $scope.newRangeTitle = null;
  }
})
