import { BrowserContext, Page } from '@playwright/test';
import { LoginPageObjects } from '../objectRepo/LoginPageObjects';
import { webActions } from '../../lib/webActions';

export class LoginPage {

  private webactions: webActions;

  constructor(
    private page: Page,
    private context: BrowserContext
  ) {
    this.webactions = new webActions(page, context);
  }

  async navigateToLoginPage(url :string):Promise<void> {
    await this.webactions.navigateToURL(url);
  };

  async LoginToApplication(username: string, password: string):Promise<void> {

    await this.webactions.enterElementText(LoginPageObjects.username,username);
    await this.webactions.enterElementText(LoginPageObjects.password,password);
    await this.webactions.clickElement(LoginPageObjects.loginButton);
  }

  async validateMessageIsDisplayed(locator:string):Promise<void>{
    await this.webactions.validateElementIsDisplayed(locator, 'Success Message is Not Displayed, Login Failed')
  }

  async validatePageURL(url:string):Promise<void>{
    await this.webactions.validatePageURL(url);
  }

  async logoutOfApplication():Promise<void>{
    await this.webactions.clickElement(LoginPageObjects.logoutButton);
  }

  async reloadPage():Promise<void>{
    await this.webactions.reloadPage();
  }

}