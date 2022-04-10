context('Tenants page', () => {

    it('Send a tenant invite', () => {
        cy.visit('https://partnerforsqa.dev.uniteliving.com/login')
        cy.get('#partnerLoginForm > :nth-child(1)').type('sohel@gain.io')
        cy.get('#partnerLoginForm > :nth-child(2)').type('SQAengineer')
        cy.get('#partnerLoginForm > :nth-child(3) > .btn').click()
        cy.title().should('include', 'Unite Living - Find your best roommates and a home')

        // navigate to tenants page
        cy.get('.nav > :nth-child(6) > a').click()
        // navigation done
        cy.get('.nav > :nth-child(6) > a').click()  //action button
        cy.get('.container > .dropdown > .dropdown-toggle').click()
        cy.get('.container > .dropdown > .dropdown-menu > li > span').click() //invite link drop down

        // invite modal opens: writing information
        cy.get('.modal-body > :nth-child(1) > .form-control').type('manzim.ruet@gmail.com') //email.id
        cy.get('.modal-body > :nth-child(2) > .form-control').type('sqa candidate') //name
        cy.get('.modal-body > :nth-child(3) > .form-control').type('NNI159753') //norwegian NID: unknown, thus error occurs
        cy.get('.iti__selected-flag > .iti__flag').click() //country code block 
        cy.get('#iti-item-bd > .iti__country-name').click() //bd-country code
        cy.get('#tenant-phone-number').type('1234567890') //phone
        cy.get('.icon-google').click() //disable google location for instance
        cy.get('#js-manual-address-input').type('road: 02, Niketon, Dhaka') //add
        cy.get('.double-form-fields > :nth-child(1) > .form-control').type('1111') //
        cy.get('.double-form-fields > :nth-child(2) > .form-control').type('ObvioulyDhaka') //city
        cy.get(':nth-child(8) > .form-control').type('BD') //country typed
        cy.get('.modal-footer > .btn-primary').click() //send button

    })
})