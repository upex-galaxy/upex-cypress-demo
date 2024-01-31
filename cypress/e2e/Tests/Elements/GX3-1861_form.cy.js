import * as fixtureFile from '@data/GX3-1861-form.json';
import { getRealValue } from '@helper/testUtils';
import { formPage } from '@pages/Form.Page';

describe('GX3-1476: ToolsQA | Elements | Text Box: Fill form and Submit', () => {
	beforeEach(() => {
		cy.visit('/text-box');
	});

	it('GX3-1476 | TC1: Should be able to fill form and submit', function () {
		//Form
		const { usernameInput, userEmailInput, currentAddressInput, permanentAddressInput } = formPage;

		usernameInput().type(fixtureFile.validCred.FullName);
		userEmailInput().type(fixtureFile.validCred.Email);
		currentAddressInput().type(fixtureFile.validCred.CurrentAddress);
		permanentAddressInput().type(fixtureFile.validCred.PermanentAddress);

		cy.get('#submit').click();

		//Alias
		cy.get('#output #name').invoke('text').as('name');
		cy.get('#output #email').invoke('text').as('email');
		cy.get('#output #currentAddress').invoke('text').as('currentAddress');
		cy.get('#output #permanentAddress').invoke('text').as('permanentAddress');
		//Assertions
		cy.then( ()=> {
			expect(getRealValue(this.name)).equal(fixtureFile.validCred.FullName);
			expect(getRealValue(this.email)).equal(fixtureFile.validCred.Email);
			expect(getRealValue(this.currentAddress)).equal(fixtureFile.validCred.CurrentAddress);
			expect(getRealValue(this.permanentAddress)).equal(fixtureFile.validCred.PermanentAddress);
		});
	});

	it('GX3-1476 | TC2: Should not be able to fill form and submit', () => {
		cy.get('#userName-wrapper input').type(fixtureFile.invalidCred.FullName);
		cy.get('#userEmail-wrapper input').type(fixtureFile.invalidCred.Email);
		cy.get('#currentAddress-wrapper textarea').type(fixtureFile.invalidCred.CurrentAddress);
		cy.get('#permanentAddress-wrapper textarea').type(fixtureFile.invalidCred.PermanentAddress);

		cy.get('#submit').click();

		cy.get('#userEmail-wrapper input').should('have.class', 'field-error');
		cy.get('#userEmail-wrapper input').invoke('css', 'border-color').should('eq', 'rgb(255, 0, 0)');
	});
});
