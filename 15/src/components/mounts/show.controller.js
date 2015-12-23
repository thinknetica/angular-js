angular.module('thSample').controller('MountController', function($stateParams, MountsCollection, $scope){
  $scope.mount = MountsCollection.get($stateParams.id);
});
