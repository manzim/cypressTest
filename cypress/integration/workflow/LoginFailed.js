//either Login email & pass or both will be wrong cases

context('Login Page', () => {

    it('Login Should Fail with error message', () => {
        cy.visit('https://partnerforsqa.dev.uniteliving.com/login')
        cy.get('#partnerLoginForm > :nth-child(1)').type('sohel@gainio') //must show error email notification
        cy.get('#partnerLoginForm > :nth-child(2)').type('SQAengineer')
        cy.get('#partnerLoginForm > :nth-child(3) > .btn').click()
        cy.title().should('include', 'Unite Living - Find your best roommates and a home')
    })
})