const bookingPage = require('../pageobjects/booking.page');
const cartPage = require('../pageobjects/cart.page');
const passengerInfoPage = require('../pageobjects/passengerInfo.page');
const cookies = require('../pageobjects/cookies.page');
describe('TestCase3', () => {
    
    before(() => {
        bookingPage.open(3);
        browser.pause(5000);
        cookies.acceptCookies();
    })

    it('should click on book', () => {
        cartPage.BookFlight();
        browser.pause(5000);
        //cartPage.BookFlight();
    });

    it('should enter passenger basic information', () => {
        passengerInfoPage.basicInformation("cnorris@gmail.com","7138686003","Carlos Ray","Norris");
    });

    it('should enter passenger specific information', () => {
        passengerInfoPage.specificInformation("10","1940","9020010");
    });
    it('should validate some of the passenger information', () => {
        expect(passengerInfoPage.passengerName).toBeExisting()
        expect(passengerInfoPage.passengerBirth).toBeExisting()
        expect(passengerInfoPage.passengerId).toBeExisting()
    });

});


