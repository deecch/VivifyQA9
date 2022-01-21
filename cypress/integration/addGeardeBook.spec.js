import { name } from "../../config";
import { header } from "../page_object/header";
import { login } from '../page_object/login';
import { addGeradeBook } from '../page_object/addGeradeBook';
const faker = require('faker');
import { headersTitle } from '../fixtures/headers.json';

describe('Add new gerade book', () => {

    let authToken = window.localStorage.getItem('token')
    let fullName = ''

    let userData = {
        randomTitle: faker.name.title()
               
    }

    beforeEach('login to application', () => {
        cy.visit('/')
        header.login.click()
        cy.intercept({
            method: 'POST',
            url: 'https://gradebook-api.vivifyideas.com/api/login'
        }).as('login')
        login.login(Cypress.env('validUserMail'), Cypress.env('validUserPass'));
       
    })

    it('get name and last name of professor', () => {
        cy.waitLogin('@login')
        header.addGeradeBook.click()
        cy.request({
                    method: 'GET',
                    url: 'https://gradebook-api.vivifyideas.com/api/professors',
                    headers: {
                        authorization: 'Bearer' +  authToken
                    }      
                    }).then((response) => {
                        console.log(response)
                        let name1 = response.body.find(n => n.first_name === name)
                        fullName = name + ' ' + name1.last_name
                        console.log(fullName)
                        expect(response.statusText).to.eq("OK")
                        expect(response.status).to.eq(200)
        })
    });

    it('create new gerade book with new professor', () => {
        cy.waitLogin('@login')
        header.addGeradeBook.click()
        addGeradeBook.addNewGeradeBook(userData.randomTitle, fullName)
        header.titleGeradeBooks.should('exist')
        header.titleGeradeBooks.should('contain', headersTitle.geradeBookPage)
    });

});
