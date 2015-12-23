var newPageObject = function() {
  this.title = element(by.binding('pageTitle'));
  this.allMounts = element.all(by.repeater('mount in mounts.all'));

  function errorBlock(field){
    var selector = '[ng-show="form.' + field + '.$touched"]';
    return element(by.css(selector));
  }

  this.errorMessage = function(field, error){
    var block = errorBlock(field);
    var selector = '[ng-message="' + error + '"]';
    return block.element(by.css(selector))
  }

  this.form = {
    title: element(by.model('newMount.title')),
    country: element(by.model('newMount.country')),
    mountainRange: element(by.model('newMount.mountainRange')),
    slug: element(by.model('newMount.slug')),
    alt: element(by.model('newMount.alt')),
    desc: element(by.model('newMount.desc')),
    firstAscent: element(by.model('newMount.firstAscent')),
    submitBtn: element(by.css('[type=submit]'))
  }

  this.get = function() {
    browser.get('http://0.0.0.0:3000/new');
  };
};

module.exports = newPageObject;
