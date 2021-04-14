
//1. Validate shown results available
//2. Make a bus filter
//3. Validate thate they are not available bus tickets
//4. Agregate train transportation option
//5. Validate that they are tickets available

const bookingPage = require('../pageobjects/booking.page');
const cartPage = require('../pageobjects/cart.page');
const cookies= require('../pageobjects/cookies.page');
const RESULT_ERROR = "Sorry, we couldn't find any results";

describe('TestCase2', () => {
    
    before(() => {
        bookingPage.open(2);
        browser.pause(5000);
        cookies.acceptCookies();
    })

    it('should validate all results', () => {
        cartPage.validateBookingButton();
    });

    it('should validate bus results', () => {
        browser.pause(10000);
        cartPage.validateBus();
        expect(cartPage.noBusMessage).toHaveTextContaining(RESULT_ERROR)
    });
    it('should validate train results', () => {
        browser.pause(10000);
        cartPage.validateTrain();
    });
});


