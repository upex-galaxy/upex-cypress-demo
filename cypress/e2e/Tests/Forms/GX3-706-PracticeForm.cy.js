import { removeLogs } from '@helper/RemoveLogs';
import { faker } from '@faker-js/faker';
import { formPage } from '@pages/Forms/GX-706-PracticeForm.Page';

describe('GX3-706 ToolsQA | Forms | Practice Form', () => {
	beforeEach('PCR: Usuario debe situarse en el web de Demo QA', () => {
		cy.visit('https://demoqa.com/automation-practice-form');
		cy.url().should('contain', 'automation-practice-form');
	});

	it('707 | TC1: Validar poder crear el registro de estudiante con valores válidos', () => {
		const randomFirstName = faker.name.firstName();
		const randomLastName = faker.name.lastName();
		const randomMobile = faker.phone.number();
		const randomSubjects = faker.database.subjects();
		const randomAdress = faker.address.address();

		formPage.typeFirstName(randomFirstName);
		formPage.get.inputFirstName().should('have.value', randomFirstName);

		formPage.typeLastName(randomLastName);
		formPage.get.inputLastName().should('have.value', randomLastName);

		formPage.typeMobile(randomMobile);
		formPage.get.inputMobile().should('have.value', randomMobile);

		formPage.typeSubjects(randomSubjects);
		formPage.get.inputSubjects().should('have.value', randomSubjects);

		formPage.typeAdress(randomAdress);
		formPage.get.inputAddress().should('have.value', randomAdress);

		formPage.typeEmail();
		formPage.get.inputMail().should('have.value', randomAdress);
	});
	removeLogs();
});
