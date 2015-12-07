(function(){
  angular.module('thSample').directive('thDateParser', thDateParser)

  function thDateParser(){
    return {
      restrict: 'A',
      require: '?ngModel',
      link: function(scope, iElement, iAttrs, ngModelController){
        ngModelController.$parsers.push(function(viewValue){
          //10.12.2
          var dateArr = viewValue.split('.');
          var year = dateArr[2],
            month = (dateArr[1] && (dateArr[1] - 1)),
            day = dateArr[0];

          ngModelController.$setValidity('date', dateArr.length == 3 && year.length == 4); 
          if (dateArr.length == 3 && year.length == 4){
            return new Date(year, month, day).toDateString();
          } else {
            return null;
          }
        });
      }
    }
  }
})();
