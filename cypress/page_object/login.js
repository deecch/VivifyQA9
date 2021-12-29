class Login {

    get userName () {
        return cy.get('#email')
    }

    get passField () {
        return cy.get('#userPassword')
    }

    get loginBtn () {
        return cy.get('button[class="btn btn-outline-primary"]')
    }

    login(userName, pass) {
        this.userName.type(userName)
        this.passField.type(pass)
        this.loginBtn.click()
    }
}

export const login = new Login();