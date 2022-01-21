class AddProfessor {

    get header () {
        return cy.get('h1[class="hedaing"]')
    }

    get nameField () {
        return cy.get('#input-default')
    }

    get lastName () {
        return cy.get('#input-default1')
    }

    get imageBtn () {
        return cy.get('button[class="btn btn-image btn-primary"]')
    }

    get imageField () {
        return cy.get('div[class="bv-no-focus-ring col"]').children().eq(2)
    }

    get submitBtn () {
        return cy.get('button').contains('Submit')
    }

    get cancelBtn () {
        return cy.get('a[class="btn btn-cancel router-link-active btn-danger"]')
    }

    addNewProfessor (name, lastName, image) {
        this.nameField.type(name)
        this.lastName.type(lastName)
        this.imageBtn.click()
        this.imageField.type(image)
        this.submitBtn.click()
    }
    
 
}

export const addProfessor = new AddProfessor();
