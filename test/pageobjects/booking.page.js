const Page = require('./page');

class bookingPage extends Page{

    get inputFrom        () { return $('//div[contains(@data-test,"PlacePickerInput-origin")]//child::input') }
    get inputTo          () { return $('//div[contains(@data-test,"PlacePickerInput-destination")]/child::input') }
    get selectFrom       () { return $('//div[contains(text(),"San José, Costa Rica" )]')}
    get selectTo                () { return $('//div[contains(text(),"Cancún, Mexico")]')}
    get inputDeparture          () { return $('//input[@name="search-outboundDate"]')}
    get departureDate           () { return $('//div[contains(@data-value,"2021-04-27")]')}
    get nextDate                () { return $('//button[contains(@data-test ,"CalendarMoveNext")]')}
    get returnDate              () { return $('//div[contains(@data-value ,"2021-05-27")]')}
    get setDates                () { return $('//div[contains(text(),"Set dates")]')}
    get buttonPassengers        () { return $('//div[contains(@data-test ,"Passengers")]//child::button')}
    get buttonIncrementAdult    () { return $('//div[contains(@data-test ,"PassengersRow-adults")]//child::button[contains(@aria-label,"increment")]')}
    get buttonIncrementChildren () { return $('//div[contains(@data-test ,"PassengersRow-children")]//child::button[contains(@aria-label,"increment")]')}
    get buttonIncrementInfants  () { return $('//div[contains(@data-test ,"PassengersRow-infants")]//child::button[contains(@aria-label,"increment")]')}
    get buttonPassengersDone    () { return $('//button[contains(@data-test ,"PassengersFieldFooter-done")]')}
    get searchButton            () { return $('//div[contains(text(),"Search")]')}
book (from, destination){
  
    this.inputFrom.setValue(from)
    this.selectFrom.click()
    this.inputTo.setValue(destination)
    this.selectTo.click()
}
dates (){
    this.inputDeparture.click()
    this.departureDate.click()
    this.nextDate.click()
   // this.inputReturn.click()
    this.returnDate.click()
    this.setDates.click()   
}

passengers () {
    this.buttonPassengers.click()
    this.buttonIncrementAdult.click()
    this.buttonIncrementChildren.click()
    this.buttonIncrementChildren.click()
    this.buttonIncrementChildren.click()
    this.buttonIncrementInfants.click()
    this.buttonPassengersDone.click()

}

search (){
    this.searchButton.click()
}
open (constant) {
    if (constant == 1){return super.open('/landing/-/-');}
    else if (constant == 2) {return super.open('/search/results/san-jose-costa-rica/cancun-mexico/2021-04-27/2021-05-27?adults=2&children=3&infants=1');}
    else if (constant == 3) {return super.open('/search/results/san-jose-costa-rica/cancun-mexico/2021-04-27/2021-05-27');}
}


}

module.exports = new bookingPage();
