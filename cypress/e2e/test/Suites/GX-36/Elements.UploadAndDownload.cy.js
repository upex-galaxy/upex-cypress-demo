describe('ToolsQA | Elements | Upload And Download', () =>
{    
    const id = '36';
    let fileName = '';
    const file = 'upexlogo';
    
    beforeEach('Precondición: El usuario debe estar situado en la página web https://demoqa.com/upload-download', () =>
    {
        cy.visit('https://demoqa.com/upload-download');
        cy.url().should("contain", "upload");
        cy.clearCookies();
        cy.clearLocalStorage();
    });

    it(`US-GX-${id} | TC 01 - Validar poder descargar un archivo cuando cuando se hace click en el botón "Download"`, () =>
    {
        cy.get('[download]').invoke('attr', 'download').then((text) =>
        {
            fileName = text.toString();
            cy.buttonClickDownload(fileName); 
        });       
    });

    it(`US-GX-${id} | TC 02 - Validar poder cargar un archivo cuando se hace click en el botón "Choose File"`, () =>
    {
        cy.buttonClickChooseFile(file);        
    });
});

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