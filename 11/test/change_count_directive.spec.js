describe('thChangeCount directive', function(){
  var $compile, $scope, directiveElem;

  beforeEach(function(){
    module('thSample');

    inject(function(_$compile_, $rootScope){
      $compile = _$compile_;
      $scope = $rootScope.$new();
    });

    $scope.count = 0;

    directiveElem = getCompiledElement();
  });

  function getCompiledElement(){
    var element = angular.element('<input th-change-count="count" type="file" />');
    var compiledElement = $compile(element)($scope);
    $scope.$digest();
    return compiledElement;
  }

  it('changes counter', function(){
    directiveElem.triggerHandler('change');
    expect($scope.count).toEqual(1);
  });
});
