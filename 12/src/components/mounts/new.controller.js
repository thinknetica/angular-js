angular.module('thSample').controller('NewMountController', function($scope, Mount, MountainRangesCollection, CountriesCollection, $location){
  $scope.newMount = {};
  var allRanges = MountainRangesCollection.all();
  $scope.countries = CountriesCollection.all();

  $scope.addMount = function(){
    MountainRangesCollection.add($scope.newMount);
  };


  // если в newMount изменилось поле country
  $scope.$watch(function(){
    return $scope.newMount.country;
  }, function(country, oldCountry){
    $scope.mountainRanges = allRanges.filter(function(range){
      return range.country == country.title
    })
  })
});
