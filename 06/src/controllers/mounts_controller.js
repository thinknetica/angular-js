angular.module('thSample').controller('MountsController', function($scope, Mount, MountainRange){
  $scope.title = "Альпы";
  $scope.newMount = {};
  $scope.mounts = Mount.query();

  $scope.mountainRanges = MountainRange.all();
  $scope.filterRange = null;

  $scope.filterItems = function (argument) {
    // фильтруем элементы
  }

  $scope.addMount = function(){
    var mountToServer = new Mount($scope.newMount);
    mountToServer.$save().then(
      function(mount){
        var mountFromServer = angular.extend(mount, $scope.newMount);
        $scope.mounts.push(mountFromServer);
        $scope.newMount = {};
      }
    ).catch(function(){
      $scope.errorMessage = 'Что-то пошло не так. Попробуйте еще раз';
    });
  };

}).controller('newMountRange', function($scope, MountainRange){
  $scope.mRanges = MountainRange.all();
  $scope.newRangeTitle = null;

  MountainRange.registerObserverCallback(function(){
    $scope.mRanges = MountainRange.all();
    $scope.$digest();
  })

  $scope.addRange = function($event){
    if ($event.keyCode == 13){
      MountainRange.add($scope.newRangeTitle);
      $scope.newRangeTitle = null;
    }
  }
})
