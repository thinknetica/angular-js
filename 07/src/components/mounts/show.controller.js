angular.module('thSample').controller('MountController', function($scope, $routeParams, Mount){
  $scope.mount = Mount.get({objectId: $routeParams.id});
});
