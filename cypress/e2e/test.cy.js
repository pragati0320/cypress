/// <reference types="cypress" />

it('google search' , function(){

    cy.visit('https://google.com')

    cy.get('.gLFyf').type('Testing tuorials{Enter}')





})
