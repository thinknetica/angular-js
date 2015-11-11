angular.module('thSample').controller('NewMountController', function($scope, Mount, MountainRange, $location){
  $scope.newMount = {};
  $scope.displayNewForm = false

  $scope.mountainRanges = MountainRange.all();

  $scope.countries = [
    {title: 'Грузия'},
    {title: 'Непал'},
    {title: 'Франция'},
    {title: 'Швейцария'}
  ]

  $scope.addMount = function(){
    var mountToServer = new Mount($scope.newMount);
    mountToServer.$save()
      .then(function(){ $location.path("/")})
      .catch(function(){
        $scope.errorMessage = 'Что-то пошло не так. Попробуйте еще раз';
      });
  };
})
