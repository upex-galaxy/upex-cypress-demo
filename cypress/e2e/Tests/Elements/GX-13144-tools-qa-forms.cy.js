import { removeLogs } from '@helper/RemoveLogs';
//import { faker } from '@faker-js/faker';
import { toolsForms } from '@pages/ToolsForms.Page';

describe('✅ToolsQA | Forms | Practice Form', () => {
	beforeEach('Precondition: be located in the page', () => {
		cy.visit('https://demoqa.com/automation-practice-form');
		cy.url().should('contain', 'automation-practice-form');
	});

	it('13145 | TC1: Validate  a popup appears with information uploaded when the data is submitted if all fields are filled correctly', () => {
		toolsForms.randomData();
		//assertion
		// toolsForms.elements.firstNameInput().should('not.be.empty');
		// toolsForms.elements.lastNameInput().should('not.be.empty');
		// toolsForms.elements.emailInput().should('not.be.empty');
		// toolsForms.elements.phoneNumberInput().should('have.value', /^[0-9]+$/);
		//toolsForms.elements.dataPicker.should('exist');
		// toolsForms.elements.subjectsInput().should('contain', 'not.be.empty');

		

		toolsForms.selectHobbie();
		//toolsForms.elements.hobbiesCheck2().should('contain', 'Reading');

		cy.fixture('data/downloadUpload').then(the => {
			toolsForms.selectUploadPicture(the.relativePathUploadFile);
			//assertion
		});
		toolsForms.selectGender();
		//toolsForms.elements.radioButton1().should('contain', 'Male');
		
		toolsForms.selectState();
		//toolsForms.elements.stateSelect().should('contain', 'NCR');
		
		toolsForms.selectCity();
		//toolsForms.elements.citySelect().should('contain', 'Delhi');

		toolsForms.submitCreate();
		//toolsForms.elements.submitButton().should('exist');

		toolsForms.closeClick();
		//toolsForms.elements.closeButton().should('exist');	
		
	});

	// it('13145 | TC2: Validate no message is displayed after submitting and the field turns red if First name field is empty', () => {
	// 	toolsForms.fillStudentForm();
	// });

	// it('13145 | TC3: Validate no message is displayed after submitting and the field turns red if Last name field is empty', () => {
	// 	toolsForms.fillStudentForm();	
	// });

	// it('13145 | TC4: Validate no message is displayed after submitting and the field turns red if Email field is invalid', () => {
	// 	toolsForms.fillStudentForm();	
	// });

	// it('13145 | TC5: Validate no message is displayed after submitting if Email field is empty', () => {
	// 	toolsForms.fillStudentForm();	
	// });

	// it('13145 | TC6: Validate no message is displayed after submitting and the field turns red if Mobile number field is invalid', () => {
	// 	toolsForms.fillStudentForm();	
	// });
	// it('13145 | TC7: Validate a popup appears with the information when  a user makes clicks on the date and chosen the date of birth', () => {
	// 	toolsForms.fillStudentForm();	
	// });
	// it('13145 | TC8: Validate no message is displayed after submitting if Subjects field is empty', () => {
	// 	toolsForms.fillStudentForm();	
	// });
	// it('13145 | TC9: Validate no message is displayed after submitting and the field turns red if Current address field is empty', () => {
	// 	toolsForms.fillStudentForm();	
	// });

});

removeLogs();