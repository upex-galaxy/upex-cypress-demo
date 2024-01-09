import 'cypress';

describe('ToolsQA | Elements | Radio Buttons', () => {
beforeEach(() => {
});
  it('GX3-1099 | TS:ToolsQA | Elements | Radio Buttons', () => {
    // PRC-Visitar la URL de la página con los Radio Buttons
    cy.visit('https://demoqa.com/radio-button');

    //TC1| Verificar las etiquetas de los Radio Buttons
    cy.get('#yesRadio').should('have.text', 'Yes');
    cy.get('#impressiveRadio').should('have.text', 'Impressive');
    cy.get('#noRadio').should('have.text', 'No');

    // TC2|Validar el Radio Button 'Yes' 
    cy.get('#yesRadio').click().then(() => {
      cy.get('#output').should('have.text', 'You have selected Yes');
    });

    // |TC3|Validar el Radio Button 'Impressive' 
    cy.get('#impressiveRadio').click().then(() => {
      cy.get('#output').should('have.text', 'You have selected Impressive');
    });

    // |TC4|Validar seleccionar el Radio Button 'No' 
    cy.get('#noRadio').should('be.disabled');

    // |TC5|Validar el mensaje que se dispara al seleccionar el Radio Button 'No'
    cy.get('#noRadio').click().then(() => {
      cy.get('#output').should('not.have.text', 'You have selected No');
    });
  });
});
