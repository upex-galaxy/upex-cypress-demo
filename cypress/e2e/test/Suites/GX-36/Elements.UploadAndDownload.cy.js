describe('ToolsQA | Elements | Upload And Download', () =>
{    
    const id = '36';
    
    beforeEach('Precondición: El usuario debe estar situado en la página web https://demoqa.com/upload-download', () =>
    {
        cy.visit('https://demoqa.com/upload-download');
        cy.url().should("contain", "upload");
        cy.clearCookies();
        cy.clearLocalStorage();
    });

    it(`US-GX-${id} | TC 01 - Validar poder descargar un archivo cuando cuando se hace click en el botón "Download"`, () =>
    {
        //cy.buttonClickDownload();
        cy.fixture("DOM/toolsqa/Elements/UploadAndDownload.Page").then((the) =>
        {            
            cy.get(the.downloadButton).click();
            cy.get(the.downloadButton).should('be.visible');
        });
    });

    it(`US-GX-${id} | TC 02 - Validar poder cargar un archivo cuando se hace click en el botón "Choose File"`, () =>
    {
        //cy.buttonClickChooseFile();
        cy.fixture("DOM/toolsqa/Elements/UploadAndDownload.Page").then((the) =>
        {            
            const filepath = 'images/example.png';
            cy.get('input[type="file"]').attachFile(filepath);
            // Aquí usamos la sintaxis Método(directorioDelArchivo)
            cy.get('#file-submit').click();
            cy.get('#uploaded-files').contains('upex.png');	
                cy.get(the.downloadButton).click();
            cy.get(the.downloadButton).should('be.visible');
        });
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