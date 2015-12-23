(function(){
  angular.module('thSample').directive('thUrlValidator', thUrlValidator)

  function thUrlValidator(){
    return {
      restrict: 'A',
      require: '?ngModel',
      link: function(scope, iElement, iAttrs, ngModelController){
        var URL_REGEXP = /^[a-zA-Z\_\-]+$/
        // ngModelController.$validators.url = function(modelValue, viewValue){
        //   var value = modelValue || viewValue;
        //   return URL_REGEXP.test(value);
        // }

        ngModelController.$parsers.push(function(viewValue){
          var validationResult = URL_REGEXP.test(viewValue);
          ngModelController.$setValidity('url', validationResult);
          return (validationResult && viewValue || null);
        });
      }
    }
  }
})()
