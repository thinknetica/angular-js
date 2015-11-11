angular.module('thSample').controller('MountsController', function($scope, Mount, MountainRange, $http){
  $scope.title = "Альпы";
  $scope.newMount = {};
  $scope.displayNewForm = false
  var allMounts = Mount.query();
  $scope.mounts = allMounts;

  $scope.mountainRanges = MountainRange.all();
  $scope.filterRange = null;

  $scope.countries = [
    {title: 'Грузия'},
    {title: 'Непал'},
    {title: 'Франция'},
    {title: 'Швейцария'}
  ]

  $scope.counter = 0;

  $scope.filterMountsByCountry = function (country) {
    $scope.mounts = allMounts.filter(function(m){return m.country == country.title})
  }

  $scope.filterMountsByRange = function (range) {
    $scope.mounts = allMounts.filter(function(m){return m.mountainRange == range.title})
  }

  $scope.showNewForm = function(){
    $scope.displayNewForm = true
  }

  $scope.hideNewForm = function(){
    $scope.displayNewForm = false
  }

  $scope.addMount = function(){
    var mountToServer = new Mount($scope.newMount);
    mountToServer.$save().then(
      function(mount){
        var mountFromServer = angular.extend(mount, $scope.newMount);
        $scope.mounts.push(mountFromServer);
        $scope.newMount = {};
        $scope.displayNewForm = false;
      }
    ).catch(function(){
      $scope.errorMessage = 'Что-то пошло не так. Попробуйте еще раз';
    });
  };

  $scope.cancelAddingMount = function(){
    $scope.newMount = {};
    $scope.displayNewForm = false;
  }

})
