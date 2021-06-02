
/// <reference types="Cypress"/>

describe('Play with filters',function(){
    before(()=>{
        cy.visit('/en/search.html')
    })
    it('Open Filters', function(){
        cy.get('.se-filter-inner').should('be.visible')
        cy.get('.search-select-header').within(() => {
            cy.get('.search-select-header-title').contains('Business').click()
            cy.get('.search-select-header-title').contains('Type').click()
            cy.get('.search-select-header-title').contains('Date').click({force: true})
            cy.get('.search-select-header-title').contains('Category').click({force: true})
        });    
    })
    it('Select any Business and load results', function(){
        cy.get('.search-select-content-inner').should('be.visible')
        cy.get('.search-select-list').within(()=> {
            cy.get('.search-select-list-item-label').contains('Healthcare').click().wait(5000)
            cy.go('back').wait(3000)
        });
    })
    it ('Select any Type filter and load reults', function(){
        cy.get('.search-select-content-inner').within(()=> {
            cy.get('.search-select-list').find(':nth-child(2)').contains('Videos').click({force: true}).wait(3000)
        })    
    })

})
