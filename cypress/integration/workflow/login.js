context('task site', () => {

    it('go to assignment page', () => {
      cy.visit('https://partnerforsqa.dev.uniteliving.com/login')
      cy.get('#partnerLoginForm > :nth-child(1)').type('sohel@gain.io')
      cy.get('#partnerLoginForm > :nth-child(2)').type('SQAengineer')
      cy.get('#partnerLoginForm > :nth-child(3) > .btn').click()
      cy.title().should('include', 'Unite Living - Find your best roommates and a home')
    //   cy.get(':nth-child(1) > .form-control > span').click()
    //   cy.get('[data-value="oPbDbR7CSkRS5KpW4"] > :nth-child(1) > span').click()
    //   cy.get(':nth-child(1) > .form-control').click('#js-reset-filter')
    //   cy.get('.form-control > :nth-child(1) > span')
    // cy.get('.form-control > :nth-child(1) > span').click('.form-control > :nth-child(1) > span')
    
    // select the sqaEngineer parameter
    cy.get('.form-control > :nth-child(1) > span').click()
    cy.get('[data-value="xp3msnReWto7MQT6J"] > :nth-child(1) > :nth-child(3)').click()
    // select the sqaEngineer parameter done
    
    // navigate to properties
    // cy.get('.nav > :nth-child(5) > a').click()
    // // cy.title().should('include', 'Unite Living - Find your best roommates and a home')
    // // navigate to properties done

    // // add new property
    // cy.get(':nth-child(5) > .dropdown > .dropdown-toggle').click()
    // cy.get('#js-add-property-modal').click()

    // //logout initiated
    // it.only('only run this one', () => {
      
    // })

    //logged out successfully
    })
})