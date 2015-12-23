describe('MountsController', function() {

  beforeEach(module('thSample'));
  var mountsController = null;
  var MountsCollection = {all: jasmine.createSpy('all')};
  var MountainRangesCollection = {all: jasmine.createSpy('all')};

  beforeEach(inject(function($controller) {
    mountsController = $controller('MountsController', {
      MountsCollection: MountsCollection,
      MountainRangesCollection: MountainRangesCollection
    });
  }));

  describe('inialization', function() {
    it('expect to ask for all mounts', function(){
      expect(MountsCollection.all).toHaveBeenCalled();
    });

    it('expect to ask for all mountainRanges', function(){
      expect(MountainRangesCollection.all).toHaveBeenCalled();
    });
  });
});
