angular.module('thSample').controller('MountController', function($scope, $routeParams, $resource){

  var Mount = $resource(
    'https://api.parse.com/1/classes/Mount/:objectId',
    {objectId: '@objectId'}
  )

  $scope.mount = Mount.get({objectId: $routeParams.id});
});
