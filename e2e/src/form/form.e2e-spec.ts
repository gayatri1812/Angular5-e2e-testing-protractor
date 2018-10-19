import { FormPage } from './form.po';
import { browser } from 'protractor';

describe('Information tests', () => {
    let page: FormPage;

    beforeEach(() => {
        page = new FormPage();
    });

    it('Form should be valid ' , () => 
    {
        page.navigateTo();
        page.getNameTextbox().sendKeys('jeorge');
        browser.sleep(5000);

        page.getEmailTextbox().sendKeys('jeorge@yahoo.com');
        browser.sleep(5000);

        page.getContactTextbox().sendKeys('1234567890');
        browser.sleep(5000);

        expect (page.getGender().isSelected()).toEqual(true);
        browser.sleep(5000);

        page.getMessageTextbox().sendKeys('Enter text');
        

        expect (page.getSubmitButton().isEnabled()).toEqual(false);
        
});
});
