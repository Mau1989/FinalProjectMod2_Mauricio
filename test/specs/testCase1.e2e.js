//this testcase is about finding a fligh with the following parameters:
//1. TXT to London
//2. Future date flight
//3. Reserve for 2 adults, 3 kids and 1 child.
//Validate URL
//Validate available flights with the available parameters
// 

//Definition of POMs
const bookingPage = require('../pageobjects/booking.page');
const cartPage = require('../pageobjects/cart.page');
const cookies = require('../pageobjects/cookies.page');
const bookingCheckbox = require('../pageobjects/booking.checkbox');
describe('Test Case 1', () => {
    
    before(() => {
        bookingPage.open(1);
        browser.pause(5000);
        cookies.acceptCookies();
        browser.pause(2000);
        bookingCheckbox.deselector();
    })

    it('should select all the passengers', () => {
        bookingPage.passengers();
    });

    it('should enter the from ', () => {
        bookingPage.book('San José','Cancún');
    
    });
    it('should select dates ', () => {
        bookingPage.dates();
    });
    it('should hit search button  ', () => {
        bookingPage.search();
    });
    it('should validate cart page  ', () => {
        cartPage.validateBookingButton();
        cartPage.validateUrlBookingPage();
    });
});


