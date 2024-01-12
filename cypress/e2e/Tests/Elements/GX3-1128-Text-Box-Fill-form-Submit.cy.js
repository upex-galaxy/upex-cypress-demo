describe('⚡️ToolsQA | Elements | Text Box: Fill form and Submit', () => {
	//Precondition:
	beforeEach('PRC: Usuario debe estar situado en la página DemoQA en el módulo Text Box', () => {
		cy.visit('https://demoqa.com/text-box');
		cy.url().should('contain', 'text-box');
	});
	//Diseño de Test Cases:
	it('GX3-1129 | TC1: Validar mostrar cadena de texto (mensaje) después de enviar los campos válidos “Full Name”, “Current Address” and “Permanent Address”.', () => {
		cy.fixture('data/GX3-1128-Text-Box-Fill.json').then(the => {
			cy.get(the.FullName.input).type(the.FullName.data.filled);
			cy.get(the.CurrentAddress.input).type(the.CurrentAddress.data.filled);
			cy.get(the.PermanentAddress.input).type(the.PermanentAddress.data.filled);
			cy.get(the.SubmitButton).click();
			cy.get('#name').should('contain.text', the.FullName.data.filled);
			cy.get('#currentAddress.mb-1').should('contain', the.CurrentAddress.data.filled);
			cy.get('#permanentAddress.mb-1').should('contain', the.PermanentAddress.data.filled);
		});
	});
});
