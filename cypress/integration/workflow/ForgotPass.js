//forgot password 
context('Login Page', () => {
    it('Login Should Fail with error message for password', () => {
        cy.visit('https://partnerforsqa.dev.uniteliving.com/login')
        cy.get('#partnerLoginForm > .text-center > a').click()
        // reset email typed and send
        cy.get('.dtms-login-wrapper > :nth-child(2) > form > .clearfix > .form-control').type('sohel@gain.io')
        
        //re-login
        cy.get('.re-login-link > a').click()
    })
})