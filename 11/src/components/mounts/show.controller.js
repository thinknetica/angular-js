angular.module('thSample').controller('MountController', function($scope, $routeParams, MountsCollection){
  $scope.mount = MountsCollection.get($routeParams.id);
});
