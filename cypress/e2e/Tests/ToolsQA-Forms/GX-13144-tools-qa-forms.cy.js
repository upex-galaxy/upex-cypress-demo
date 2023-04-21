import { removeLogs } from '@helper/RemoveLogs';
import { toolsForms } from '@pages/ToolsForms.Page';

describe('✅ToolsQA | Forms | Practice Form', () => {
	beforeEach('Precondition: be located in the page', () => {
		cy.visit('https://demoqa.com/automation-practice-form');
		cy.url().should('contain', 'automation-practice-form');
	});

	it('13145 | TC1: Validate  a popup appears with information uploaded when the data is submitted if all fields are filled correctly', () => {
		toolsForms.randomData();
		toolsForms.selectBirth();
		toolsForms.selectHobbie();
		cy.fixture('data/downloadUpload').then(the => {
			toolsForms.selectUploadPicture(the.relativePathUploadFile);
		});
		toolsForms.selectGender();
		toolsForms.selectState();
		toolsForms.selectCity();
		//assertion
		expect(toolsForms.elements.firstNameInput().invoke('val')).to.not.be.empty;
		toolsForms.elements.lastNameInput().invoke('val').should('not.be.empty');
		toolsForms.elements.emailInput().invoke('val').should('not.be.empty');
		toolsForms.elements.radioButton1().should('have.value', 'Male');
		toolsForms.elements.phoneNumberInput().invoke('val').should('match', /^[0-9]+$/);
		toolsForms.elements.datePicker().should('exist');
		toolsForms.elements.subjectsInput().should('exist');
		toolsForms.elements.hobbiesCheck2().should('have.value', '2');
		toolsForms.elements.addressInput().invoke('val').should('not.be.empty');
		toolsForms.elements.stateSelect().should('contain', 'NCR');
		toolsForms.elements.citySelect().should('contain', 'Delhi');

		toolsForms.submitCreate();
		toolsForms.elements.submitButton().should('exist');
		
		toolsForms.closeClick();
		toolsForms.elements.closeButton().should('exist');
	});

	it('13145 | TC2:Validate no message is displayed after submitting and the field turns red if at least one required field is empty', () => {
		toolsForms.submitCreate();
		toolsForms.elements.firstNameInput().should('have.css', 'border-color');
		toolsForms.elements.lastNameInput().should('have.css', 'border-color');
		toolsForms.elements.radioButton1().should('have.css', 'border-color');
		toolsForms.elements.radioButton2().should('have.css', 'border-color');
		toolsForms.elements.radioButton3().should('have.css', 'border-color');
	});

});

removeLogs();