/// <reference types="Cypress"/>

describe('ProductSearch Functionality', function(){
    this.beforeEach (()=> {
        cy.visit('en/products/pm/listing.html')
});

    it('Type a search & select a filter', function(){
        cy.get('.se-bar-layout-right').type('Titanium{enter}').wait(3000)
        cy.get('.se-sidebar').contains('Expertise').click({force: true})
        cy.get('.search-select-list').contains('Cosmetics').click().wait(3000)
    });
    it('Test pagination', function(){
      cy.get('.se-pagination').within(()=>{
          cy.get('.se-pagination-button').click({force: true})
      });
    })

})