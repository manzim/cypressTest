context('Vacant Property', () => {
    it('Vacant properties arranged in most recent order', () => {
        cy.visit('https://partnerforsqa.dev.uniteliving.com/login')
        cy.get('#partnerLoginForm > :nth-child(1)').type('sohel@gain.io')
        cy.get('#partnerLoginForm > :nth-child(2)').type('SQAengineer')
        cy.get('#partnerLoginForm > :nth-child(3) > .btn').click()
        cy.title().should('include', 'Unite Living - Find your best roommates and a home')

        // navigate to no of vacant properties
        cy.get(':nth-child(2) > .col-sm-5 > .table-content-cell > :nth-child(1) > .chart-account-value').click()
        // cy.get('.box-top-header > .dropdown > .dropdown-toggle').click()
        cy.get('.box-top-header > .dropdown > .dropdown-toggle > .icon-down-open').click()
        cy.get('.box-top-header > .dropdown > .dropdown-menu > :nth-child(3) > span').click()
        
    })
})