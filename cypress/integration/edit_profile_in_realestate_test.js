/// <reference types="cypress" />

it('edit profile in realestate', function(){

    cy.fixture('user').then((user) => {
        const { email, password } = user;

    cy.visit('https://re-dev.duckdns.org/home')
    cy.contains('Prijavi se').should('be.visible').click()

    const emailInput = cy.get('#mat-input-4')
    emailInput.type(email)

    const passwordInput = cy.get('#mat-input-5')
    passwordInput.type(`${password}{enter}`)

    cy.get('.mat-button-wrapper > :nth-child(2)').click()
    cy.get('.mat-menu-content > :nth-child(4)').click()
    cy.get('#mat-input-10').clear('Marinkovic')
    cy.get('#mat-input-11').clear('Stefan')
    cy.get('#mat-input-12').clear('Rogatica')
    cy.get('#mat-input-13').clear('061987654')
    cy.get('#mat-input-10').type('Marinkovic')
    cy.get('#mat-input-11').type('Stefan')
    cy.get('#mat-input-12').type('Rogatica')
    cy.get('#mat-input-13').type('061987654')
    cy.contains('Uredi nalog').should('be.visible').click()

    })
})