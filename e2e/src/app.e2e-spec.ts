import { AppPage } from './app.po';
import { browser,by, WebDriver } from 'protractor';

describe('App Component', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('Tag should be Defined ' , () => 
  {
    page.navigateTo();
    expect (page.getParagraphText()).toBeDefined();
    
});
});




