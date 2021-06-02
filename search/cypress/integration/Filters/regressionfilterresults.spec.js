/// <reference types="Cypress"/>

describe('Search and search results', function(){
    before(()=>{
        cy.visit('/search.html')
    } )

    it('type results and ',function(){ 
        cy.get('.se-bar-input--desktop').type('endocrinology{enter}').wait(8000)
        cy.get('.se-list-summary-label').should('be.visible')
        cy.get('.se-pagination').should('be.visible')
        //cy.get('.se-pagination-list-item-label').contains('nth-child(2)').click()
    });    
    
    it('Click on one result', function(){
        cy.get('.se-list-item-title').contains('Endocrinology').click()
        cy.wait(8000)
    });
    it('Return to SearchPage',function(){
        cy.go('back').wait(5000)
    });
    it.only('Verify List filters is present', function(){
        cy.get('.se-filter-inner').should('be.visible')
        cy.get('.search-select-header').within(() => {
            cy.get('.search-select-header-title').contains('Business').click().wait(3000)
            cy.get('.search-select-header-title').contains('Type').click().wait(5000)
            cy.get('.search-select-header-title').contains('Date').click().wait(3000) 
        });
    })
    //it('Click on Pagination Buttons', function(){
      //  cy.get('.se-pagination').children().contains('Next').click()
        //cy.get('.se-pagination').within(() => {
          //  cy.get('.se-pagination-layout-center').contains('.se-pagination-list').click()
        //} )

        
   // })
})
