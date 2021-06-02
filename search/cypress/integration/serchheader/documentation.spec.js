/// <reference types="Cypress"/>

describe('Select Product an put a number', function(){
    before (()=> {
        cy.visit('/products/pm/documentation.html')
    })
    it.only('Certificates (COA) download', function(){
        cy.get('#form-coas.coa-search-form').within (() =>{
            cy.get('input[name="productNumber"]').type('1410639025')
            cy.get('input[name="lotNumber"]').type('U150128X63')
            cy.root().submit().wait(1000)
            cy.reload()
        });

    it('MSDS docs test', function(){
        cy.get('.coa-search-right-rail').within(() =>{
            cy.get('.msds-product').type('141063')
            cy.get('.msds-country').select('Australia')

        });
    })    

    it.only('Trigger an error', function(){
        cy.get('#form-coas.coa-search-form').within (() =>{
            cy.get('input[name="productNumber"]').type('1410639025')
            cy.get('input[name="lotNumber"]').type('U150128X6')
           cy.root().submit()
        });
    });
        

    })



})