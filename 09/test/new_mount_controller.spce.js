describe('MountsController', function() {

  beforeEach(module('thSample'));
  var mountsController = null;
  var $scope = {};
  var $location = {};
  var mountsAPIUrl = 'https://api.parse.com/1/classes/Mount';
  var mountainRangeAPIUrl = 'https://api.parse.com/1/classes/MountainRange';
  var $httpBackend;


  beforeEach(inject(function($controller, _$httpBackend_) {
    mountsController = $controller('NewMountController', {$scope: $scope, $location: $location});
    $httpBackend = _$httpBackend_;
    $httpBackend.whenGET(mountainRangeAPIUrl).respond(200, {results: []});
  }));

  describe('$scope.addMount', function(){
    var apiPostStub;

    beforeEach(function(){
      apiPostStub = $httpBackend.whenPOST(mountsAPIUrl).respond(201);
      $httpBackend.whenGET(mountsAPIUrl).respond('[]');
    });

    it('call api create point', function() {
      // expect call post to https://api.parse.com/1/classes/Mount
      $httpBackend.expectPOST(mountsAPIUrl);
      $scope.addMount();
      expect($httpBackend.verifyNoOutstandingExpectation).not.toThrow();
    });

    it('push new mount to $scope.mounts', function() {
      $location.path = jasmine.createSpy('path')
      $scope.addMount();
      $httpBackend.flush();
      expect($location.path).toHaveBeenCalledWith("/");
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
