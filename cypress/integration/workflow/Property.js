context('property page', () => {

    it('go to property page', () => {
        cy.visit('https://partnerforsqa.dev.uniteliving.com/login')
        cy.get('#partnerLoginForm > :nth-child(1)').type('sohel@gain.io')
        cy.get('#partnerLoginForm > :nth-child(2)').type('SQAengineer')
        cy.get('#partnerLoginForm > :nth-child(3) > .btn').click()
        cy.title().should('include', 'Unite Living - Find your best roommates and a home')

        // navigate to properties
        cy.get('.nav > :nth-child(5) > a').click()
        // cy.title().should('include', 'Unite Living - Find your best roommates and a home')
        // navigate to properties done

        // add new property
        cy.get(':nth-child(5) > .dropdown > .dropdown-toggle').click()
        cy.get('#js-add-property-modal').click()
    })
})