import { browser, by, element } from 'protractor';

export class FormPage {
    navigateTo(){
        return browser.get('/');
        
    }
   
    getNameTextbox() {
        return element(by.name('fullName'));
       }
    getEmailTextbox() {
        return element(by.name('email'));
       }
    getContactTextbox() {
        return element(by.name('contact'));
       }
    getGender() {
        return element(by.name('gender'));
       }
    getMessageTextbox() {
        return element(by.name('message'));
       }
    getSubmitButton() {
        return element(by.buttonText('Submit'));
    }  

}
