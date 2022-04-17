/// <reference types="cypress" />

it('Adding favorite Realestate', function () {

    cy.fixture('user').then((user) => {
        const { email, password } = user;

        cy.visit("https://re-dev.duckdns.org/home")
        cy.contains('Prijavi se').should('be.visible').click()


        const emailInput = cy.get('#mat-input-4');

        emailInput.type(email);

        const passwordInput = cy.get('#mat-input-5');
        passwordInput.type(`${password}{enter}`);

        cy.wait(5000)

        

        //cy.get('.re-item-card').find('mat-icon').should('contain', 'favorite_border').parents('mat-card')


            // cy.get('.re-item-card', {timeout: 10000}).wait(5000).find('mat-icon').contains('.mat-icon', 'favorite_border').parents('mat-card')
        // });


        //cy.get('.re-item-card').filter(':contains("favorite_border")').debug()
        //cy.title().should('include', 'Stan na dan')
        //cy.get('mat-card-title').invoke('text')
        //cy.get('mat-card-title').should('have.text','Stan na dan').click()
        // Adding to favorites
        //cy.contains('favorite').click({force:true})
        //cy.get('.re-logo > .mat-button-wrapper').click()
        // Waiting toast 
        //cy.wait(6000)
        //cy.get('.mat-button-wrapper > :nth-child(2)').click()
        //cy.get('.mat-menu-content > :nth-child(3)').click()
        //cy.get('.re-logo > .mat-button-wrapper').click()
        //cy.contains('Detalji').should('be.visible').click()
        //cy.get('.mat-focus-indicator.social-buttons').click()

    })

})