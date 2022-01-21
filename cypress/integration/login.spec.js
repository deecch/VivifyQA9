import { login } from '../page_object/login';
import { header } from '../page_object/header';
import { headersTitle } from '../fixtures/headers.json';

describe('login with valid credentials', () => {

    before('redirect to login page', () => {
        cy.visit('/')
        header.login.click()
        cy.url().should('contain', '/login')
    })

    it('login to application', () => {
        cy.intercept({
            method: 'POST',
            url: 'https://gradebook-api.vivifyideas.com/api/login'
        }).as('login')
        login.login(Cypress.env('validUserMail'), Cypress.env('validUserPass'));
        cy.waitLogin('@login')
        cy.url().should('not.contain', '/login')
        header.titleGeradeBooks.should('contain', headersTitle.geradeBookPage)
        login.titleLogin.should('not.exist')
        header.userField.should('exist')
    });

});
