angular.module('thSample').controller('MountsController', function(MountsCollection, MountainRangesCollection, CountriesCollection){

  var allMounts = MountsCollection.all();
  this.all = allMounts;

  this.mountainRanges = MountainRangesCollection.all();
  this.countries = CountriesCollection.all();

  this.filterMountsByRange = function (range) {
    if (range) {
      this.all = allMounts.filter(function(m){return angular.equals(m.mountainRange, range)})
    } else {
      this.all = allMounts;
    }
  }
})
