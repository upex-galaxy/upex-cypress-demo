/// <reference types="cypress" />

describe('ToolsQA | Elements | Buttons', () =>
{    
    const id = '156';
    
    beforeEach('Precondición: Debe estar situado en la página web https://demoqa.com/buttons', () =>
    {
        cy.visit('https://demoqa.com/buttons');
        cy.url().should("contain", "buttons");
        cy.clearCookies();
        cy.clearLocalStorage();
    });
    
    it(`US-GX-${id} | TC 01 - Validar mostrar mensaje "You have done a double click" cuando se hace doble click en el botón "Double Click Me"`, () =>
    {
        cy.buttonDoubleClickMe();
    });

    it(`US-GX-${id} | TC 02 - Validar mostrar mensaje "You have done a right click" cuando se hace click derecho en el botón "Right Click Me"`, () =>
    {
        cy.buttonRightClickMe();
    });

    it(`US-GX-${id} | TC 03 - Validar mostrar mensaje "You have done a dynamic click" cuando se hace click en el botón "Click Me"`, () =>
    {
        cy.buttonClickMe();
    });
});

//________________________________________________________________________
// Comando predeterminado para que no ocurran errores de excepciones:
Cypress.on('uncaught:exception', (err, runnable) =>
{
    // Returning false here prevents Cypress from.
    // Failing the test.
    return false;
});

// Comando predeterminado para que no aparezcan los Fetch en el log del Test Runner:
const origLog = Cypress.log;

Cypress.log = function (opts, ...other)
{
    if (opts.displayName === 'xhr' || opts.displayName === 'fetch' && opts.url.startsWith('https://'))
    {
        return;
    }
	
    return origLog(opts, ...other);
};