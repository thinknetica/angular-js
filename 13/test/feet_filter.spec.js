describe('feet filter', function(){
  var feetFilter, feetLength;
  beforeEach(module('thSample'));
  beforeEach(inject(function(_feetFilter_, _feetLength_){
    feetFilter = _feetFilter_;
    feetLength = _feetLength_;
  }))

  it('converts meters to feets', function() {
    var convertedValue = Math.round(10 * feetLength.value) + " ft."
    expect(feetFilter(10)).toBe(convertedValue);
  })

  it('converts meters to feets and round down', function() {
    var convertedValue = Math.floor(10 * feetLength.value) + " ft."
    expect(feetFilter(10, true)).toBe(convertedValue);
  })

  it('converts meters to feets and round down', inject(function($compile, $rootScope) {
    var $scope = $rootScope.$new();
    $scope.alt = 10;
    var convertedValue = Math.round($scope.alt * feetLength.value) + " ft."
    var element = $compile(angular.element("<div>{{alt | feet}}</div>"))($scope);
    $scope.$digest();

    expect(element.html()).toBe(convertedValue);
    feetLength.value = 10;
    $scope.$digest();
    expect(element.html()).not.toBe(convertedValue);
  }))
});
