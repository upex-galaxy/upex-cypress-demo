import { faker } from '@faker-js/faker';
import { formPage } from '@pages/Forms/GX-706-PracticeForm.Page';

describe('GX3-706 ToolsQA | Forms | Practice Form', () => {
	beforeEach('PCR: Usuario debe situarse en el web de Demo QA', () => {
		cy.visit('/automation-practice-form');
		cy.url().should('contain', 'automation-practice-form');
	});

	it('707 | TC1: Validar poder crear el registro de estudiante con valores válidos', () => {
		const randomFirstName = faker.name.firstName();
		const randomLastName = faker.name.lastName();
		const randomMobile = faker.phone.number({ min: 1000000000, max: 9999999999 });
		const randomSubjects = faker.random.alpha();
		const randomAdress = faker.address.direction();
		const ramdomEmail = faker.internet.email();
		const randomGender = faker.datatype.number({ min: 0, max: 2 });

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

		formPage.typeEmail(ramdomEmail);
		formPage.get.inputMail().should('have.value', ramdomEmail);

		formPage.selectPicture();
		formPage.get.selectFile().should('be.visible', 'data.picture.nameFile');

		formPage.selectOneGenero(randomGender);
		formPage.get.selectGenero().should('have.value', randomGender);
	});
});
