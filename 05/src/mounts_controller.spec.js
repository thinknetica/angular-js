describe('MountsController', function() {

  beforeEach(module('thSample'));
  var mountsController = null;
  var $scope = {};
  var mountsAPIUrl = 'https://api.parse.com/1/classes/Mount';

  beforeEach(inject(function($controller) {
    mountsController = $controller('MountsController', {$scope: $scope});
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
      var $httpBackend;

      beforeEach(inject(function(_$httpBackend_){
        $httpBackend = _$httpBackend_;
        var jsonResponse = JSON.stringify({results: [monteRose]});
        $httpBackend.whenGET(mountsAPIUrl).respond(jsonResponse);
      }));

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

  describe('$scope.addMount', function(){
    var $httpBackend;
    var apiPostStub;

    beforeEach(inject(function(_$httpBackend_){
      $httpBackend = _$httpBackend_;
      apiPostStub = $httpBackend.whenPOST(mountsAPIUrl).respond(201);
      $httpBackend.whenGET(mountsAPIUrl).respond('[]');
    }));

    it('call api create point', function() {
      // expect call post to https://api.parse.com/1/classes/Mount
      $httpBackend.expectPOST(mountsAPIUrl);
      $scope.addMount();
      expect($httpBackend.verifyNoOutstandingExpectation).not.toThrow();
    });

    it('push new mount to $scope.mounts', function() {
      spyOn($scope.mounts, 'push')
      $scope.addMount();
      $httpBackend.flush();
      expect($scope.mounts.push).toHaveBeenCalled();
      expect($httpBackend.verifyNoOutstandingRequest).not.toThrow();
    });

    it('add new mount to $scope.mounts', function() {
      $httpBackend.whenGET(mountsAPIUrl).respond(200, '[]');
      $scope.addMount();
      $httpBackend.flush();
      expect($scope.mounts.length).toBeGreaterThan(0);
      expect($httpBackend.verifyNoOutstandingRequest).not.toThrow();
    });

    it('sets error about failed request', function() {
      apiPostStub.respond(400);
      $scope.addMount();
      $httpBackend.flush();
      expect($scope.errorMessage).toBeDefined();
    });
  });
});
