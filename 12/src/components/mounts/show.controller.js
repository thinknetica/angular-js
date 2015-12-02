angular.module('thSample').controller('MountController', function($routeParams, MountsCollection, $scope){
  $scope.mount = MountsCollection.get($routeParams.id);
});
