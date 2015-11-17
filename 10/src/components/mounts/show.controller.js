angular.module('thSample').controller('MountController', function($scope, $routeParams, MountCollection){
  $scope.mount = MountCollection.get($routeParams.id);
});
