import { getRealValue } from '@helper/testUtil';

describe('GX3-1517: ToolsQA | Elements | Text Box: Fill form and Submit', () => {
	beforeEach('visit /text-box', () => {
		cy.visit('/text-box');
	});

	it('TC1: Should filling out the form and submit it', function () {
		// * Form:
		cy.fixture('data/demoQA').then(data => {
			cy.get('#userName-wrapper input').type(data.ValidCredentials.Fullname);
			cy.get('#userEmail-wrapper input').type(data.ValidCredentials.Email);
			cy.get('#currentAddress-wrapper textarea').type(data.ValidCredentials.CurrentAddress);
			cy.get('#permanentAddress-wrapper textarea').type(data.ValidCredentials.PermanentAddress);

			cy.get('#submit').click();

			// * Assertions:

			cy.get('#output #name').invoke('text').as('name');
			cy.get('#output #email').invoke('text').as('email');
			cy.get('#output #currentAddress').invoke('text').as('currentAddress');
			cy.get('#output #permanentAddress').invoke('text').as('permanentAddress');

			cy.then(() => {
				expect(getRealValue(this.name)).equal(data.ValidCredentials.Fullname);
				expect(getRealValue(this.email)).equal(data.ValidCredentials.Email);
				expect(getRealValue(this.currentAddress)).equal(data.ValidCredentials.CurrentAddress);
				expect(getRealValue(this.permanentAddress)).equal(data.ValidCredentials.PermanentAddress);
			});
		});
	});
});
