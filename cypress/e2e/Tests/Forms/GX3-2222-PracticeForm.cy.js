import { faker } from '@faker-js/faker';
import { formPage } from '../../../support/pages/GX3-2222-PracticeForm.Page';

describe('ToolsQA | Widgets | Dropdown - Select Menu', () => {
	const data = {
		firstName : faker.person.firstName(),
		lastname : faker.person.lastName(),
		email : faker.internet.email(),
		phoneNUmer : faker.string.numeric(10),
		subjects : faker.string.alpha({count:1, bannedChars: ['x', 'y', 'q', 'j', 'f', 'w', 'z'] }),
		address : faker.location.streetAddress(true),
	};
	beforeEach(() => {
		cy.visit('/automation-practice-form');
		cy.url().should('include', '/automation-practice');
	});
	it('2223 | TC1: Check that the user can fill in the form with correct data', () => {
		//Type inputs
		formPage.completeInputs(data.firstName, data.lastname, data.email,data.phoneNUmer,data.subjects, data.address);
		formPage.get.firstName().should('have.value', data.firstName);
		formPage.get.lastName().should('have.value', data.lastname);
		formPage.get.email().should('have.value', data.email);
		formPage.get.mobile().should('have.value', data.phoneNUmer);
		formPage.readSubject().then(subjectValue => {
			formPage.get.subjects().invoke('text').should('contain', subjectValue);
		});
		formPage.get.currentAddress().should('have.value', data.address);

		//Select gender from radio buttons
		formPage.selectRandomOption(formPage.get.gender).then($option => {
			formPage.get.gender().eq($option.index).should('be.checked');
		});

		//Check the calendar loads with today´s date
		formPage.get.calendar().invoke('val').should('equal', formPage.getTodayDate());

		//Select a different birth date from the calendar
		formPage.selectRandomDateOfBirth().then(date => {
			formPage.get.calendar().invoke('val').should('include', date);
		});

		//Select 1 hobbie from the different checkboxes
		formPage.selectRandomOption(formPage.get.hobbies).then($option => {
			formPage.get.hobbies().eq($option.index).should('be.checked');
		});

		//Upload a picture file
		formPage.selectFile();
		formPage.get.uploadFile().should('contain.value', 'upexlogo.png');

		//Select a random state
		formPage.selectState(formPage.get.stateAndCityOptions).then(data => {
			formPage.get.selectedStateOrCity().invoke('text').should('contain', data.value);
		});

		//Select a random city
		formPage.selectCity(formPage.get.stateAndCityOptions).then(data => {
			formPage.get.selectedStateOrCity().eq(1).invoke('text').should('contain', data.value);
		});
	});

});