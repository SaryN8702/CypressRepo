/// <reference types="Cypress"/>

describe('Clear Filters', function(){
    this.beforeEach(() =>{
        cy.visit('/search.html')
    })
    it('open date option', function(){
        cy.get('.search-select-header-title').contains('Date').click({force: true})
        cy.get('.search-select-content').should('be.visible')        
        cy.get('.search-select-list-item-label').contains('Last year').click({force: true}).wait(3000)
        cy.get('.se-filter-controls').contains('Reset All').click({force: true})
      
    });
   
})