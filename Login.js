it ('Login', () => {
    cy.visit('https://react-redux.realworld.io/#/login');
    
    cy.get(':nth-child(1) > .form-control').type('mateauto@gmail.com');

    cy.get(':nth-child(2) > .form-control').type('mateauto{enter}');

    cy.get('.navbar').contains('mateauto').should('exist');
})