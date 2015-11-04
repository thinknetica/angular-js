describe('MountainRange', function() {
  beforeEach(module('thSample'));
  var MountainRange = null;
  var APIUrl = 'https://api.parse.com/1/classes/MountainRange';
  var $httpBackend;

  beforeEach(inject(function(_MountainRange_, _$httpBackend_) {
    MountainRange = _MountainRange_;
    $httpBackend = _$httpBackend_;
  }));

  describe('inialization', function() {
    it('expect API call', function(){
      $httpBackend.expectGET(APIUrl).respond(200);
      expect($httpBackend.verifyNoOutstandingExpectation).not.toThrow();
    });

    it('got an array with one element', function(){
      $httpBackend.whenGET(APIUrl).respond(200, {results: [{title: 'Test'}]})
      $httpBackend.flush();
      expect(MountainRange.all().length).toBe(1);
    });
  });

  describe('add', function() {
    it('add range to array', function(){
      $httpBackend.whenGET(APIUrl).respond(200, {results: []});
      $httpBackend.flush();
      MountainRange.add('test');
      expect(MountainRange.all().length).toBe(1);
    });
  });

});
