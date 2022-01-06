const faker = require('faker');
import { name } from "../../config";
import { login } from '../page_object/login';
import { addProfessor } from '../page_object/addProfessor';
import { headersTitle } from '../fixtures/headers.json';
import { header } from '../page_object/header';

describe('Add new professor', () => {

    let userData = {
        randomLastName: faker.name.lastName(),
        randomImg: faker.image.imageUrl() + '.jpg'
        
    }

    before('login to application', () => {
        cy.visit('/')
        header.login.click()
        cy.intercept({
            method: 'POST',
            url: 'https://gradebook-api.vivifyideas.com/api/login'
        }).as('login')
        login.login(Cypress.env('validUserMail'), Cypress.env('validUserPass'));
        

    })

    it('add new professor with valid data', () => {
        
        cy.waitLogin('@login')
        header.addProfessor.click()
        
        cy.intercept({
            method: 'POST',
            url: 'https://gradebook-api.vivifyideas.com/api/professors/create'
        }).as('professor')
        addProfessor.addNewProfessor(name, userData.randomLastName, userData.randomImg)
        cy.wait('@professor').then((interception) => { 
            console.log(interception.response)    
        })
        header.titleGeradeBooks.should('contain', headersTitle.allProfessors)
        header.userField.should('exist')
        header.titleGeradeBooks.should('exist')

    });

});

