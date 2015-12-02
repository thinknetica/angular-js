describe('newMountForm', function(){
  var form;

  beforeEach(module('thSample'));
  beforeEach(module('components/mounts/new.html'));

  beforeEach(inject(function($rootScope, $templateCache, $compile) {
    $scope = $rootScope.$new();
    templateHtml = angular.element($templateCache.get('components/mounts/new.html'));
    $compile(templateHtml)($scope);
    $scope.$digest();
    form = $scope.form;
  }))

  it('should not allow an invalid `width`', function() {
    expect(form.$valid).toBeFalsy();
    form.title.$setViewValue('Everest');
    form.slug.$setViewValue('everest');
    form.mountainRange.$setViewValue('Hymalaya');
    form.country.$setViewValue('Nepal');
    form.alt.$setViewValue(8848);
    expect(form.$valid).toBeTruthy()
  });
})
