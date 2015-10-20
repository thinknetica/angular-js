angular.module('thSample').controller('MountsController', function($scope, $location, currentUser){
  console.log(currentUser);
  $scope.title = "Альпы";

  $scope.mounts = allMounts;

  $scope.pickMount = function () {
    console.log($location.path());
  }
});
