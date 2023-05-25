describe('ToolsQA | Elements | Text Box: Fill form and Submit', () => {
	beforeEach('Estar situados en ToolQA TExt-box', () => {
		cy.visit('https://demoqa.com/text-box');
	});
});

it('GX-18413 | TC1: Validar completar formulario con todos los campos completos.', () => {
	cy.fixture('data/aca va el archivo de fixture nuestro json').then(the => {
		cy.get(the.input.FullName).type(the.data.FullName);
		cy.get(the.input.Email).type(the.data.Email);
		cy.get(the.input.CurrentAddress).type(the.data.CurrentAddress);
		cy.get(the.input.PermanentAddress).type(the.data.PermanentAddress);
		cy.get(the.SubmitButton).click();

		cy.get(the.assertions.FullName).should('be.visible');
		cy.get(the.assertions.Email).should('be.visible');
		cy.get(the.assertions.CurrentAddress).should('be.visible');
		cy.get(the.assertions.PermanentAddress).should('be.visible');
	});
});
