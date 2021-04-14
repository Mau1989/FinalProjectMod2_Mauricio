const Page = require('./page');

class bookingCheckbox extends Page{

    get checkBox () {return $('//span[contains(text(),"Booking.com")]//parent::div[1]//parent::label[1]//child::div[1]')}

deselector(){
    this.checkBox.click()
}
}

module.exports = new bookingCheckbox();
