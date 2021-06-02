/// <reference types="Cypress"/>

describe('Select Product an put a number', function(){
    this.beforeEach (()=> {
        cy.visit('en/products/pm/141063.html')
})
    //it('Select a product (COA)', function(){
        //cy.get('.coa-product').select('1410631000')
        //cy.get('.coa-lot').type('U150128X63')
   // });
    it('Trigger an error (COA)', function(){
        cy.get('.coa-product').select('1410631000')
        cy.get('.coa-lot').type('U150128X6')
        cy.get('.coa-search-cta-text').contains('Download').click()
        cy.get('.coa-search-error-msg').should('be.visible')
    });
    it('Select Safy Data (MSDS)', function(){
        cy.get('.msds-country').select('Belgie')
        cy.get('.coa-search-cta-text').contains('Download').click()
    });

    })

