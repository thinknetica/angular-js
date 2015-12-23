var mountsPageObject = function() {
  this.title = element(by.binding('pageTitle'));
  this.allMounts = element.all(by.repeater('mount in mounts.all'));

  this.filter = {
    items: element.all(by.repeater('item in filterItems')),
    itemsTitles: element.all(by.binding('mount.mountainRange.title'))
  }

  this.get = function() {
    browser.get('http://0.0.0.0:3000/');
  };
};

module.exports = mountsPageObject;
