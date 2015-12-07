angular.module('thSample').directive('thReadfile', function(){
  return {
    restrict: 'A',
    scope: {
      file: '=thReadfile',
      preview: '='
    },
    link: function(scope, iElement, iAttrs) {
      iElement.on('change', function(event){
        scope.file = event.target.files[0];

        var reader = new FileReader();
        reader.onload = function (e) {
          scope.preview = e.target.result;
          scope.$apply();
        }
        reader.readAsDataURL(event.target.files[0]);

      });
    }
  }
}).directive('thChangeCount', function(){
  return {
    restrict: 'A',
    link: function(scope, iElement, iAttrs) {
      iElement.on('change', function(event){
        scope.$apply(function(){
          scope[iAttrs.thChangeCount]++;
        })
      });
    }
  }
});
