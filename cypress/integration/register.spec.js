import { header } from '../page_object/header';
import { register } from '../page_object/register';
const faker = require('faker');

describe('register new user', () => {

    let userData = {
        randomName: faker.name.findName(),
        randomLastName : faker.name.lastName(),
        randomEmail: faker.internet.email(),
        randomPass: faker.internet.password(8)
    }

    before('redirect to register page', () => {
        cy.visit('/')
        header.register.click()
        cy.url().should('contain', '/register')
    })

    it('register with valid credentials', () => {
        cy.intercept({
            method: 'POST',
            url: 'https://gradebook-api.vivifyideas.com/api/register'
        }).as('register')
        register.register(userData.randomName, userData.randomLastName, userData.randomEmail, userData.randomPass, userData.randomPass);
        cy.wait('@register').then((interception) => { 
            console.log(interception.response)
            expect(interception.response.body.token).to.not.eq('undifined')
            expect(interception.response.statusCode).to.eq(201)    
        })
        header.register.should('not.contain')
    });
});