var testHelper = require('./../test.helper.js');
var mountsPageObject = require('./mounts.po.js');

var mountsPage = new mountsPageObject()
mountsPage.get();

describe('Mounts index', function() {
  it('should have a title', function() {
    expect(mountsPage.title.getText()).toEqual('Вершины мира');
  });

  it('should load several mounts', function() {
    expect(mountsPage.allMounts.count()).toBeGreaterThan(0);
  });

  it('should load mountainRanges filter', function() {
    expect(mountsPage.filter.items.count()).toBeGreaterThan(0);
  });

  it('should filter elements and highlight filter item', function() {
    var firstRangeEl = mountsPage.filter.items.first();

    firstRangeEl.element(by.binding('item.title')).getText().then(function(rangeTitle){
      firstRangeEl.click();
      expect(testHelper.hasClass(firstRangeEl, 'active')).toBe(true);

      // получаем массив промисов
      var mounts = mountsPage.filter.itemsTitles.map(function(el){
        return el.getText();
      });

      // ждем пока они все зарезолвятся в массив
      mounts.then(function(titles){
        expect(testHelper.allItemsEqualTo(titles, rangeTitle)).toBe(true);
      })
    });
  });
});
