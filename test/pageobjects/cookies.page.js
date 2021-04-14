const Page = require('./page');

class cookies extends Page {

    get acceptButton () { return $('//p[contains(text(),"Accept")]')}


acceptCookies (){
    this.acceptButton.click()
}
}
module.exports = new cookies();
