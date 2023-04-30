import Page from './page.js'

class FrontPage extends Page {

    get inputUsername() {
        return $('#loginusername')
    }

    get inputPassword() {
        return $('#loginpassword')
    }

    get buttonLogin() {
        return $(`[onclick='logIn()']`)
    }

    get linkTextLogin() {
        return $(`[data-target='#logInModal']`)
    }

    openFrontPage() {
        return super.open('index.html')
    }

    async login(username, password) {
        await this.linkTextLogin.click()
        await this.isBtnLoginDisplayed()
        await this.inputUsername.setValue(username)
        await this.inputPassword.setValue(password)

        await this.buttonLogin.click()
    }

    async isBtnLoginDisplayed() {
        await (await this.buttonLogin).waitForDisplayed(2000)
        return await (await this.buttonLogin).isDisplayed()
    }

}

export default new FrontPage