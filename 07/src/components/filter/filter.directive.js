angular.module('thSample').directive('thFilter', function (){
  return {
    restrict: 'E',
    templateUrl: 'components/filter/filter.html',
    transclude: true,
    scope: {
      title: '@',
      filterItems: '=',
      filterFunc: '&filter'
    },
    link: function(scope, iElement, iAttrs) {
      scope.selectedItem = null;


      scope.filterBy = function(item){
        scope.selectedItem = item;
        scope.filterFunc({item: item});
      }

      scope.isActiveItem = function(item){
        return angular.equals(item, scope.selectedItem);
      }
    }
  }
})
