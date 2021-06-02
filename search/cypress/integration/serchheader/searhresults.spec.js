/// <reference types="Cypress"/>   


describe("Open search button", function(){
    before(()=>{
        cy.visit('/en')
        //cy.get('.cookie-modal').contains('Got it').click()
    } )
    it('OpenSearchLy', function(){
        cy.get('.navigation-desktop-search-open').click()
        cy.get('.navigation-desktop-search-bar-input').type('Company')   
        cy.get('.navigation-desktop-search-bar-results-content').should('be.visible')
        cy.get('li.navigation-desktop-search-bar-results-list-item').should('have.length',5)
        cy.get('.navigation-desktop-search-bar-results-show-all-label').contains('Show All Results').click()
        //cy.get('.navigation-desktop-search-close-cta').click()
    })

}) 