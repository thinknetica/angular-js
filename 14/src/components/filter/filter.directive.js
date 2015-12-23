angular.module('thSample').controller('FilterDirectiveController', function($scope){
  this.filterFromOutside = function(item){
    $scope.filterBy(item);
  }
}).directive('thFilter', function (){
  return {
    restrict: 'E',
    templateUrl: 'components/filter/filter.html',
    transclude: true,
    scope: {
      title: '@',
      filterItems: '=',
      filterFunc: '&filter'
    },
    controller: 'FilterDirectiveController',
    link: function(scope, iElement, iAttrs) {
      scope.selectedItem = null;

      scope.filterBy = function(item){
        scope.selectedItem = item;
        scope.filterFunc({item: item});
      }

      scope.isActiveItem = function(item){
        return angular.equals(item, scope.selectedItem);
      }

      scope.resetFilter = function(){
        scope.selectedItem = null;
        scope.filterFunc();
      }
    }
  }
}).directive('thFilterBy', function(){
  return {
    restrict: 'A',
    require: '^thFilter',
    scope: {
      item: '=thFilterBy'
    },
    link: function(scope, iElement, iAttrs, filterController){
      iElement.on('click', function(){
        scope.$apply(function(){
          filterController.filterFromOutside(scope.item)
        })
      })
    }
  };
})
