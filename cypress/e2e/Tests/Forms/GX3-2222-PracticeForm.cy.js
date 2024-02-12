import { faker } from '@faker-js/faker';
import { formPage } from '../../../support/pages/GX3-2222-PracticeForm.Page';

describe('ToolsQA | Widgets | Dropdown - Select Menu', () => {
	const data = {
		firstName : faker.person.firstName(),
		lastname : faker.person.lastName(),
		email : faker.internet.email(),
		phoneNUmer : faker.string.numeric(10),
		subjects : faker.word.words({ count: 5 }),
		address : faker.location.streetAddress(true),
	};
	beforeEach(() => {
		cy.visit('/automation-practice-form');
		cy.url().should('include', '/automation-practice');
	});
	it('2223 | TC1: Check that Faker is working correcly', () => {
		formPage.completeInputs(data.firstName, data.lastname, data.email,data.phoneNUmer,data.subjects, data.address);
		formPage.get.firstName().should('have.value', data.firstName);
		formPage.get.lastName().should('have.value', data.lastname);
		formPage.get.email().should('have.value', data.email);
		formPage.get.mobile().should('have.value', data.phoneNUmer);
		//formPage.get.subjects().should('include', data.subjects);
		formPage.get.currentAddress().should('have.value', data.address);

		formPage.selectRandomOption(formPage.get.gender).then($option => {
			formPage.get.gender().eq($option.index).should('be.checked');
		});
		formPage.selectRandomOption(formPage.get.hobbies).then($option => {
			formPage.get.hobbies().eq($option.index).should('be.checked');
		});
		formPage.selectFile();
		formPage.get.uploadFile().should('contain.value', 'upexlogo.png');
		formPage.selectState(formPage.get.stateAndCityOptions).then(data => {
			formPage.get.selectedStateOrCity().invoke('text').should('contain', data.value);
		});
		formPage.selectCity(formPage.get.stateAndCityOptions).then(data => {
			formPage.get.selectedStateOrCity().eq(1).invoke('text').should('contain', data.value);
		});

		formPage.selectRandomDateOfBirth().then(date => {
			formPage.get.calendar().invoke('val').should('include', date);
		});
	});

});