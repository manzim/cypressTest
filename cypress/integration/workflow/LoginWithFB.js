context('Login with FB', () => {

    it('what happens when login with FB is pressed?', () => {
        cy.visit('https://partnerforsqa.dev.uniteliving.com/login')
        cy.get('.dtms-login-wrapper > .btn-social').click()
    })
})