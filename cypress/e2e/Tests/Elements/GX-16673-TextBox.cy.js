import { removeLogs } from '@helper/RemoveLogs';

removeLogs();

describe('✅ToolsQA | Elements | Text Box: Fill form and Submit', () => {
	beforeEach('User must be sited in Text Box endpoint of ToolsQA', () => {
		cy.visit('https://demoqa.com/text-box');
	});

	it('16674 | TC:1 Validate submit the form when every input is filled ', () => {
		cy.fixture('DOM/GX-16673-TextBox.Page').then(function (the) {
			cy.get(the.input.namebox).type(the.data.validname);
			cy.get(the.input.emailbox).type(the.data.validemail);
			cy.get(the.input.currentbox).type(the.data.validcurrent);
			cy.get(the.input.permanentbox).type(the.data.validpermanent);
			cy.get(the.button.submitbutton).click();
			cy.get('p').should($p => {
				expect($p).to.have.length(4);
			});
		});
	});

	it('16674 | TC:2 Validate submit the form when every input is empty', () => {
		cy.fixture('DOM/GX-16673-TextBox.Page').then(function (the) {
			cy.get(the.button.submitbutton).click();
			cy.get('p').should('not.exist');
		});
	});

	it('16674 | TC: 3 Validar submit the form when the email input is invalid ', () => {
		cy.fixture('DOM/GX-16673-TextBox.Page').then(function (the) {
			cy.get(the.input.namebox).type(the.data.validname);
			cy.get(the.input.emailbox).type(the.data.invalidemail);
			cy.get(the.input.currentbox).type(the.data.validcurrent);
			cy.get(the.input.permanentbox).type(the.data.validpermanent);
			cy.get(the.button.submitbutton).click();
			cy.get('p').should('not.exist');
			cy.get('.field-error').should('be.visible');
		});
	});
});
