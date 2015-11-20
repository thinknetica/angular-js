angular.module('thSample').controller('MountsController', function(MountsCollection, MountainRange){
  this.pageTitle = "Альпы";

  var allMounts = MountsCollection.all();
  this.all = allMounts;

  this.mountainRanges = MountainRange.all();

  this.countries = [
    {title: 'Грузия'},
    {title: 'Непал'},
    {title: 'Франция'},
    {title: 'Швейцария'}
  ]

  this.filterMountsByRange = function (range) {
    this.all = allMounts.filter(function(m){return angular.equals(m.mountainRange, range)})
  }

})
