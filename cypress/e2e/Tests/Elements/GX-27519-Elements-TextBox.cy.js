describe('TS#27520 : ✅ToolsQA | Elements | Text Box: Fill form and Submit', () => {
	beforeEach('Precondition: user should be stay in register page', () => {
		cy.visit('https://demoqa.com/text-box'); // Esto es un Comando de Acción directa
		cy.url().should('contain', 'text-box');
	});
	it('US # | TC#1: 27520 | Validate submit fill form with empty data', () => {
		cy.fixture('data/GX-27519-TextBox').then(the => {
			//complete form
			cy.get(the.fullName.input).type.apply(the.fullName.data.empty);
			//click Submit
			cy.get(the.buttonSubmit).click();
			//assert
			cy.get("div.border.col-md-12.col-sm-12").;
		});
	});
});

// cy.get(the.email.input).type.apply(the.email.data.empty);
// cy.get(the.currentAddress.input).type.apply(the.currentAddress.data.empty);
// cy.get(the.permanentAddress.input).type.apply(the.permanentAddress.data.empty);