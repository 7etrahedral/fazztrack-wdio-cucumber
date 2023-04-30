import { Given, When, Then } from '@wdio/cucumber-framework';

import frontPage from '../pageobjects/front-page.js'
import homePage from '../pageobjects/home-page.js';

Given(/^I am on the front page$/, async() => {
    await frontPage.openFrontPage()
});

When(/^I try to login correctly$/, async() => {
    await frontPage.login('wibowo.bullseye', 'bullseye')
});

When(/^I try to login with username \"([^\"]*)\" and password \"([^\"]*)\"$/, async(username, password) => {
    await frontPage.login(username, password)
});

Then(/^I am successfully logged in$/, async() => {
    await homePage.verifyLoginSuccess('Welcome wibowo.bullseye')
})

Then(/^I am successfully logged in with username \"([^\"]*)\"$/, async(username) => {
    await homePage.verifyLoginSuccess(`Welcome ${username}`)
})