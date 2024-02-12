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

		// formPage.completeInputs(data.firstName, data.lastname, data.email,data.phoneNUmer,data.subjects,data.email);
		// formPage.selectRandomOption(formPage.get.gender).invoke('text').then(text => {
		// 	cy.log(text);
		// });
		// formPage.selectRandomOption(formPage.get.hobbies).invoke('text').then(text => {
		// 	cy.log(text);
		// });
		// formPage.selectAllHobbies().then($options => {
		// 	$options.each((index,hobbie) => {
		// 		cy.wrap(hobbie).invoke('text').then(text => {
		// 			cy.log(text);
		// 		});
		// 	});
		// });
		// formPage.selectFile();
		// formPage.selectState(formPage.get.stateAndCityOptions).invoke('text').then(text => {
		// 	cy.log(text);
		// });
		// formPage.selectCity(formPage.get.stateAndCityOptions).invoke('text').then(text => {
		// 	cy.log(text);
		// });

		formPage.getRandomDateOfBirth();
	});

});