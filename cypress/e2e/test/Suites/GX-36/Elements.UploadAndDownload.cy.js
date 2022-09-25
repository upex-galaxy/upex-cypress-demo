describe('ToolsQA | Elements | Upload And Download', () =>
{    
    const url = 'https://demoqa.com/upload-download';
    const id = '36';
    let fileNameDownload = '';
    const fileNameUpload = 'upexlogo';
    const contain = 'upload';

    beforeEach('Precondición: El usuario debe estar situado en la página web https://demoqa.com/upload-download', () =>
    {
        cy.getUrl(url, contain);
    });

    it(`US-GX-${id} | TC 01 - Validar poder descargar un archivo cuando cuando se hace click en el botón "Download"`, () =>
    {
        cy.get('[download]').invoke('attr', 'download').then((text) =>
        {
            fileNameDownload = text.toString();
            cy.buttonClickDownload(fileNameDownload); 
        });       
    });

    it(`US-GX-${id} | TC 02 - Validar poder cargar un archivo cuando se hace click en el botón "Choose File"`, () =>
    {
        cy.buttonClickChooseFile(fileNameUpload);        
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