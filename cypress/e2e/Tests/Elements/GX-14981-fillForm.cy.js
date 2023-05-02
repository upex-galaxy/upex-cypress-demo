describe('✅ToolsQA | Elements | Text Box: Fill form and Submit', () => {
	beforeEach('Should be in the DemoQA page for Text-box', () => {
		cy.visit('https://demoqa.com/text-box');
		cy.contains('Text Box').should('be.visible');
		cy.url().should('contain', 'text-box');
	});

	it('14982 | TC1: Validate submit the form with ALL fields with valid information', () => {
		cy.fixture('data/TextBoxForm').then(the => {
			cy.get(the.inputs.fullName).type(the.dataInputs.dataFullName);
			cy.get(the.inputs.Email).type(the.dataEmail.dataEmailValida);
			cy.get(the.inputs.currentAddress).type(the.dataInputs.dataCurrentAddress);
			cy.get(the.inputs.permanentAddress).type(the.dataInputs.dataPermanentAddress);
			cy.get(the.SubmitBtn).click();

			cy.get(the.displayMessage).should('be.visible');
		});
	});
	it('14982 | TC2: Validate do not submit the form when is missing “@” in the Email field.', () => {
		cy.fixture('data/TextBoxForm').then(the => {
			cy.get(the.inputs.fullName).type(the.dataInputs.dataFullName);
			cy.get(the.inputs.Email).type(the.dataEmail.dataEmailInvalida.MissingAtSing);
			cy.get(the.inputs.currentAddress).type(the.dataInputs.dataCurrentAddress);
			cy.get(the.inputs.permanentAddress).type(the.dataInputs.dataPermanentAddress);
			cy.get(the.SubmitBtn).click();

			cy.get(the.displayRedInputError).should('exist').and('be.visible');
		});
	});
	it('14982 | TC3: Validate do not  submit the form when the Email field do not contain a minimum of 1 Alphanumeric character before “@”', () => {
		cy.fixture('data/TextBoxForm').then(the => {
			cy.get(the.inputs.fullName).type(the.dataInputs.dataFullName);
			cy.get(the.inputs.Email).type(the.dataEmail.dataEmailInvalida.noAlphaBeforeAtSing);
			cy.get(the.inputs.currentAddress).type(the.dataInputs.dataCurrentAddress);
			cy.get(the.inputs.permanentAddress).type(the.dataInputs.dataPermanentAddress);
			cy.get(the.SubmitBtn).click();

			cy.get(the.displayRedInputError).should('exist').and('be.visible');
		});
	});
	it('14982 | TC4: Validate do not  submit the form when the Email field do not contain a minimum of 1 Alphanumeric character after “@”', () => {
		cy.fixture('data/TextBoxForm').then(the => {
			cy.get(the.inputs.fullName).type(the.dataInputs.dataFullName);
			cy.get(the.inputs.Email).type(the.dataEmail.dataEmailInvalida.noAlphaAfterAtSing);
			cy.get(the.inputs.currentAddress).type(the.dataInputs.dataCurrentAddress);
			cy.get(the.inputs.permanentAddress).type(the.dataInputs.dataPermanentAddress);
			cy.get(the.SubmitBtn).click();

			cy.get(the.displayRedInputError).should('exist').and('be.visible');
		});
	});
	it('14982 | TC5: Validate do not submit the form when the Email field does not contain “.” after “@” and a minimum of 1 Alphanumeric Character.', () => {
		cy.fixture('data/TextBoxForm').then(the => {
			cy.get(the.inputs.fullName).type(the.dataInputs.dataFullName);
			cy.get(the.inputs.Email).type(the.dataEmail.dataEmailInvalida.noDotAfterAtSing);
			cy.get(the.inputs.currentAddress).type(the.dataInputs.dataCurrentAddress);
			cy.get(the.inputs.permanentAddress).type(the.dataInputs.dataPermanentAddress);
			cy.get(the.SubmitBtn).click();

			cy.get(the.displayRedInputError).should('exist').and('be.visible');
		});
	});
	it('14982 | TC6: Validate do not submit the form when the Email field does not contain 2 Alphanumeric characters as a minimum after the “.”', () => {
		cy.fixture('data/TextBoxForm').then(the => {
			cy.get(the.inputs.fullName).type(the.dataInputs.dataFullName);
			cy.get(the.inputs.Email).type(the.dataEmail.dataEmailInvalida.no2AlphaAfterDot);
			cy.get(the.inputs.currentAddress).type(the.dataInputs.dataCurrentAddress);
			cy.get(the.inputs.permanentAddress).type(the.dataInputs.dataPermanentAddress);
			cy.get(the.SubmitBtn).click();

			cy.get(the.displayRedInputError).should('exist').and('be.visible');
		});
	});
	it('14982 | TC7: Validate do not submit the form when the Email field contains more than 3 Alphanumeric characters after the “.”', () => {
		cy.fixture('data/TextBoxForm').then(the => {
			cy.get(the.inputs.fullName).type(the.dataInputs.dataFullName);
			cy.get(the.inputs.Email).type(the.dataEmail.dataEmailInvalida.moreThan3AfterDot);
			cy.get(the.inputs.currentAddress).type(the.dataInputs.dataCurrentAddress);
			cy.get(the.inputs.permanentAddress).type(the.dataInputs.dataPermanentAddress);
			cy.get(the.SubmitBtn).click();

			cy.get(the.displayRedInputError).should('exist').and('be.visible');
		});
	});
});

// it('14982 | TC8: Validate do not submit the form when all fields are Empty', () => {});

import { removeLogs } from '@helper/RemoveLogs';
removeLogs();
