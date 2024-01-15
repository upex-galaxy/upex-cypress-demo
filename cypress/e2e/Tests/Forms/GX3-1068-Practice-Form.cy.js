import { faker } from '@faker-js/faker';
import { FormPage } from '@pages/Forms/GX3-1068-PracticeForm';
describe('GX3-1067 | TS: ToolsQA | Forms | Practice Form', () => {
	beforeEach('Acceso a la pagina', () => {
		cy.visit('/automation-practice-form');
		cy.url().should('contain', 'automation-practice-form');
	});

	it('929 | TC1: Validar ingresar data válida en los campos', () => {
		cy.fixture('data/GX3-1068-PracticeForm.json').then(data => {
			//cy.get('#firstName').type(faker.name.firstName());
			cy.get(data.input.name).type(faker.name.firstName());
			//cy.get('#lastName').type(faker.name.lastName());
			cy.get(data.input.lastname).type(faker.name.lastName());
			//cy.get('div[class*="custom-control-inline"]').first().check();
			cy.get(data.button.radio).first().click();
			const RandomHobbies = faker.datatype.number({ min: 10, max: 100 });
			cy.get('#userEmail').type(faker.internet.email());
			cy.get(Form.number).type(faker.phone.number());
			cy.get('#dateOfBirthInput').click();
			cy.xpath('(//div[@aria-label="Choose Sunday, January 14th, 2024"])[1]').click();
			cy.get('[for="hobbies-checkbox-1"]').should('be.visible');
			cy.get('[for="hobbies-checkbox-1"]').click();
			cy.get('#subjectsContainer').type('información');
			cy.get('#uploadPicture').scrollIntoView();
			cy.get('#uploadPicture').selectFile('/Users/carlos/Pictures/GoPro/2016-01-01/HERO7 BLACK 1/GOPR0229.JPG');
			cy.get('#currentAddress').type('chile');
			cy.get('#userName-wrapper').select('Haryana');
		});
		
	});
});
