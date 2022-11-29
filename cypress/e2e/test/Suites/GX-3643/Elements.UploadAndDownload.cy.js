describe('GX-3643 | ✅ToolsQA | Elements | Upload and Download', () => {
    const fileNameUpload = 'upexlogo';
    let fileNameDownload = '';

    beforeEach('User must be in Upload Download page', () => {
        cy.visit('/upload-download');
        cy.url().should('contain', 'download');
    });

    it('3644 | TC1: validate that the “Download“ button works', () => {
        cy.get('[download]').invoke('attr', 'download').then((text) => {
            fileNameDownload = text.toString();
            cy.buttonClickDownload(fileNameDownload);
        });

    })
    it('3644 | TC2: validate that the "Choose File" button works',()=>{
        cy.buttonClickChooseFile(fileNameUpload);
    })
})

Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false
})
// Comando predeterminado para que no aparezcan los Fetch en el log del Test Runner:
const origLog = Cypress.log
Cypress.log = function (opts, ...other) {
    if (opts.displayName === 'xhr' || opts.displayName === 'fetch' && opts.url.startsWith('https://')) {
        return
    }
    return origLog(opts, ...other)
}