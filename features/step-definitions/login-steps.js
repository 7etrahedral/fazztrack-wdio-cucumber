import { Given, When, Then } from '@wdio/cucumber-framework';

import frontPage from '../pageobjects/front-page.js'
import homePage from '../pageobjects/home-page.js';

Given(/^I am on the front page$/, async() => {
    await frontPage.openFrontPage()
});

When(/^I try to login correctly$/, async() => {
    await frontPage.login('wibowo.bullseye', 'bullseye')
});

Then(/^I am successfully logged in$/, async() => {
    await homePage.verifyLoginSuccess('Welcome wibowo.bullseye')
})