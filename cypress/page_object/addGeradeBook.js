class AddGeradeBook {

    get inputField () {
        return cy.get('input').eq(0)
    }

    get selectOption () {
        return cy.get('select')
    }

    get submitBtn () {
        return cy.get('button').contains('Submit')
    }

    addNewGeradeBook(title, selectName) {
        this.inputField.type(title)
        this.selectOption.select(selectName)
        this.submitBtn.click()
    }

}

export const addGeradeBook = new AddGeradeBook();
