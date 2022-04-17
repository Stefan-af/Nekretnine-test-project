/// <reference types="cypress"/>

// TODO: Ask developers to add ids for the fields 
it('creates new real estate', function () {

    cy.fixture('user').then((user) => {
        const { email, password } = user;

        cy.visit('https://re-dev.duckdns.org/home')
        cy.contains('Prijavi se').should('be.visible').click()

        const emailInput = cy.get('#mat-input-4')
        emailInput.type(email)

        const passwordInput = cy.get('#mat-input-5')
        passwordInput.type(`${password}{enter}`)

        const now = Date.now().toString();
        const realEstateName = 'smjestaj' + now;

        cy.get('.mat-button-wrapper > :nth-child(2)').click()
        cy.get('.mat-menu-content > :nth-child(1)').click()
        cy.get('#mat-input-10').type(realEstateName)
        cy.get('#mat-input-11').type('izdajem smjestaj povoljno')
        cy.get('#mat-input-12').type('52')
        cy.get('#mat-select-13').click()
        cy.get('#mat-option-335 > .mat-option-text').click()
        cy.get('#mat-select-12').click()
        cy.get('#mat-option-331').click()
        cy.get('body').click()
        cy.contains('Nastavi').should('be.visible').click()
        cy.get('#mat-input-14').type('Milana Simovica 3')
        cy.get('#mat-input-15').type('Pale (RS)')
        cy.contains('Pale (RS)').click()
        cy.contains('Nastavi').click({ force: true })
        cy.contains('Nastavi').click({ force: true })
        cy.get('#mat-input-16').type('2')
        cy.get('#mat-input-17').type('1')
        cy.get('#mat-input-18').type('4')
        cy.get('#mat-select-14').click()
        cy.get('#mat-option-483').click()
        cy.get('#mat-select-15').click()
        cy.get('#mat-option-488').click()
        cy.get('#mat-checkbox-5').click()
        cy.get('#mat-checkbox-9').click()
        cy.get('#mat-checkbox-11').click()
        cy.get('#mat-checkbox-12').click()
        cy.contains('Nastavi').click({ force: true })
        cy.contains('Objavi nekretninu').should('be.visible').click()
        cy.get('.re-item-card').find('mat-card-title').should('contain', realEstateName);

    })
})