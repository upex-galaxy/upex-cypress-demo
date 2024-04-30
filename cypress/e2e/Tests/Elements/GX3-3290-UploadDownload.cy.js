describe('GX3-3290 | ToolsQA | Elements | Upload and Download',()=>{
	beforeEach('Precondition',() => 
	{
		cy.visit('/upload-download');
		cy.url().should('contain','upload-download');
		
	});
	
	it('TC01: Validate upload files successfully',()=>
	{

	});
});