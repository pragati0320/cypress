/// <reference types="cypress" />

it('google search' , () => {

        cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/')

        //On search box, type Cau (Finding Locators)
        cy.get('.search-keyword').type('Ca{Enter}')

        cy.wait(2000)

        //verifies the length
        cy.get('.product:visible').should('have.length', 4)

        cy.get('.products').find('.product').should('have.length', 4)

        //selecting the list and finding the specific card
        cy.get('.products').find('.product').eq(2).contains('ADD TO CART')

        //clicking buttons
        cy.contains('ADD TO CART').click()

        cy.get('.products').find('.product').each(($el, index, $list) => {

            const textVeg = $el.find('.product-name').text()

            if (textVeg.includes('Cashews')) {

                cy.wrap($el).find('button').click()
            }
        })
//ashynchronous - hits the steps all at once (they make sure every steps are handled in sequence)
            
          
            }
)