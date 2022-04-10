context('Responsiveness', () => {

    it('Checking the reponsiveness in', () => {
      cy.visit('https://partnerforsqa.dev.uniteliving.com/login')
      cy.viewport('ipad-mini') // Set viewport to 768px x 1024px
    })
})