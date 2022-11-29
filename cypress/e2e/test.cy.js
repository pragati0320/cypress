/// <reference types="cypress" />

it('google search' , function(){

    cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/')

    //On search box, type Cau (Finding Locators)
    cy.get('.search-keyword').type('Ca{Enter}')

    cy.wait(2000)
    cy.get('.product:visible').should('have.length',4)




})
