context('Responsiveness', () => {

    it('Checking the reponsiveness in', () => {
      cy.visit('https://partnerforsqa.dev.uniteliving.com/login')
      cy.viewport('iphone-xr') // Set viewport to 414px x 896px
      //toggle menu open
      cy.get('.navbar-toggle').click()
      //toggle menu close: but not closing automatically
      cy.get('.mobile-menu .mobile-menu-close').click() 
    })
})