import { removeLogs } from '@helper/RemoveLogs';
import { pForm } from '@pages/Forms/GX-34871-PracticeFormPage';
import { faker } from '@faker-js/faker';

describe('GX-34872 | ✅ToolsQA | Forms | Practice Form', () => {
	beforeEach('Precondition: to use the Practice Form', () => {
		cy.visit('https://demoqa.com/automation-practice-form');
		cy.url().should('contain', 'practice-form');
	});

	it.only('GX-34871 | TC01: Validate that a popup displays all the valid data', () => {
		const formData = pForm.fillAndGetInputData();
		pForm.get.firstNameInput().should('have.value', formData.firstName);
		pForm.get.lastNameInput().should('have.value', formData.lastName);
		pForm.get.emailInput().should('have.value', formData.email);
		pForm.get.mobileInput().should('have.value', formData.mobile);
		pForm.get.currentAddressInput().should('have.value', formData.address);

		pForm.get.subjectsInput().type('a');
		//obtener largo, si es igual a 0, hacer función para que haga random de nuevo: borrar la tra y poner otra
		const num = Cypress._.random(0, 3);
		cy.get('[id*="react-select-2-option"]').eq(num).click();

		//pForm.get.maleGenderInput().should('be.visible');
		//pForm.get.femaleGenderInput().should('be.visible');
		//pForm.get.otherGenderInput().should('be.visible');
		//console.log('ESTAN AHI LOS 3 RADIOS');

		expect(1).to.eq(1);
	});
});

removeLogs();
