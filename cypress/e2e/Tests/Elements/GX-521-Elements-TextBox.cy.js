/* eslint-disable indent */
describe('⚡️ToolsQA | Elements | Text Box: Fill form and Submit', () => {
	beforeEach('Preconditions: N/A', () => {
		cy.visit('https://demoqa.com/text-box');
		cy.url().should('contain', 'text-box');
	});

	it('TC#1: Validate submitting the form succesfully completing all fields', () => {
		cy.fixture('data/Elements/GX-521-TextBox-Form&Submit').then(the => {
			cy.get(the.FullName.input).type(the.FullName.name);
			cy.get(the.Email.input).type(the.Email.email.valid);
			cy.get(the.CurrentAddress.input).type(the.CurrentAddress.address);
			cy.get(the.PermanentAddress.input).type(the.PermanentAddress.address);
			cy.get(the.SubmitButton.input).click();
			cy.get(the.LogMessage.input.FullName).should('have.prop', 'tagName', 'P');
		});
	});

	it('TC#2: Validate NO log message is displayed after submitting when the field “Full Name“ is empty', () => {
		cy.fixture('data/Elements/GX-521-TextBox-Form&Submit').then(the => {
			cy.get(the.Email.input).type(the.Email.email.valid);
			cy.get(the.CurrentAddress.input).type(the.CurrentAddress.address);
			cy.get(the.PermanentAddress.input).type(the.PermanentAddress.address);
			cy.get(the.SubmitButton.input).click();
			cy.get(the.LogMessage.FullName).should('not.exist');
			cy.get(the.LogMessage.email).should('not.exist');
			cy.get(the.LogMessage.currentAddress).should('not.exist');
			cy.get(the.LogMessage.permanentAddress).should('not.exist');
		});
	});

	it('TC#3: Validate NO log message is displayed after submitting when the field “Current Address“ is empty', () => {
		cy.fixture('data/Elements/GX-521-TextBox-Form&Submit').then(the => {
			cy.get(the.FullName.input).type(the.FullName.name);
			cy.get(the.Email.input).type(the.Email.email.valid);
			cy.get(the.PermanentAddress.input).type(the.PermanentAddress.address);
			cy.get(the.SubmitButton.input).click();
			cy.get(the.LogMessage.FullName).should('not.exist');
			cy.get(the.LogMessage.email).should('not.exist');
			cy.get(the.LogMessage.currentAddress).should('not.exist');
			cy.get(the.LogMessage.permanentAddress).should('not.exist');
		});
	});

	it('TC#4: Validate NO log message is displayed after submitting when the field “Permanent Address“ is empty', () => {
		cy.fixture('data/Elements/GX-521-TextBox-Form&Submit').then(the => {
			cy.get(the.FullName.input).type(the.FullName.name);
			cy.get(the.Email.input).type(the.Email.email.valid);
			cy.get(the.CurrentAddress.input).type(the.CurrentAddress.address);
			cy.get(the.SubmitButton.input).click();
			cy.get(the.LogMessage.FullName).should('not.exist');
			cy.get(the.LogMessage.email).should('not.exist');
			cy.get(the.LogMessage.currentAddress).should('not.exist');
			cy.get(the.LogMessage.permanentAddress).should('not.exist');
		});
	});

	it('TC#5: Validate NO log message is displayed after submitting when “Email“ is empty', () => {
		cy.fixture('data/Elements/GX-521-TextBox-Form&Submit').then(the => {
			cy.get(the.FullName.input).type(the.FullName.name);
			cy.get(the.CurrentAddress.input).type(the.CurrentAddress.address);
			cy.get(the.PermanentAddress.input).type(the.PermanentAddress.address);
			cy.get(the.SubmitButton.input).click();
			cy.get(the.LogMessage.FullName).should('not.exist');
			cy.get(the.LogMessage.email).should('not.exist');
			cy.get(the.LogMessage.currentAddress).should('not.exist');
			cy.get(the.LogMessage.permanentAddress).should('not.exist');
		});
	});

	it('TC#6: Validate “Email“ is invalid when it doesn’t contain “@“', () => {
		cy.fixture('data/Elements/GX-521-TextBox-Form&Submit').then(the => {
			cy.get(the.FullName.input).type(the.FullName.name);
			cy.get(the.Email.input).type(the.Email.email.invalid.invalid1);
			cy.get(the.CurrentAddress.input).type(the.CurrentAddress.address);
			cy.get(the.PermanentAddress.input).type(the.PermanentAddress.address);
			cy.get(the.SubmitButton.input).click();
			cy.get(the.LogMessage.input.errorEmail).should('have.css', 'border-color', 'rgb(255, 0, 0)'); // Invalid email: Red border-color validation
		});
	});

	it('TC#7: Validate “Email“ is invalid when it doesn’t contain at least 1 alphanumeric character before “@“', () => {
		cy.fixture('data/Elements/GX-521-TextBox-Form&Submit').then(the => {
			cy.get(the.FullName.input).type(the.FullName.name);
			cy.get(the.Email.input).type(the.Email.email.invalid.invalid2);
			cy.get(the.CurrentAddress.input).type(the.CurrentAddress.address);
			cy.get(the.PermanentAddress.input).type(the.PermanentAddress.address);
			cy.get(the.SubmitButton.input).click();
			cy.get(the.LogMessage.input.errorEmail).should('have.css', 'border-color', 'rgb(255, 0, 0)'); // Invalid email: Red border-color validation
		});
	});

	it('TC#8: Validate “Email“ is invalid when it doesn’t contain at least 1 alphanumeric character after “@“', () => {
		cy.fixture('data/Elements/GX-521-TextBox-Form&Submit').then(the => {
			cy.get(the.FullName.input).type(the.FullName.name);
			cy.get(the.Email.input).type(the.Email.email.invalid.invalid3);
			cy.get(the.CurrentAddress.input).type(the.CurrentAddress.address);
			cy.get(the.PermanentAddress.input).type(the.PermanentAddress.address);
			cy.get(the.SubmitButton.input).click();
			cy.get(the.LogMessage.input.errorEmail).should('have.css', 'border-color', 'rgb(255, 0, 0)'); // Invalid email: Red border-color validation
		});
	});

	it('TC#9: Validate “Email“ is invalid when it doesn’t contain “.“ after 1 alphanumeric character after “@“', () => {
		cy.fixture('data/Elements/GX-521-TextBox-Form&Submit').then(the => {
			cy.get(the.FullName.input).type(the.FullName.name);
			cy.get(the.Email.input).type(the.Email.email.invalid.invalid4);
			cy.get(the.CurrentAddress.input).type(the.CurrentAddress.address);
			cy.get(the.PermanentAddress.input).type(the.PermanentAddress.address);
			cy.get(the.SubmitButton.input).click();
			cy.get(the.LogMessage.input.errorEmail).should('have.css', 'border-color', 'rgb(255, 0, 0)'); // Invalid email: Red border-color validation
		});
	});

	it('TC#10: Validate “Email“ is invalid when it doesn’t contain at least 2 alphanumeric characters after “.“', () => {
		cy.fixture('data/Elements/GX-521-TextBox-Form&Submit').then(the => {
			cy.get(the.FullName.input).type(the.FullName.name);
			cy.get(the.Email.input).type(the.Email.email.invalid.invalid5);
			cy.get(the.CurrentAddress.input).type(the.CurrentAddress.address);
			cy.get(the.PermanentAddress.input).type(the.PermanentAddress.address);
			cy.get(the.SubmitButton.input).click();
			cy.get(the.LogMessage.input.errorEmail).should('have.css', 'border-color', 'rgb(255, 0, 0)'); // Invalid email: Red border-color validation
		});
	});
});

//Se importa la funcion
import { removeLogs } from '@helper/RemoveLogs';

//Se ejecuta la funcion para evitar los errores (puedes hacerlo al final de tu codigo)
removeLogs();
