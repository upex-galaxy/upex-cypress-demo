describe('✅ToolsQA Elements Text Box: Fill form and Submit', () => {
	beforeEach('precondition: visit website Demo QA', () => {
		cy.visit('https://demoqa.com/text-box');
		cy.url().should('contain', 'text-box');
	});

	it('TC1: Validate fill the Fill form successfully with valide data verifying the correct message', () => {
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
					cy.get(the.outputIds.userEmail).should('have.text', the.validOutputs.userEmail);
					cy.get(the.outputIds.currentAddress).should('have.text', the.validOutputs.currentAddress);
					cy.get(the.outputIds.permanentAddress).should('have.text', the.validOutputs.permanentAddress);
				});
		});
	});

	it('TC2: Validate submit the Fill form completely empty and check the inexistent message', () => {
		cy.fixture('data/Gx-22318-TextBox.json').then(the => {
			cy.get(the.ids.fullName).should('be.empty');
			cy.get(the.ids.email).should('be.empty');
			cy.get(the.ids.currentAddress).should('be.empty');
			cy.get(the.ids.permanentAddress).should('be.empty');

			cy.get(the.ids.submitButton).click();

			cy.get('#output').should('not.exist').within(() => {

			cy.get(the.outputIds.userName).should('not.exist');
			cy.get(the.outputIds.userEmail).should('not.exist');
			cy.get(the.outputIds.currentAddress).should('not.exist');
			cy.get(the.outputIds.permanentAddress).should('not.exist');
		});
	});
});
		import { removeLogs } from '@helper/RemoveLogs';
		removeLogs();