import data from '../../../fixtures/data/GX-23630-PracticeForm.json';
import { removeLogs } from '@helper/RemoveLogs';
removeLogs();
import { usuario } from '@pages/Forms/GX-23630-PracticeForm';

import { faker } from '@faker-js/faker';

const firstname = faker.name.firstName();
const lastname = faker.name.lastName();
const phoneNumber = faker.phone.number('##########');
const address = faker.address.streetAddress();
const date = faker.date.past();

faker.address.streetAddress();

describe('US GX-23630 | TS: ✅ToolsQA | Forms | Practice Form', () => {
	beforeEach(() => {
		cy.visit('https://demoqa.com/automation-practice-form');
	});

	it('23631 | TC1: Validate if every field are empty ', () => {
		usuario.submit(); // Write your test case one here
	});

	it('23631 | TC3: Validate complete the form ', () => {
		usuario.FillForm(lastname, firstname, data.Email7, phoneNumber, date);
	});

	it('23631 | TC5: Validate if field email is invalid, does not contain “@“ ', () => {
		usuario.FillForm(lastname, firstname, data.Email5, phoneNumber, date, address);
	});
	it('23631 | TC6: Validate if field email is invalid, does not contain (minimum) 1 alphanumeric character before “@”', () => {
		usuario.FillForm(lastname, firstname, data.Email8, phoneNumber, date, address);
	});
	it.only('23631 | TC7: Validate if field email is invalid, does not contain “.” after 1 alphanumeric character after “@”.', () => {
		usuario.FillForm(lastname, firstname, data.Email3, phoneNumber, date, address);
		phoneNumber.should('have.length', 10);
	});
	it('23631 | TC8: Validate if field email is invalid, does not contain  (minimum) 2 alphanumeric characters after “.”', () => {
		usuario.FillForm(lastname, firstname, data.Email1, phoneNumber, date, address);
	});

	it.only('23631 | TC10: Validate 3 Radio Buttons must have Male, Female, Other labels.', () => {
		usuario.datos.genderFemale();
		usuario.datos.Female().should('contain', 'Female');
		usuario.datos.Male().should('contain', 'Male');
		usuario.datos.Other().should('contain', 'Other');
	});

	it('23631 | TC13: Validate if field mobile number is invalid.', () => {
		phoneNumber.should('have.length', 10);
	});
	it.only('23631 | TC14: Validate if field date picker has the current date as a default value.', () => {
		usuario.datos.dateOfBirth().should('have', 'value');
	});
	it('23631 | TC15: Validate choose the date of birth.', () => {
		// Write your test case two here
	});
	it('23631 | TC16: Validate if field subjects is empty.', () => {
		// Write your test case two here
	});
	it('23631 | TC17: Validate if field subjects is filled.', () => {
		// Write your test case two here
	});
	it('23631 | TC18: Validate if the 3 hobbies Check Boxes have the following label: Sports, Reading, Music.', () => {
		// Write your test case two here
	});
	it('23631 | TC19: Validate if A popup appears with the information chosen when the data is submitted.', () => {
		// Write your test case two here
	});
	it('23631 | TC20: Validate upload a picture.', () => {
		// Write your test case two here
	});
	it('23631 | TC21: Validate select a state and city', () => {
		// Write your test case two here
	});
});
