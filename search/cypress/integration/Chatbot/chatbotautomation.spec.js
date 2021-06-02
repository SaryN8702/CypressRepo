/// <reference types="Cypress"/>

const { should } = require("chai");


describe('ChatBot tests', function(){
    before(() =>{
        //cy.setCookie('cookie-careers-during-covid-19, cookie-careers-during-covid-19')
        //cy.reload()
        cy.visit('/careers/students.html')
        
    })
    
    it('Go to page and chatbot show up', function() {
        cy.get('.disclaimer-modal-content').should('be.visible')
        cy.get('.disclaimer-modal-content').contains('OK').click({force: true})
        cy.get('.webchat__teaser').should('be.visible')
        
    });

    it ('chatbot should open and display dialogue', function(){
        cy.get('.webchat-toggle-button').click()
        cy.get('.webchat-quick-reply-template-root').should('be.visible').wait(500)
        
    });

    it('Find a Job Trigger', function(){
        cy.get('.webchat-quick-reply-template-replies-container').contains('Find a job').click({force: true})
        cy.get('.cognigy-webchat-1e4x85j').should('be.visible').wait(200)
        cy.get('.webchat-input-menu-form').type('germany{enter}').wait(500)
    });

    it('find kind of job', function(){
        cy.get('.webchat-chat-history').contains('And what is the functional area that you are looking for? By “functional area” we mean for example “Sales” or “R&D".').should('be.visible')
        cy.get('.webchat-input-menu-form').type('finance{enter}').wait(500)
        cy.get('.webchat-chat-history').contains('No').click({force: true})
       
    });

    it('Experience time and new page discovered a job', function(){
        cy.get('.webchat-chat-history').contains('Professional (4-9 years)').click({force: true}).wait(300)
        cy.get('.webchat-chat-history').should('be.visible')
        cy.get('.webchat-chat-history').contains('Yes').click({force: true})
        cy.get('.cognigy-webchat-1wr7wvi').should('be.visible')
        cy.get('.webchat-carousel-template-root').contains('Lead Expert - Data Provisioning (all genders)').click({force: true})

    })

})