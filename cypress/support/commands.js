/* eslint-disable no-undef */
// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
import 'cypress-file-upload';
import '@4tw/cypress-drag-drop';
import 'cypress-downloadfile/lib/downloadFileCommand';

// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

import { faker } from '@faker-js/faker';
import { form } from '@pages/Forms/PracticeForm.Page';

Cypress.Commands.add('randomFormData', modo => {
	const currentYear = new Date().getFullYear();
	const minYear = currentYear - 100; // Valid years are in the range 100 years from the current year.

	let data = {
		index: Math.floor(Math.random() * 3),
		firstName: faker.name.firstName(),
		lastName: faker.name.lastName(),
		mobile: faker.phone.number('##########'),
		year: faker.datatype.number({ min: minYear, max: currentYear - 1 }).toString(), //max = current year minus 1 for not being born in the current year
		month: faker.date.month(),
		email: faker.internet.email(),
		Subjects: '',
		Hobbies: '',
		Picture: '',
		Address: '',
		State: '',
		City: '',
	};

	form.typeFirstName(data.firstName);
	form.typeLastName(data.lastName);
	form.typeNumberPhone(data.mobile);
	form.selectGender(data.index);

	form.get
		.radioButton()
		.eq(data.index)
		.then(el => {
			const valor = el.val();
			data.gender = valor;
		});

	birthSelection();

	form.get
		.birthInput()
		.click()
		.then(el => {
			const valor = el.val();
			data.birthDate = valor;
		});

	if (modo === 'fullData') {
		form.typeFirstName(data.firstName);
		form.typeLastName(data.lastName);
	}

	Cypress.env('dataForm', data);

	function birthSelection() {
		form.clicBirthInput();
		form.get.datepicker().within(() => {
			form.yearSelect(data.year);
			form.get.yearDropdown().then(el => {
				const valor = el.val();
				data.year = valor;
			});
			form.monthSelect(data.month);

			form.weekClick(faker.datatype.number({ min: 0, max: 5 }));
		});
	}
});

import { modal } from '@pages/Forms/ModalForm.Page';
Cypress.Commands.add('getModalData', () => {
	/* let data = {};
	modal.get.rows().then(rows => {
		rows.each((index, row) => {
			const columns = Cypress.$(row).find('td');
			const key = Cypress.$(columns[0]).text().trim();
			const value = Cypress.$(columns[1]).text().trim();
			data[key] = value;
		});
	});

	Cypress.env('modalData', data); */
});
