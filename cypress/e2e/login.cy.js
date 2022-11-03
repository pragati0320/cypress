/// <reference types="Cypress" />

context('Startup', () => {
    beforeEach(() => {
      cy.visit('https://accounts.google.com/v3/signin/identifier?dsh=S-569940358%3A1667383333075301&continue=https%3A%2F%2Faccounts.google.com%2F&followup=https%3A%2F%2Faccounts.google.com%2F&passive=1209600&flowName=GlifWebSignIn&flowEntry=ServiceLogin&ifkv=ARgdvAv8zHmpl6TiX3LWgeQV_34GtqqAH-N5KJn2ZzIfF8QtHW_lTojYOsGOLxercqMtK4ovisF-');
    });
  
    it('should fill login form and redirect to homepage', () => {
     
      // Fill the email
      cy.get('.CxRgyd')
        .type('pragati.sapkota@sevadev.com')
        .should('have.value', '');
  

        //click Next

        cy.get('#identifierNext > .VfPpkd-dgl2Hf-ppHlrf-sM5MNb > .VfPpkd-LgbsSe > .VfPpkd-vQzf8d').click()
      // Fill the password
      cy.get('#body')
        .type('SevaDevelopment@2020')
        .should('have.value', '');
  
      // Locate and submit the form
      cy.get('#passwordNext > .VfPpkd-dgl2Hf-ppHlrf-sM5MNb > .VfPpkd-LgbsSe > .VfPpkd-vQzf8d').submit();
      
      // Verify the app redirected you to the homepage
      cy.location('pathname', { timeout: 100000 }).should('eq', '/');
      
      // Verify the page title is "Home"
      cy.title().should('eq', 'Home');
     
    });
    
  });