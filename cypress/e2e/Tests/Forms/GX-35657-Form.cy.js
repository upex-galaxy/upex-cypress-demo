import { form } from '@pages/Forms/GX-35657-Form.page';
import { faker } from '@faker-js/faker';

import { removeLogs } from '@helper/RemoveLogs';

const name = faker.name.firstName();
const lastName = faker.name.lastName();
const email = faker.internet.email();
const mobileNumber = faker.datatype.number('##########');
const currentAddress = faker.address.streetAddress();

describe(' GX-35657 | ToolsQA | Forms | Practice Form', () => {
	beforeEach(() => {
		cy.visit('/automation-practice-form');
	});

	it('35658 | TC1: Validar enviar formulario con datos validos.', () => {
		form.fillForm({
			firstName: name,
			lastName: lastName,
			email: email,
			gender: true,
			mobileNumber: mobileNumber,
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
			form.get.studentInfo('Mobile').should('have.text', mobileNumber);
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
});

removeLogs();
