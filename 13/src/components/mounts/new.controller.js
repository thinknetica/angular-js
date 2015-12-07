angular.module('thSample').controller('NewMountController', function($scope, MountainRangesCollection, CountriesCollection){
  $scope.newMount = {desc: 'Эльбрус'};
  var allRanges = MountainRangesCollection.all();
  $scope.countries = CountriesCollection.all();

  $scope.addMount = function(){
    MountainRangesCollection.add($scope.newMount);
  };

  // если в newMount изменилось поле country
  $scope.$watch('newMount.country', function(country, oldCountry){
    if (country){
      $scope.mountainRanges = allRanges.filter(function(range){
        return range.country == country.title
      })
    }
  })
});
