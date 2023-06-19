describe('US GX-21075 | TS: ✅ToolsQA | Elements | Text Box: Fill form and Submit', () => {
	beforeEach('Having access to the SUT.', () => {
		cy.visit('/text-box');
	});
});

it('GX-21076 | TC1: Validate all fields are submitted with validate data and string is displayed.', () => {
	cy.fixture('GX-21075/ToolsQA-TextBox.Page').then(the => {
		cy.get(the.FullName.input).type(the.fullname.data.valid);
		cy.get(the.email.input).type(the.email.data.valid);
		cy.get(the.CurrentAddress.input).type(the.CurrentAddress.data.valid);
		cy.get(the.PermanentAddress.input).type(the.PermanentAddress.data.valid);
		cy.get(the.SubmitButton).click();
	});
});

//it('GX-21076 | TC2: Validate all fields are submitted with empty data and no string is displayed.', () => {
//	cy.get('#submit').click();
//
//});

//it('GX-21076 | TC3: Validate field “email” is submitted with invalid data and red border is displayed.', () => {
//	cy.get('[type="email"]').type('holagmail.com');
//	cy.get('#submit').click();
//	cy.contains('')
//});

//	it('GX-21076 | TC4:  Validate field “email” is submitted with empty data and no log message is displayed.', () => {
//		cy.get('[href="/commands/querying"]').eq(2).click();
//		cy.get('#query-btn').click();
//		cy.get('.query-btn') // Sintaxis Comando Get de Selector de Clases
//			.should('contain.text', 'Button');
///	}
