const Page = require('./page');


class passengerInfoPage extends Page{

get inputEmail                  () { return $('//input[@name="email"]')}
get inputPhone                  () { return $('//input[@name="phone"]')}
get inputNames                  () { return $('//input[@name="firstname"]')}
get inputSurnames               () { return $('//input[@name="lastname"]')}
get nationality                 () { return $('//select[@name="nationality"]')}
get gender                      () { return $('//select[@name="title"]')}
get monthOfBirth                () { return $('//select[@name="birthMonth"]')}
get dayOfBirth                  () { return $('//input[@name="birthDay"]')}
get yearOfBirth                 () { return $('//input[@name="birthYear"]')}
get passport                    () { return $('//input[@name="idNumber"]')}
get continueButton              () { return $('//button[@data-test="StepControls-passengers-next"]')}
get continu2Button              () { return $('//button[@data-test="StepControls-AdditionalService-next"]')}
get conntinueWithStandardButton () { return $('//div[contains(text(),"Continue with Standard")]')}
get conntinueWithPlusButton     () { return $('//div[contains(text(),"Continue with Plus")]')}
get checkbox                    () { return $('//span[contains(text(),"No expiry")]')}
get passengerName               () { return $('//span[contains(text(),"Carlos Ray Norris")]')}
get passengerBirth              () { return $('//*[contains(text(),"03/10/1940")]')}
get passengerId                 () { return $('//*[contains(text(),"9020010")]')}       
get cabinBaggage                () { return $('//span[contains(text(),"Personal item")]//ancestor::div[5]//child::div[1]//child::label[1]')}
get checkedBaggage              () { return $('//p[contains(text(),"No checked baggage")]//ancestor::div[6]//child::label[1]')}
get noInsurance                 () { return $('//div[contains(text(),"No insurance")]//ancestor::div[4]//child::div[2]//child::label')}    
get saverTicket                 () { return $('//div[contains(text(),"Saver Ticket")]//ancestor::div[4]//child::div[2]//child::label')} 
get continueTicketFareButton    () { return $('//div[contains(text(),"Continue")]//ancestor::button')}
basicInformation(email,phone,names,surnames) {
    this.inputEmail.setValue(email)
    this.inputPhone.setValue(phone)
    this.inputNames.setValue(names)
    this.inputSurnames.setValue(surnames)


}

specificInformation(dayOfBirth,yearOfBirth,passport){
  
    $(this.nationality).selectByVisibleText("United States")
    $(this.gender).selectByVisibleText("Male")
    $(this.monthOfBirth).selectByVisibleText("March")
    this.dayOfBirth.setValue(dayOfBirth)
    this.yearOfBirth.setValue(yearOfBirth)
    this.passport.setValue(passport)
    this.checkbox.click()
    this.cabinBaggage.click()
    this.checkedBaggage.click()
    this.noInsurance.click()
    browser.pause(2000);
    this.continueButton.click()
    this.saverTicket.click()
    this.continueTicketFareButton.click()
    browser.pause(1000);
    this.continueTicketFareButton.click()
    //this.conntinueWithStandardButton.click()
    //this.conntinueWithPlusButton.click()
    //this.continu2Button.click()
}

}

module.exports = new passengerInfoPage ();
