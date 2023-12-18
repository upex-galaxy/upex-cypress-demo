describe('GX3-863 | ToolsQA | Elements | Text Box: Fill form and Submit', () => {
	beforeEach('PRC: El usuario debe estar situado en la página en la sección text-box', () => {
		cy.visit('https://demoqa.com/text-box');
		cy.url().should('contain', 'text-box');
	});
	it('GX3-867 | TC1: Validate that string is displayed below as a paragraph after submitting', () => {
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
	it('GX3-867 | TC2: Validate that NO log message is displayed after submitting when “Full Name” field, “Current Address” field and “Permanent Address” field are empty', () => {
		cy.fixture('data/GX3-863-TextBox').then(the => {
			cy.get(the.FullName.input).should('contain', the.FullName.data.empty);
			cy.get(the.CurrentAddress.input).should('contain', the.CurrentAddress.data.empty);
			cy.get(the.PermanentAddress.input).should('contain', the.PermanentAddress.data.empty);
			cy.get(the.SubmitButton).click();
			cy.get('.border.col-md-12.col-sm-12').should('not.exist');
		});
	});
	it('GX3-867 | TC3: Validate that textbox displays a red border when "Email" field does not contains “@”', () => {
		cy.fixture('data/GX3-863-TextBox').then(the => {
			cy.get(the.Email.input).type(the.Email.data.invalid.invalidEmail1);
			cy.get(the.SubmitButton).click();
			cy.get('.mr-sm-2.field-error.form-control').should('have.class', 'field-error');
		});
	});
	it('GX3-867 | TC4: Validate that textbox displays a red border when "Email" field does not contains an alphanumeric character before “@”', () => {
		cy.fixture('data/GX3-863-TextBox').then(the => {
			cy.get(the.Email.input).type(the.Email.data.invalid.invalidEmail2);
			cy.get(the.SubmitButton).click();
			cy.get('.mr-sm-2.field-error.form-control').should('have.class', 'field-error');
		});
	});
	it('GX3-867 | TC5: Validate that textbox displays a red border when "Email" field does not contains an alphanumeric character after the “@”', () => {
		cy.fixture('data/GX3-863-TextBox').then(the => {
			cy.get(the.Email.input).type(the.Email.data.invalid.invalidEmail3);
			cy.get(the.SubmitButton).click();
			cy.get('.mr-sm-2.field-error.form-control').should('have.class', 'field-error');
		});
	});
	it('GX3-867 | TC6: Validate that textbox displays a red border when "Email" field does not contains a “.” after an alphanumeric character after the “@”', () => {
		cy.fixture('data/GX3-863-TextBox').then(the => {
			cy.get(the.Email.input).type(the.Email.data.invalid.invalidEmail4);
			cy.get(the.SubmitButton).click();
			cy.get('.mr-sm-2.field-error.form-control').should('have.class', 'field-error');
		});
	});
	it('GX3-867 | TC7: Validate that textbox displays a red border when "Email" field does not contains a 2 minimum alphanumeric characters after "."', () => {
		cy.fixture('data/GX3-863-TextBox').then(the => {
			cy.get(the.Email.input).type(the.Email.data.invalid.invalidEmail4);
			cy.get(the.SubmitButton).click();
			cy.get('.mr-sm-2.field-error.form-control').should('have.class', 'field-error');
		});
	});
});
