import { removeLogs } from '@helper/RemoveLogs';
import { pForm } from '@pages/Forms/GX-34871-PracticeFormPage';
//import { faker } from '@faker-js/faker';

describe('GX-34872 | ✅ToolsQA | Forms | Practice Form', () => {
	beforeEach('Precondition: to use the Practice Form', () => {
		cy.visit('https://demoqa.com/automation-practice-form');
		cy.url().should('contain', 'practice-form');
	});

	it('GX-34871 | TC01: Validate that a popup displays all the valid data', () => {
		// const formData = pForm.fillAndGetInputData();
		// const check = [
		// 	{ data: 'firstNameInput', value: formData.firstName },
		// 	{ data: 'lastNameInput', value: formData.lastName },
		// 	{ data: 'emailInput', value: formData.email },
		// 	{ data: 'mobileInput', value: formData.mobile },
		// 	{ data: 'currentAddressInput', value: formData.address },
		// ];
		// check.forEach(({ data, value }) => {
		// 	pForm.get[data]().should('have.value', value);
		// });

		// pForm.selectGender();
		// pForm.get.gender().then(select => {
		// 	expect(select.text()).to.contain(Cypress.env('genderSelected'));
		// });

		// pForm.SelectHobbies();
		// pForm.get.hobbies().then(selectHobbie => {
		// 	expect(selectHobbie.text()).to.contain(Cypress.env('hobbiesSelected'));
		// });

		// pForm.uploadPicture();
		// pForm.get.pictureButton().should('contain.value', 'upexlogo.png');

		// pForm
		// 	.fillAndSelectSubject()
		// 	.invoke('text')
		// 	.then(subjectName => {
		// 		cy.log(subjectName);
		// 		pForm.get.subjectsContainer().should('contain.text', subjectName);
		// 	});

		pForm.selectBirthDay();

		// pForm
		// 	.selectState()
		// 	.invoke('text')
		// 	.then(state => {
		// 		cy.log(state);
		// 		pForm.get.state().should('be.visible');
		// 	});

		// pForm
		// 	.selectCity()
		// 	.invoke('text')
		// 	.then(city => {
		// 		cy.log(city);
		// 		pForm.get.city().should('be.visible');
		// 	});

		// pForm.submitForm();
		// pForm.get.popup().should('contain.text', 'Thanks for submitting the form');
	});
});

removeLogs();
