(function(){
  angular.module('thSample').directive('thEditor', thEditor)

  function thEditor(){
    return {
      restrict: 'A',
      require: '?ngModel',
      link: function(scope, iElement, iAttrs, ngModelController){
        iElement.on('blur keyup change', function(){
          scope.$evalAsync(function(){setViewValue()});
        });

        function setViewValue(html){
          var html = html || iElement.html();
          ngModelController.$setViewValue(html);
        }

        setViewValue();

        ngModelController.$render = function(){
          iElement.html(ngModelController.$viewValue);
        }

        iElement.on('keydown', function(event){
          if ((event.metaKey || event.ctrlKey) && event.keyCode == 66){
            wrapSelectedTextWith('b');
          }
        })

        function wrapSelectedTextWith(tagNmae){
          var selectedText = $window.getSelection().toString();
          if (selectedText.length > 0) {
            var html = iElement.html();
            html.replace(selectedText, '<' + tagName + '>' + selectedText + '</' + tagName + '>');
            setViewModel(html);
          }
        }
      }
    }
  }
})()
