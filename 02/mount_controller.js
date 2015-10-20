angular.module('thSample').controller('MountController', function($scope, $routeParams){

  angular.forEach(allMounts, function(mount){
    if ($routeParams.slug == mount.slug)
      $scope.mount = mount;
  })
});
