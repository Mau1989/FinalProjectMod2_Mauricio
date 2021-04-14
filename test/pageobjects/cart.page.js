const Page = require('./page');


class cartPage extends Page{

    get bookingButton    () { return $('//div[contains(text(),"Booking options")]')}
    get checkBoxAircraft () { return $('//span[contains(text(),"Flight")]')}
    get checkBoxBus      () { return $('//span[contains(text(),"Bus")]')}
    get checkBoxTrain    () { return $('//span[contains(text(),"Train")]')}
    get onlyBusButton    () { return $('//span[contains(text(),"Bus")]//parent::div//parent::label//parent::div//child::button//child::div[contains(text(),"Only")]')}
    get noBusMessage     () { return $('//div[contains(text(),"Sorry")]')}
    get valueButton      () { return $('//div[@data-test="ModalFooter"]//child::div[@data-test="DetailBookingButton"]')}

    validateBookingButton () {
        browser.pause(15000);
        expect(this.bookingButton).toBeExisting()
    }
    validateUrlBookingPage () {
        expect(browser.getUrl()).toMatch('https://www.kiwi.com/us/search/results/san-jose-costa-rica/cancun-mexico/2021-04-27/2021-05-27?adults=2&children=3&infants=1')
    }
    validateBus () {
        this.checkBoxAircraft.click()
        this.checkBoxTrain.click()
    }
    validateTrain () {
        this.checkBoxTrain.click()
        expect(this.bookingButton).toBeExisting()
    }
    BookFlight () {
        browser.pause(5000);
        this.bookingButton.click()
        browser.pause(5000);
        this.valueButton.click()
    }
    


        
    
 }

    
module.exports = new cartPage();
