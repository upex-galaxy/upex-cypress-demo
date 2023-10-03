import { removeLogs } from '@helper/RemoveLogs';
import { pForm } from '@pages/Forms/GX-34871-PracticeFormPage';
import { faker } from '@faker-js/faker';

describe('GX-34872 | ✅ToolsQA | Forms | Practice Form', () => {
	beforeEach('Precondition: to use the Practice Form', () => {
		cy.visit('https://demoqa.com/automation-practice-form');
		cy.url().should('contain', 'practice-form');
	});

	it('GX-34871 | TC01: Validate that a popup displays all the valid data', () => {
		const formData = pForm.fillAndGetInputData();
		const check = [
			{ data: 'firstNameInput', value: formData.firstName },
			{ data: 'lastNameInput', value: formData.lastName },
			{ data: 'emailInput', value: formData.email },
			{ data: 'mobileInput', value: formData.mobile },
			{ data: 'currentAddressInput', value: formData.address },
		];
		check.forEach(({ data, value }) => {
			pForm.get[data]().should('have.value', value);
		});

		pForm
			.fillAndSelectSubject()
			.invoke('text')
			.then(subjectName => {
				cy.log(subjectName);
				pForm.get.subjectsContainer().should('contain.text', subjectName);
			});

		pForm
			.selectState()
			.invoke('text')
			.then(state => {
				cy.log(state);
				pForm.get.state().should('be.visible');
			});

		pForm
			.selectCity()
			.invoke('text')
			.then(city => {
				cy.log(city);
				pForm.get.city().should('be.visible');
			});

		// const genders = ['Male', 'Female', 'Other'];
		// const randomGender = genders[Math.floor(Math.random() * genders.length)];
		// pForm.selectGender(randomGender);
		// switch (randomGender) {
		// 	case 'Male':
		// 		pForm.get.maleGenderInput().should('be.checked');
		// 		pForm.get.femaleGenderInput().should('not.be.checked');
		// 		pForm.get.otherGenderInput().should('not.be.checked');
		// 		break;
		// 	case 'Female':
		// 		pForm.get.maleGenderInput().should('not.be.checked');
		// 		pForm.get.femaleGenderInput().should('be.checked');
		// 		pForm.get.otherGenderInput().should('not.be.checked');
		// 		break;
		// 	case 'Other':
		// 		pForm.get.maleGenderInput().should('not.be.checked');
		// 		pForm.get.femaleGenderInput().should('not.be.checked');
		// 		pForm.get.otherGenderInput().should('be.checked');
		// 		break;
		// 	default:
		// 		throw new Error('Not valid gender ' + randomGender);
		// }
	});
});

removeLogs();
