context('Responsiveness', () => {

    it('Checking the reponsiveness in Mackbook 11', () => {
      cy.visit('https://partnerforsqa.dev.uniteliving.com/login')
      cy.viewport('macbook-11') // Set viewport to 1366px x 768px: result okay
    })
})