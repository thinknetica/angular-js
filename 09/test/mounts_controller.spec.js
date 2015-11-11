describe('MountsController', function() {

  beforeEach(module('thSample'));
  var mountsController = null;
  var $scope = {};
  var mountsAPIUrl = 'https://api.parse.com/1/classes/Mount';
  var mountainRangeAPIUrl = 'https://api.parse.com/1/classes/MountainRange';
  var $httpBackend;


  beforeEach(inject(function($controller, _$httpBackend_) {
    mountsController = $controller('MountsController', {$scope: $scope});
    $httpBackend = _$httpBackend_;
    $httpBackend.whenGET(mountainRangeAPIUrl).respond(200, {results: []});
  }));

  describe('inialization', function() {
    it('sets title', function() {
      expect($scope.title).toBe('Альпы');
    });

    it('sets newMount to empty object', function() {
      expect($scope.newMount).toEqual({});
    });

    describe('fetch mounts from server', function(){
      var monteRose = {title: 'Монте роза', alt: 4634};

      beforeEach(function(){
        var jsonResponse = JSON.stringify({results: [monteRose]});
        $httpBackend.whenGET(mountsAPIUrl).respond(jsonResponse);
      });

      it('expect to call to parse.com', function(){
        $httpBackend.expectGET(mountsAPIUrl);
        expect($httpBackend.verifyNoOutstandingExpectation).not.toThrow();
      });

      it('sets to $scope.mounts an array of mounts', function(){
        $httpBackend.flush();
        var localMonteRose = $scope.mounts[0];
        expect(localMonteRose.title).toBe(monteRose.title);
        expect(localMonteRose.alt).toBe(monteRose.alt);
      });
    });
  });
});
