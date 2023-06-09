import Page from './page.js'

class HomePage extends Page {

    get accountName() {
        return $('#nameofuser')
    }

    get buttonLogout() {
        return $(`[onclick='logOut()']`)
    }

    async verifyLoginSuccess(user) {
        return await expect(await this.accountName).toHaveText(user)
    }

}

export default new HomePage