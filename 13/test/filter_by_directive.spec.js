describe('thFilterBy directive', function(){
  var $compile, $scope;

  beforeEach(function(){
    module('thSample');
    module("components/filter/filter.html");

    inject(function(_$compile_, $rootScope){
      $compile = _$compile_;
      $scope = $rootScope.$new();
    });
  });

  function getCompiledElement(template){
    var element = angular.element(template)
    var compiledEl = $compile(element)($scope);
    $scope.$digest()
    return compiledEl;
  }

  it('throw an error when no outer filter directive', function(){
    expect(function(){
      getCompiledElement('<a th-filter-by=""></a>')
    }).toThrow();
  })

  it('not throw an error when outer filter directive present', function(){
    expect(function(){
      getCompiledElement('<th-filter><a th-filter-by=""></a></th-filter>')
    }).not.toThrow();
  })

  it('communicate', function(){
      var element = getCompiledElement('<th-filter><a th-filter-by=""></a></th-filter>');
      var thFilterController = element.controller('thFilter');
      spyOn(thFilterController, 'filterFromOutside');
      var thFilterByEl = element.find('a');

      thFilterByEl.triggerHandler('click');
      expect(thFilterController.filterFromOutside).toHaveBeenCalled();
  });
})
