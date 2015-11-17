angular.module('thSample').controller('MountsController', function(MountCollection, MountainRange){
  this.pageTitle = "Альпы";

  var allMounts = MountCollection.all();
  this.all = allMounts;

  this.mountainRanges = MountainRange.all();

  this.countries = [
    {title: 'Грузия'},
    {title: 'Непал'},
    {title: 'Франция'},
    {title: 'Швейцария'}
  ]

  this.filterMountsByRange = function (range) {
    this.all = allMounts.filter(function(m){return m.mountainRange == range.title})
  }

})
