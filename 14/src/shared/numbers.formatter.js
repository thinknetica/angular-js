(function(){
  angular.module('thSample').directive('thNumbersFormatter', thNumbersFormatter)

  function thNumbersFormatter(){
    return {
      restrict: 'A',
      require: '?ngModel',
      link: function(scope, iElement, iAttrs, ngModelController){
        ngModelController.$formatters.push(function(modelValue){
          //8848 => 8 848
          return formatWithSpaces(modelValue);
        });

        ngModelController.$parsers.push(function(viewValue){
          var cleanValue = viewValue.replace(/ /g, '');
          ngModelController.$setViewValue(formatWithSpaces(cleanValue));
          ngModelController.$render();
          return cleanValue;
        });

        function formatWithSpaces(value){
          return value && splitByBlocks(value.toString()).join(" ");
        }

        function splitByBlocks(str){
          return reverseSting(str).match(/.{1,3}/g).map(reverseSting).reverse();
        }

        function reverseSting(str){
          return str.split("").reverse().join("");
        }
      }
    }
  }
})()
