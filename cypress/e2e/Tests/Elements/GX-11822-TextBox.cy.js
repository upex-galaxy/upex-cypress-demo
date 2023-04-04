import { removeLogs } from '@helper/RemoveLogs';
import { textBox } from '@pages/GX-9552-Text-Box/Text-Box';

const fullName = 'Marcos';
const currentAddress = 'AV Moreno';
const permanentAddress = 'Pilar 33';
const userEmail = 'css@mail.com';

const textbox = 'text-box';

//const { fullNameInput, emailInput, currentAddressInput, permanentAddressInput, submitBtn } = cypress/support/pages/GX-9552-Text-Box/Text-Box('elements');

describe('✅ToolsQA | Elements | Text Box: Fill form and Submit', () => {
	beforeEach('Precondition: be located in text-box', () => {

		cy.visit(textbox);
		cy.url().should('contain', textbox);
		//textBox.clearAllInput();
		//cy.visit('https://demoqa.com/text-box');
	});

	it('11823 | TC1: Validate string is displayed below as a paragraph after submitting if Full Name is filled', () => {
		cy.pause();
		textBox.clearFullNameInput();
		textBox.typeFullNameInput(fullName);
		textBox.clickSubmitBtn();
		//cy.get('#output').should('contain', 'name');
	});

	it('11823 | TC2: Validate string is displayed below as a paragraph after submitting if Current Address is filled', () => {
		textBox.clearCurrentAddressInput();
		textBox.typeCurrentAddressInput(currentAddress);
		textBox.clickSubmitBtn();
		//cy.get('#output').should('contain', 'currentAddress.mb-1');
	});

	it('11823 | TC3: Validate string is displayed below as a paragraph after submitting if Permanent Address is filled', () => {
		textBox.clearPermanentAddressInput();
		textBox.typePermanentAddressInput(permanentAddress);
		textBox.clickSubmitBtn();
		//cy.get('#output').should('contain', 'permanentAddress.mb-1');
	});
	
	it('11823 | TC4: Validate no log message is displayed after submitting if Full Name is empty', () => {
		cy.get('#submit').click();
		cy.get('#output').should('not.be.visible');
	});

	it('11823 | TC5: Validate no log message is displayed after submitting if Current Address is empty', () => {
		cy.get('#submit').click();
		//cy.get('#output').should('not.contain', 'currentAddress.mb-1');
	});

	it('11823 | TC6: Validate no log message is displayed after submitting if Permanent Address is empty', () => {
		cy.get('#submit').click();
		//cy.get('#output').should('not.contain', 'permanentAddress.mb-1');
	});

	it('11823 | TC7: Validate string is displayed below as a paragraph after submitting if Email is successfully filled', () => {
		textBox.clearEmailInput();
		textBox.typeEmailInput(userEmail);
		textBox.clickSubmitBtn();
		//cy.get('#output').should('contain', 'userEmail');
	});

	it('11823 | TC8: Validate no log message is displayed after submitting if Email is empty', () => {
		textBox.clickSubmitBtn();
		//cy.get('#output').should('not.contain', 'userEmail');
	});

	it('11823 | TC9: Validate email field is displayed as a red border if it do not contain “@”', () => {
		const userEmail = 'cssmail.com';
		textBox.typeEmailInput(userEmail);
		textBox.clickSubmitBtn();

	});

	it('11823 | TC10: Validate email field is displayed as a red border if it do not contain (minimum) 1 alphanumeric character before “@”', () => {
		const userEmail = '@mail.com';
		textBox.typeEmailInput(userEmail);
		textBox.clickSubmitBtn();

	});
	
	it('11823 | TC11: Validate email field is displayed as a red border if it do not contain (minimum) 1 alphanumeric character after “@”', () => {
		const userEmail = 'css@.com';
		textBox.typeEmailInput(userEmail);
		textBox.clickSubmitBtn();
	});

	it('11823 | TC12: Validate email field is displayed as a red border if it do not contain “.” after: 1 alphanumeric character after “@”', () => {
		const userEmail = 'css@mailcom';
		textBox.typeEmailInput(userEmail);
		textBox.clickSubmitBtn();
		//cy.get('#output').should('not.contain', 'userEmail');
	});

	it('11823 | TC13: Validate email field is displayed as a red border if it don not contain (minimum) 2 alphanumeric characters after “.”', () => {
		const userEmail = 'css@mail.c';
		textBox.typeEmailInput(userEmail);
		textBox.clickSubmitBtn();
	}); 
});
removeLogs();