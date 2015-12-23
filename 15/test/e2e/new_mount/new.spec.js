var testHelper = require('./../test.helper.js');
var newPageObject = require('./new.po.js');

var newMountPage = new newPageObject()


describe('new mount page', function() {
  beforeEach(function(){
    newMountPage.get();
  })

  it('should toggle validation error for title', function() {
    newMountPage.form.title.click(); //focus on title
    newMountPage.form.country.click(); //blur title
    expect(newMountPage.errorMessage('title', 'required').isDisplayed()).toBe(true);

    newMountPage.form.title.sendKeys('Свободная Корея');
    expect(newMountPage.errorMessage('title', 'required').isPresent()).toBe(false);
  });

  it('should allow user to click on submit button', function() {
    expect(newMountPage.form.submitBtn.isEnabled()).toBe(false);
    newMountPage.form.title.sendKeys('Свободная Корея');
    testHelper.selectOption(newMountPage.form.country, 'Киргизия');
    testHelper.selectOption(newMountPage.form.mountainRange, 'Ала-Арча');
    newMountPage.form.slug.sendKeys('svobdnaya_korea');
    newMountPage.form.alt.sendKeys('4778');
    newMountPage.form.desc.sendKeys('пик, расположенный в горах Тянь-Шаня в Киргизском хребте.');
    newMountPage.form.firstAscent.sendKeys('26.07.1957');
    expect(newMountPage.form.submitBtn.isEnabled()).toBe(true);
  });
});
