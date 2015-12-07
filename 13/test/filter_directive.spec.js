describe('thFilter directive', function(){
  var $compile, $scope, directiveElem;

  beforeEach(function(){
    module('thSample');
    module("components/filter/filter.html");

    inject(function(_$compile_, $rootScope){
      $compile = _$compile_;
      $scope = $rootScope.$new();
    });

    $scope.title = "Test";
    $scope.filterItems = [{title: 'one'}];
    $scope.filterFunc = jasmine.createSpy('filterFunc');

    directiveElem = getCompiledElement();
  });

  function getCompiledElement(){
    var transcludedHtml = '<p>Hey, I\'m so transcluded.</p>'
    var element = angular.element('<th-filter title="{{title}}" filter-items="filterItems" filter="filterFunc(item)">' + transcludedHtml + '</th-filter>');
    var compiledElement = $compile(element)($scope);
    $scope.$digest();
    return compiledElement;
  }

  describe('directive template', function(){
    it('exist', function () {
      expect(directiveElem.html()).not.toEqual('');
    });

    it('constains iterator', function () {
      var iterator = directiveElem.find('[ng-repeat]')
      expect(iterator).toBeDefined();
    });
  });

  describe('isolated scope', function(){
    var isolatedScope = null;
    beforeEach(function(){
       isolatedScope = directiveElem.isolateScope();
    })

    describe('title one way binded', function(){
      it('sets proper title', function(){
        expect(isolatedScope.title).toBe($scope.title);
      });

      it('changes in directive not affected parent scope', function(){
        isolatedScope.title = "Test test";
        $scope.$digest();
        expect(isolatedScope.title).not.toBe($scope.title);
      });

      it('parent scope changes affected isolated scope', function(){
        $scope.title = "Test two";
        $scope.$digest();
        expect(isolatedScope.title).toBe($scope.title);
      });
    });

    describe('filterItems two way binded', function(){
      it('sets proper filterItems', function(){
        expect(isolatedScope.filterItems).toEqual($scope.filterItems);
      });

      it('changes in directive affected parent scope', function(){
        isolatedScope.filterItems.push({title: 'Two'});
        $scope.$digest();
        expect(isolatedScope.filterItems).toEqual($scope.filterItems);
      });

      it('parent scope changes affected isolated scope', function(){
        $scope.filterItems.push({title: 'Two'});
        $scope.$digest();
        expect(isolatedScope.filterItems).toBe($scope.filterItems);
      });
    });

    describe('filterFunc func evaluated', function(){
      it('bind filterFunc to function', function(){
        expect(typeof(isolatedScope.filterFunc)).toBe('function');
      });

      it('eval $scope.filterFunc when it called on isolated scope', function(){
        var passedParam = 'Test';
        isolatedScope.filterFunc({item: passedParam});
        expect($scope.filterFunc).toHaveBeenCalledWith(passedParam);
      });
    });

    describe('inner functions', function(){
      it('sets selectedItem and calls filterFunc with proper item', function(){
        var selectedItem = {title: "Test"};
        isolatedScope.filterBy(selectedItem);

        expect(isolatedScope.selectedItem).toEqual(selectedItem);
        expect($scope.filterFunc).toHaveBeenCalledWith(selectedItem);
      });

      it('indicates selected item', function(){
        var selectedItem = {title: "Test"};
        isolatedScope.selectedItem = selectedItem;
        expect(isolatedScope.isActiveItem(selectedItem)).toBe(true);
      });
    });
  });

  describe('transclude', function(){
    it('template should constains ng-transclude tag', function(){
      expect(directiveElem.find('ng-transclude').length).toBe(1);
    });

    it('ng-transclude tag should constains transcludedHtml', function(){
      expect(directiveElem.find('p').length).toBe(1);
    });
  });

  describe('controller', function(){
    it('calls filter by', inject(function($controller, $rootScope){
      var $scope = $rootScope.$new();
      $scope.filterBy = jasmine.createSpy('filterBy');
      var controller = $controller('FilterDirectiveController', {$scope: $scope});

      controller.filterFromOutside();
      expect($scope.filterBy).toHaveBeenCalled();
    }))

  });
});
