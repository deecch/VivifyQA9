class Header {

    get register () {
        return cy.get('a[href="/register"]')
    }

    get login () {
        return cy.get('a[href="/login"]')
    }

    get addGeradeBook () {
        return cy.get('a[href="/gradebook/create"]')
    }

    get addProfessor () {
        return cy.get('a').contains('Add Professor')
    }

    get userField () {
        return cy.get('a[class="nav-link dropdown-toggle"]').contains('User')
    }

    get titleGeradeBooks () {
        return cy.get('h1')
    }
}

export const header = new Header();
