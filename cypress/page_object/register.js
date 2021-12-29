class Register {

    get firstName () {
        return cy.get('#first_name')
    }

    get lastName () {
        return cy.get('#last_name')
    }

    get email () {
        return cy.get('#email')
    }

    get pass () {
        return cy.get('#password')
    }

    get passConfirmation () {
        return cy.get('#password_confirmation')
    }

    get terms () {
        return cy.get('label[class="custom-control-label"]')
    }

    get submitBtn () {
        return cy.get('button[class="btn btn-outline-primary"]')
    }

    register(firstName, lastName, email, pass, passConfirmation) {
        this.firstName.type(firstName)
        this.lastName.type(lastName)
        this.email.type(email)
        this.pass.type(pass)
        this.passConfirmation.type(passConfirmation)
        this.terms.should('have.prop', 'before')
        this.terms.click()
        this.terms.should('have.prop', 'after')
        this.submitBtn.click()    }
}

export const register = new Register();