import * as json from '@data/credentialsDemoQA.json';
import { getRealValue } from '@helper/testUtils';
import { formPage } from '@pages/Form.Page';

describe('GX3-1476: ToolsQA | Elements | Text Box: Fill form and Submit', () => {
	beforeEach(() => {
		cy.visit('/text-box');
	});

	it('GX3-1476 | TC1: Should be able to fill form and submit', function () {
		//Form
		const { usernameInput, userEmailInput, currentAddressInput, permanentAddressInput } = formPage;

		usernameInput().type(json.validCredentials.FullName);
		userEmailInput().type(json.validCredentials.Email);
		currentAddressInput().type(json.validCredentials.CurrentAddress);
		permanentAddressInput().type(json.validCredentials.PermanentAddress);

		cy.get('#submit').click();

		//Alias
		cy.get('#output #name').invoke('text').as('name');
		cy.get('#output #email').invoke('text').as('email');
		cy.get('#output #currentAddress').invoke('text').as('currentAddress');
		cy.get('#output #permanentAddress').invoke('text').as('permanentAddress');
		//Assertions
		cy.then( ()=> {
			expect(getRealValue(this.name)).equal(json.validCredentials.FullName);
			expect(getRealValue(this.email)).equal(json.validCredentials.Email);
			expect(getRealValue(this.currentAddress)).equal(json.validCredentials.CurrentAddress);
			expect(getRealValue(this.permanentAddress)).equal(json.validCredentials.PermanentAddress);
		});
	});

	it('GX3-1476 | TC2: Should not be able to fill form and submit', () => {
		cy.get('#userName-wrapper input').type(json.invalidEmailCredentials.FullName);
		cy.get('#userEmail-wrapper input').type(json.invalidEmailCredentials.Email);
		cy.get('#currentAddress-wrapper textarea').type(json.invalidEmailCredentials.CurrentAddress);
		cy.get('#permanentAddress-wrapper textarea').type(json.invalidEmailCredentials.PermanentAddress);

		cy.get('#submit').click();

		cy.get('#userEmail-wrapper input').should('have.class', 'field-error');
		cy.get('#userEmail-wrapper input').invoke('css', 'border-color').should('eq', 'rgb(255, 0, 0)');
	});
});
