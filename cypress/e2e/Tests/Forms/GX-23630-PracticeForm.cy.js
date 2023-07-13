import data from '../../../fixtures/data/GX-23630-PracticeForm.json';
import { removeLogs } from '@helper/RemoveLogs';
removeLogs();
import { usuario } from '@pages/Forms/GX-23630-PracticeForm';

import { faker } from '@faker-js/faker';

const firstname = faker.name.firstName();
const lastname = faker.name.lastName();
const phoneNumber = faker.phone.number('##########');
const address = faker.address.streetAddress();
const startDate = new Date('1920/01/01');
const endDate = new Date('2023/01/01');
const Mail = [data.Email1, data.Email3, data.Email5, data.Email7, data.Email8];

describe('US GX-23630 | TS: ✅ToolsQA | Forms | Practice Form', () => {
	beforeEach(() => {
		cy.visit('https://demoqa.com/automation-practice-form');
	});

	it('23631 | TC1: Validate if every field are empty ', () => {
		usuario.datos.submit(); // Write your test case one here
	});

	it.only('23631 | TC3: Validate complete the form ', () => {
		usuario.FillForm(lastname, firstname, usuario.obtenerMailAleatorio(Mail), phoneNumber, address);
		usuario.datos.gender().eq(usuario.getRandomNumber(0, 2)).click();
		usuario.datos.hobby().eq(usuario.getRandomNumber(3, 5)).click();
		usuario.datos.Mobile().invoke('val').should('have.length', 10);
		usuario.datos.submit().click();
	});
	// usuario.dato}s.submit().click();

	it('23631 | TC5: Validate if field email is invalid, does not contain “@“ ', () => {
		usuario.FillForm(lastname, firstname, data.Email5, phoneNumber, address);

		usuario.datos.Mobile().invoke('val').should('have.length', 10);
		usuario.datos.submit().click();
	});
	it('23631 | TC6: Validate if field email is invalid, does not contain (minimum) 1 alphanumeric character before “@”', () => {
		usuario.FillForm(lastname, firstname, data.Email8, phoneNumber, address);
	});
	it.only('23631 | TC7: Validate if field email is invalid, does not contain “.” after 1 alphanumeric character after “@”.', () => {
		usuario.FillForm(lastname, firstname, data.Email3, phoneNumber, address);
	});
	it('23631 | TC8: Validate if field email is invalid, does not contain  (minimum) 2 alphanumeric characters after “.”', () => {
		usuario.FillForm(lastname, firstname, data.Email1, phoneNumber, address);
	});

	it.only('23631 | TC10: Validate 3 Radio Buttons must have Male, Female, Other labels.', () => {
		usuario.datos.genderFemale();
		usuario.datos.Female().should('contain', 'Female');
		usuario.datos.Male().should('contain', 'Male');
		usuario.datos.Other().should('contain', 'Other');
	});

	it('23631 | TC14: Validate if field date picker has the current date as a default value.', () => {});

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
