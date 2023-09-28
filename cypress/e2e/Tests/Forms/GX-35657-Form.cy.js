import { form } from '@pages/Forms/GX-35657-Form.page';
import { faker } from '@faker-js/faker';
import data from '../../../fixtures/data/GX-35657-Form.json';

import { removeLogs } from '@helper/RemoveLogs';

const validCss = 'rgb(40, 167, 69)';
const invalidCss = 'rgb(220, 53, 69)';

describe(' GX-35657 | ToolsQA | Forms | Practice Form', () => {
	beforeEach(() => {
		cy.visit('/automation-practice-form');
	});

	it('35658 | TC1: Validar enviar formulario con datos validos.', () => {
		const name = faker.name.firstName();
		const lastName = faker.name.lastName();
		const email = faker.internet.email();
		const validMobileNumber = faker.datatype.number({ min: 1000000000, max: 9999999999 });
		const currentAddress = faker.address.streetAddress();
		form.fillForm({
			firstName: name,
			lastName: lastName,
			email: email,
			gender: true,
			mobileNumber: validMobileNumber,
			subject: true,
			hobbies: true,
			picture: 'cypress/fixtures/images/upexlogo.png',
			currentAddress: currentAddress,
			state: true,
			city: true,
		}).then(index => {
			const [gender, subject, hobbies, state, city, birthday] = index;

			form.get.studentInfo('Student Name').should('have.text', `${name} ${lastName}`);
			form.get.studentInfo('Student Email').should('have.text', email);
			form.get.studentInfo('Gender').should('have.text', gender);
			form.get.studentInfo('Mobile').should('have.text', validMobileNumber);
			form.get.studentInfo('Date of Birth').should('contain.text', birthday);
			form.get.studentInfo('Subjects').should('have.text', subject);
			form.get.studentInfo('Hobbies').should('have.text', hobbies);
			form.get.studentInfo('Address').should('have.text', currentAddress);
			form.get.studentInfo('State and City').should('have.text', `${state} ${city}`);
			form.get.studentInfo('Picture').should('have.text', 'upexlogo.png');

			cy.log('genero', gender);
			cy.log('subject', subject);
			cy.log('hobbies', hobbies);
			cy.log('state', state);
			cy.log('city', city);
		});
	});
	it('35658 | TC2: Validar no enviar formulario con campos vacíos.', () => {
		form.fillForm({});

		form.get.popUp().should('not.exist');
		form.get.firstName().should('have.css', 'border-color', invalidCss);
		form.get.lastName().should('have.css', 'border-color', invalidCss);
		form.get.email().should('have.css', 'border-color', validCss);
		form.get.gender().should('have.css', 'border-color', invalidCss);
		form.get.mobileNumber().should('have.css', 'border-color', invalidCss);
		form.get.dateOfBirth().should('have.css', 'border-color', validCss);
		form.get.currentAddress().should('have.css', 'border-color', validCss);
	});

	it('35658 | TC3: Validar no enviar formulario con campos no validos.', () => {
		const invalidMobileNumber = faker.datatype.number({ min: 100000000, max: 999999999 });

		data.invalidEmail.map(invalid => {
			form.fillForm({
				email: invalid.email,
				mobileNumber: invalidMobileNumber,
			});

			form.get.popUp().should('not.exist');
			form.get.email().should('have.css', 'border-color', invalidCss);
			// form.get.mobileNumber().should('have.css', 'border-color', 'rgb(220, 53, 69)');
		});
	});
});

removeLogs();
