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
	const randomData = {
		firstName: faker.name.firstName(),
		lastName: faker.name.lastName(),
	};

	if (modo === 'TC1') {
		form.typeFirstName(faker.name.firstName());
		form.typeLastName(faker.name.lastName());
	} else {
		form.typeFirstName(faker.name.firstName());
		form.typeLastName(faker.name.lastName());
		form.typeNumberPhone(faker.phone.phoneNumber('##########'));
		form.selectGender(Math.floor(Math.random() * 3));
		birthSelection();
	}

	function birthSelection() {
		const currentYear = new Date().getFullYear();
		const minYear = currentYear - 100; // Asumiendo que los años válidos están en un rango de 100 años atrás desde el año actual
		form.clicBirthInput();
		form.get.datepicker().within(() => {
			form.yearSelect(faker.datatype.number({ min: minYear, max: currentYear }).toString());
			form.monthSelect(faker.date.month());
			form.weekClick(faker.datatype.number({ min: 0, max: 6 }));
		});
	}
});
