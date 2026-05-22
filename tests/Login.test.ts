import { expect } from '@playwright/test';
import test from '../lib/baseTest';
import * as LoginData from '../testData/LoginData.json';
import { environmentConfig } from '../environmentConfig';
import { LoginPageObjects } from '../pagefactory/objectRepo/LoginPageObjects';

test.describe("@suite: Login Test Cases", () => {

    test("@suite Test: Validate Login with Valid Credentials", async ({ loginPage }) => {

        //navigate to Test URL & validate URL
        await loginPage.navigateToLoginPage(`${environmentConfig.baseURLs.testURL}`);
        await loginPage.validatePageURL(`${environmentConfig.baseURLs.testURL}`);
        //login with valid creds
        await loginPage.LoginToApplication(
            LoginData.LoginData.UserName.ValidUserName,
            LoginData.LoginData.Password.ValidPasword
        );
        //Validate Successful Login | Message & URL
        await loginPage.validatePageURL(`${environmentConfig.baseURLs.dashboardURL}`);
        await loginPage.validateMessageIsDisplayed(LoginPageObjects.successMessage_LoggedInSuccessfully)
        await loginPage.validateMessageIsDisplayed(LoginPageObjects.congratulationsText);
        //Logout Successfuly & Validate URL
        await loginPage.logoutOfApplication();
        await loginPage.validatePageURL(`${environmentConfig.baseURLs.testURL}`);

    });

    test("@suite Test: Validate Refesh & Relogin after Logout", async ({ loginPage }) => {

        //navigate to Test URL & validate URL
        await loginPage.navigateToLoginPage(`${environmentConfig.baseURLs.testURL}`);
        await loginPage.validatePageURL(`${environmentConfig.baseURLs.testURL}`);
        //login with valid creds
        await loginPage.LoginToApplication(
            LoginData.LoginData.UserName.ValidUserName,
            LoginData.LoginData.Password.ValidPasword
        );
        //Validate Successful Login | Message & URL
        await loginPage.validatePageURL(`${environmentConfig.baseURLs.dashboardURL}`);
        await loginPage.validateMessageIsDisplayed(LoginPageObjects.successMessage_LoggedInSuccessfully)
        await loginPage.validateMessageIsDisplayed(LoginPageObjects.congratulationsText);
        //Refresh/Reload page | Validate user still remains logged in
        await loginPage.reloadPage();
        await loginPage.validatePageURL(`${environmentConfig.baseURLs.dashboardURL}`);
        //Logout Successfuly & Validate URL
        await loginPage.logoutOfApplication();
        await loginPage.validatePageURL(`${environmentConfig.baseURLs.testURL}`);
        //Validate Successful Login | Message & URL
        await loginPage.navigateToLoginPage(`${environmentConfig.baseURLs.testURL}`);
        await loginPage.validatePageURL(`${environmentConfig.baseURLs.testURL}`);
        //login with valid creds
        await loginPage.LoginToApplication(
            LoginData.LoginData.UserName.ValidUserName,
            LoginData.LoginData.Password.ValidPasword
        );
        //validate messages and URL
        await loginPage.validatePageURL(`${environmentConfig.baseURLs.dashboardURL}`);
        await loginPage.validateMessageIsDisplayed(LoginPageObjects.successMessage_LoggedInSuccessfully)
        await loginPage.validateMessageIsDisplayed(LoginPageObjects.congratulationsText);

    });

    test("@suite Test: Validate Login with Invalid Credentials", async ({ loginPage }) => {

        //navigate to Test URL & validate URL
        await loginPage.navigateToLoginPage(`${environmentConfig.baseURLs.testURL}`);
        await loginPage.validatePageURL(`${environmentConfig.baseURLs.testURL}`);
        //login with valid creds
        await loginPage.LoginToApplication(
            LoginData.LoginData.UserName.InvalidUserName,
            LoginData.LoginData.Password.InvalidPassword
        );
        //Validate Unsuccessfull Login | Message & URL
        await loginPage.validatePageURL(`${environmentConfig.baseURLs.testURL}`);
        await loginPage.validateMessageIsDisplayed(LoginPageObjects.invalidCredsErrorMessage);

    });

    test("@suite Test: Validate Login with Mixed Case UserName & Valid Password", async ({ loginPage }) => {

        //navigate to Test URL & validate URL
        await loginPage.navigateToLoginPage(`${environmentConfig.baseURLs.testURL}`);
        await loginPage.validatePageURL(`${environmentConfig.baseURLs.testURL}`);
        //login with valid creds
        await loginPage.LoginToApplication(
            LoginData.LoginData.UserName.MixedCaseUserName,
            LoginData.LoginData.Password.ValidPasword
        );
        //Validate Unsuccessfull Login | Message & URL
        await loginPage.validatePageURL(`${environmentConfig.baseURLs.testURL}`);
        await loginPage.validateMessageIsDisplayed(LoginPageObjects.invalidCredsErrorMessage);

    });

});