import { formpractice } from '../../../support/pages/GX3-2205-Practiceform.Page';
import { faker } from '@faker-js/faker';
describe('2205 | ToolsQA | Forms | Practice Form', () => {
	beforeEach('', () => {
		cy.visit('https://demoqa.com/automation-practice-form');
		cy.url().should('contain', 'automation-practice-form');
	});
	it('2084 |TC01 Validar rellenar el formulario con datos validos', () => {
		const name = faker.person.firstName();
		const lastName = faker.person.lastName();
		const email = faker.internet.email();
		const number = faker.string.numeric(10);
		const address = faker.location.streetAddress();
		const randomLetter = faker.random.alpha({ bannedChars: ['x', 'k', 'q', 'j', 'f', 'w', 'z'] });

		formpractice.inputsComplete( name, lastName, email, number, address);
		formpractice.get.firtName().should('have.value', name);
		formpractice.get.lastName().should('have.value', lastName);
		formpractice.get.dataEmail().should('have.value', email);
		formpractice.get.numberMobile().should('have.value', number);
		formpractice.get.currentAddress().should('have.value', address);

		formpractice.genderSelect();
		formpractice.get.genderName().should('be.checked');

		formpractice.selectRandomDate();

		formpractice.autoCompleteSubject(randomLetter).then(textElement => {
			formpractice.get.subjectContainer().invoke('text').then(textSelectedElement => {
				expect(textSelectedElement).to.include(textElement);
				cy.wrap(textSelectedElement).should('include', textElement);
			});
		});

		formpractice.hobbiesCheckbox();
		formpractice.get.hobbiesName().should('be.checked');

		formpractice.selectFile();
		formpractice.get.uploadPicture().should('contain.value', 'upexgalaxy.gif');

		formpractice.selectState();

		formpractice.selectCity();

		formpractice.clickButtonSubmit();

	});
});
