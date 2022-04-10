context('property page', () => {

    it('go to property page', () => {
        cy.visit('https://partnerforsqa.dev.uniteliving.com/login')
        cy.get('#partnerLoginForm > :nth-child(1)').type('sohel@gain.io')
        cy.get('#partnerLoginForm > :nth-child(2)').type('SQAengineer')
        cy.get('#partnerLoginForm > :nth-child(3) > .btn').click()
        cy.title().should('include', 'Unite Living - Find your best roommates and a home')

        // navigate to properties
        cy.get('.nav > :nth-child(5) > a').click()
        // cy.title().should('include', 'Unite Living - Find your best roommates and a home')
        // navigate to properties done

        // add new property
        cy.get(':nth-child(5) > .dropdown > .dropdown-toggle').click()
        cy.get('#js-add-property-modal').click()

        cy.get('.modal-body > :nth-child(1) > .uninite-option-field > .form-control').click() //account drop-down
        cy.get('[data-value="oPbDbR7CSkRS5KpW4"]').click() //account
        cy.get('.modal-body > :nth-child(2) > :nth-child(3) > label > .btn-text').click() //type 
        cy.get(':nth-child(3) > :nth-child(4) > label > .btn-text').click() //property types
        cy.get('.icon-google').click()
        // cy.get('#js-manual-address-input')
        cy.get('#js-manual-address-input').type('GP Center, Central Road') //location
        cy.get(':nth-child(5) > :nth-child(1) > .form-control').type('5454') //zip-code
        cy.get(':nth-child(5) > :nth-child(2) > .form-control').type('Rangpur City Corporation') //city
        cy.get(':nth-child(6) > .form-control').type('Bangladesh') //country
        cy.get(':nth-child(7) > :nth-child(1) > .form-control').type('111') //gnr
        cy.get(':nth-child(7) > :nth-child(2) > .form-control').type('222') //bnr
        cy.get(':nth-child(7) > :nth-child(3) > .form-control').type('333') //snr
        cy.get('.form-field > .uninite-option-field > .form-control').click() //agent name (sqa-candidate here)
        cy.get('[data-value="xp3msnReWto7MQT6J"] > :nth-child(1) > :nth-child(3)').click() //
        // cy.get('.add-more-property-info > .btn').click()
        cy.get('.modal-footer-right > .btn-primary').click() //add-property        

    })
})