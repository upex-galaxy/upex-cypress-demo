describe('✅ToolsQA Elements Text Box: Fill form and Submit', () => {
	beforeEach('precondition: visit website Demo QA', () => {
		cy.visit('https://demoqa.com/text-box'), cy.url().should('contain', 'text-box');
	});

	it.only('TC1: Validate fill the Fill form successfully with valide data verifying the correct message', () => {
		//	cy.get('#userName').type('dog');
		//arrange
		cy.fixture('data/Gx-22318-TextBox.json').then(the => {
			cy.get(the.ids.fullName).type('Elena Valera');
			cy.get(the.ids.email).type('secretodelmar@gmail.com');
			cy.get(the.ids.currentAddress).type('Calle mar menor 5');
			cy.get(the.ids.permanentAddress).type('Calle mar mayor 6');
			//act
			cy.get(the.ids.submitButton).click();
			//assert

			cy.get('#output').within(() => {
				// this is for searching elements inside the element "output"
				cy.get('#name').should('exist');
				cy.get('#name').should('have.text', 'Name:Elena Valera');

				cy.get('#email').should('exist');
				cy.get('#email').should('have.text', 'Email:secretodelmar@gmail.com');

				cy.get('#currentAddress').should('exist');
				cy.get('#currentAddress').should('have.text', 'Current Address :Calle mar menor 5 ');

				cy.get('#permanentAddress').should('exist');
				cy.get('#permanentAddress').should('have.text', 'Permananet Address :Calle mar mayor 6');
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
