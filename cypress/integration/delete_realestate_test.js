/// <reference types="cypress" />

// TODO: Ask developers to add ids for the fields
it('delete realestate', function () {

    cy.fixture('user').then((user) => {
        const { email, password } = user;

        cy.visit('https://re-dev.duckdns.org/home')
        cy.contains('Prijavi se').should('be.visible').click()

        const emailInput = cy.get('#mat-input-4')
        emailInput.type(email)

        const passwordInput = cy.get('#mat-input-5')
        passwordInput.type(`${password}{enter}`)

        cy.get('.mat-button-wrapper > :nth-child(2)').click()
        cy.get('.mat-menu-content > :nth-child(2)').click()
        cy.contains('Obriši').should('be.visible').click()
        cy.contains('button', 'Potvrdi').should('be.visible').click()
    })
})