context('Language', () => {

    it('Switching between language', () => {
        cy.visit('https://partnerforsqa.dev.uniteliving.com/login')
        cy.get('.select-lang-flag').click()
        cy.get(':nth-child(3) > span').click()
    })
})