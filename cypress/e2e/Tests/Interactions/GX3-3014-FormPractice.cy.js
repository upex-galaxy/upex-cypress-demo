/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { formPage } from '../../../support/pages/GX3-3014-FormsPractice.Page';
import { faker } from '@faker-js/faker';

describe('GX3-3014 | ToolsQA | Forms | Practice Form' , () => {

	beforeEach('PRC | Usuario debe situarse en la URL de Demo QA' , () => {
		cy.visit('https://demoqa.com/automation-practice-form');
		cy.url().should('contain', 'practice');
	});

	it('3015 | TC1 | Validar poder completar el formulario para el estudiante con valores validos', () => {
		const randomName = faker.person.firstName('female' | 'male');
		const randomLastName = faker.person.lastName();
		const randomEmail = `${randomName}${randomLastName}@${faker.internet.domainName()}.com`;
		const randomGender = Cypress._.random(0, 2);
		const randomNumber = faker.string.numeric(10);
		const randomAddress = faker.location.streetAddress();
		const randomHobbies = Cypress._.random(0, 2);
		const randomSubject = faker.string.alpha({ count: 1, casing: 'upper', exclude: ['Q', 'Ñ', 'K', 'J', 'F', 'X', 'W', 'Z'] });

		formPage.fillInput('inputName', randomName);
		formPage.get.inputName().should('have.value', randomName);
		formPage.fillInput('inputLastName', randomLastName);
		formPage.get.inputLastName().should('have.value', randomLastName);
		formPage.fillInput('inputEmail', randomEmail);
		formPage.get.inputEmail().should('have.value', randomEmail);
		formPage.fillInput('inputNumber', randomNumber);
		formPage.get.inputNumber().should('have.value', randomNumber);
		formPage.fillInput('addAddress', randomAddress);
		formPage.get.addAddress().should('have.value', randomAddress);

		formPage.clickOnRadioBtn('inputGender', randomGender);
		formPage.get.inputCheckGender().eq(randomGender).should('be.checked');
		formPage.clickOnRadioBtn('inputHobbies',randomHobbies);
		formPage.get.inputCheckHobbies().eq(randomHobbies).should('be.checked');

		formPage.selectInputDate();
		formPage.selectMonth();
		formPage.selectYear();
		formPage.selectDay();

		formPage.selectUpPicture();
		cy.readFile('cypress/fixtures/images/upexgalaxy.gif', 'binary').should((buffer) => {
			expect(buffer.length).to.be.gt(1000);
		});
		formPage.clickOnSelectBtn('selectState').then(textState => {
			formPage.clickOnSelectBtn('selectCity').then(textCity => {
				formPage.get.singleValue().first().should('have.text', textState);
				formPage.get.singleValue().last().should('have.text', textCity);
			});
		});

		formPage.selectInputSubject(randomSubject).then(textSubject => {
			formPage.get.inputSubject().should('contain', textSubject);
		});

		formPage.btnSubmit();

		formPage.get.document().should('be.visible').and('have.text', 'Thanks for submitting the form');
		formPage.get.resultFirtsName().should('contain', randomName);
		formPage.get.resultLastName().should('contain', randomLastName);
		formPage.get.resultEmail().should('contain', randomEmail);
		formPage.get.resultGender().invoke('text').then(text => {
			expect(text).to.match(/Male|Female|Other/);});
		formPage.get.resultHobbie().invoke('text').then(text => {
			expect(text).to.match(/Sports|Reading|Music/);});
		formPage.get.resultMobile().should('contain', randomNumber);
		formPage.get.resultPicture().should('contain', 'upexgalaxy.gif');
		formPage.get.resultAddress().should('contain', randomAddress);

	});

});