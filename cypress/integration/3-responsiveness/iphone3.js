context('Responsiveness', () => {

    it('Checking the reponsiveness in iPhone-3', () => {
      cy.visit('https://partnerforsqa.dev.uniteliving.com/login')
      cy.viewport('iphone-3') // Set viewport to 768px x 1024px
      //toggle menu open
      cy.get('.navbar-toggle').click()
      //toggle menu close: but not closing automatically
      cy.get('.mobile-menu .mobile-menu-close').click() 
    })
})