import { login } from '../page_object/login';
import { header } from '../page_object/header';

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
        cy.wait('@login').then((interception) => { 
            console.log(interception.response)
            expect(interception.response.statusMessage).to.eq('OK')
            expect(interception.response.statusCode).to.eq(200)    
        })
        cy.url().should('not.contain', '/login')
    });
});