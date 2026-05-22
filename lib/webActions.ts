//This pae contains most comonly used functions/webActions which can be reused in every page
import { Page, expect, BrowserContext } from "@playwright/test";


export class webActions {

    readonly page: Page;
    readonly context: BrowserContext;

    constructor(page: Page, context: BrowserContext) {
        this.page = page;
        this.context = context
    }

    //validate page is valid
    private ensurePageIsValid (): void{
        if(this.page.isClosed()){
            throw new Error('Page Closed, Cannot Perform Operations');
        }
    }

    //navigate to any URL
    async navigateToURL(url: string) {
        this.ensurePageIsValid();
        await this.page.goto(url);
    }

    //click on any element 
    async clickElement (locator : string) : Promise<void>{
        this.ensurePageIsValid();
        await this.page.locator(locator).click();
    }

    //enter text to an element
    async enterElementText( locator:string, text :string): Promise<void>{
        this.ensurePageIsValid();
        await this.page.fill(locator,text);
    }

    //validate text is displayed
    async validateTextIsDisplayed(text:string):Promise<void>{
        this.ensurePageIsValid();
        if(expect(this.page.getByText(text).first().isVisible()))
        console.log('Text is Displayed :'+text);
    }

    //valdate element is displayed
    async validateElementIsDisplayed(locator:string, errorMessage:string):Promise<void>{
        this.ensurePageIsValid();
        await this.page.waitForSelector(locator,{state:'visible'})
        .catch(()=>{throw new Error(`${errorMessage}`);});
    }

    //validate page URL 
    async validatePageURL(expectedURL: string): Promise<void> {
        this.ensurePageIsValid();
        await expect(this.page).toHaveURL(expectedURL);
    }
    
    //reload page
    async reloadPage(): Promise<void> {
    this.ensurePageIsValid();
    await this.page.reload({ waitUntil: 'load' });
}
}