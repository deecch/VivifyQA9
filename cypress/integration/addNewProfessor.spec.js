const faker = require('faker');
import { name } from "../../config";
import { login } from '../page_object/login';

describe('Add new professor', () => {

    let authToken = window.localStorage.getItem('token')

    let userData = {
        randomLastName : faker.name.lastName(),
        randomImg: faker.image.imageUrl() + '.jpg'
        
    }

    before('login to application', () => {
        cy.loginViaBackend()
       
    })

    it('add new professor with valid data', () => {
        cy.request({
                method: 'POST',
                url: 'https://gradebook-api.vivifyideas.com/api/professors/create',
                headers: {
                    authorization: 'Bearer' +  authToken
                },
                body: {
                    "first_name": name,
                    "last_name": userData.lastName,
                    "gradebook_id":684,
                    "imageUrl":[userData.randomImg]
                }
        });
    });
});
