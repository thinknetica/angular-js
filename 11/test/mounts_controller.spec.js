describe('MountsController', function() {

  beforeEach(module('thSample'));
  var mountsController = null;
  var MountsCollection = {all: jasmine.createSpy('all')};
  var MountainRange = {all: jasmine.createSpy('all')};

  beforeEach(inject(function($controller) {
    mountsController = $controller('MountsController', {
      MountsCollection: MountsCollection,
      MountainRange: MountainRange
    });
  }));

  describe('inialization', function() {
    it('sets title', function() {
      expect(mountsController.pageTitle).toBe('Альпы');
    });

    it('expect to ask for all mounts', function(){
      expect(MountsCollection.all).toHaveBeenCalled();
    });

    it('expect to ask for all mountainRanges', function(){
      expect(MountainRange.all).toHaveBeenCalled();
    });
  });
});
