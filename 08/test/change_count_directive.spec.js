angular.module('thSample').controller('MountsController', function(MountsCollection, MountainRange){
  this.pageTitle = "Альпы";

  var allMounts = MountsCollection.all();
  this.all = allMounts;

  this.mountainRanges = MountainRange.all();
  this.filterRange = null;

  this.filterMountsByCountry = function (country) {
    this.all = allMounts.filter(function(m){
      return m.country == country.title
    })
  }

})
