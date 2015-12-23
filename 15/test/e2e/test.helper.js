module.exports = {
  hasClass: function(element, cls) {
    return element.getAttribute('class').then(function (classes) {
        return classes.split(' ').indexOf(cls) !== -1;
    });
  },

  allItemsEqualTo: function(items, el){
    return items.reduce(function(previous, current) {
      return  previous && current == el;
    }, true);
  },

  selectOption: function(select, optionLabel) {
    select.element(by.cssContainingText('option', optionLabel)).click();
  }
}
