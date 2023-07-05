describe('✅ToolsQA Elements Text Box: Fill form and Submit', () => {
	beforeEach('precondition: visit website Demo QA', () => {
		cy.visit('https://demoqa.com/text-box');
		cy.url().should('contain', 'text-box');
	});

	it.only('TC1: Validate fill the Fill form successfully with valide data verifying the correct message', () => {
		//arrange
		cy.fixture('data/Gx-22318-TextBox.json').then(the => {
			cy.get(the.ids.fullName).type(the.validInput.userName);
			cy.get(the.ids.email).type(the.validInput.userEmail);
			cy.get(the.ids.currentAddress).type(the.validInput.currentAddress);
			cy.get(the.ids.permanentAddress).type(the.validInput.permanentAddress);

			//act
			cy.get(the.ids.submitButton).click();

			//assert

			cy.get('#output')
				.should('exist')
				.within(() => {
					// this is for searching elements inside the element "output"

					cy.get(the.outputIds.userName).should('have.text', the.validOutputs.userName);
					cy.get(the.outputIds.userEmail).should('have.text', the.validOutput.userEmail);
					cy.get(the.outputIds.currentAddress).should('have.text', the.validOutput.currentAddress);
					cy.get(the.outputIds.permanentAddress).should('have.text', the.validInput.permanentAddress);
				});

			// AAA
			// Arrange
			// Act
			// Assert
		});
	});
});

import { removeLogs } from '@helper/RemoveLogs';
removeLogs();
