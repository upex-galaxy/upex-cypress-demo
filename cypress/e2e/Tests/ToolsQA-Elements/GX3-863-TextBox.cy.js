describe('GX3-863 | ToolsQA | Elements | Text Box: Fill form and Submit', () => {
	beforeEach('PRC: El usuario debe estar situado en la página en la sección text-box', () => {
		cy.visit('https://demoqa.com/text-box');
		cy.url().should('contain', 'text-box');
	});
	it('GX3-867 | TC1: Validar llenar y enviar formulario con datos correctos', () => {
		cy.fixture('data/GX3-863-TextBox').then(the => {
			cy.get(the.FullName.input).type(the.FullName.data.filled);
			cy.get(the.CurrentAddress.input).type(the.CurrentAddress.data.filled);
			cy.get(the.PermanentAddress.input).type(the.PermanentAddress.data.filled);
			cy.get(the.Email.input).type(the.Email.data.valid);
			cy.get(the.SubmitButton).click();
			cy.get('#name').should('contain.text', the.FullName.data.filled);
			cy.get('#email').should('contain', the.Email.data.valid);
			cy.get('#currentAddress.mb-1').should('contain', the.CurrentAddress.data.filled);
			cy.get('#permanentAddress.mb-1').should('contain', the.PermanentAddress.data.filled);
		});
	});
});
