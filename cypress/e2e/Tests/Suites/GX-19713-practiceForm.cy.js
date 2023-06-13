import { faker } from '@faker-js/faker';
import { form } from '@pages/Pages2/GX-19713-practiceForm.Page';
import { removeLogs } from '@helper/RemoveLogs';

describe('GX-19713 | TS: ✅ToolsQA | Forms | Practice Form', () => {
	it('19714 | TC1: Validar el funcionamiento del formulario con datos aleatorios correctos.', () => {
		cy.visit('https://demoqa.com/automation-practice-form');
		cy.url().should('contain', '/automation-practice-form');
		const randomName = faker.internet.userName();
		const randomLastName = faker.internet.userName();
		const randomEmail = faker.internet.email();
		const randomNumber = faker.phone.number('##########');
		const randomGender = faker.datatype.number({ min: 0, max: 2 });
		const randomSubject = faker.random.alpha({ bannedChars: ['x', 'y', 'q', 'j', 'f', 'w', 'z'] });
		const randomHobbie = faker.datatype.number({ min: 3, max: 5 });
		const randomAddress = faker.address.city();
		const state = 'NCR';
		const city = 'Delhi';

		form.typeName(randomName);
		form.get.inputName().should('have.value', randomName);

		form.typeLastName(randomLastName);
		form.get.inputLastName().should('have.value', randomLastName);

		form.typeEmail(randomEmail);
		form.get.inputMail().should('have.value', randomEmail);

		form.clickDate();

		form.clickGenero(randomGender);

		form.typeNumber(randomNumber);
		form.get.inputNumber().should('have.value', randomNumber);

		form.typeSubject(randomSubject);

		form.clickHobbie(randomHobbie);

		form.clickUpload();

		form.typeAddress(randomAddress);
		form.get.inputAddress().should('have.value', randomAddress);

		form.typeState(state);

		form.typeCity(city);

		form.clickSubmit();
	});
});
removeLogs();
