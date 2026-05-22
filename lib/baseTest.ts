import {test as baseTest} from '@playwright/test';
import {LoginPage} from '../pagefactory/pageRepo/LoginPage';
const test = baseTest.extend
<{
    loginPage : LoginPage
}>

({
    loginPage: async({page,context},use) =>{
        await use(new LoginPage(page,context));
    }
})

export default test;