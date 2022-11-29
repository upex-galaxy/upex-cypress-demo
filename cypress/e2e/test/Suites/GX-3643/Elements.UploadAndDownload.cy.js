describe('GX-3643 | ✅ToolsQA | Elements | Upload and Download',()=>
{

    beforeEach('User must be in Upload Download page',()=>
    {
        cy.visit('https://demoqa.com/upload-download');
        cy.url().should('contain','download');
    });
    
    it('3644 | TC1: validate that the “Download“ button works'),()=>
    {
        cy.get('[id=downloadButton]').click();
    }
    
})