import { dropDown } from '../../../support/pages/Widgets/GX-30259-Dropdown.Page';

describe('GX-30259 | TS: ✅ToolsQA | Widgets | Dropdown - Select Menu', () => {
	beforeEach('Precondition: Visit website DemoQA', () => {
		cy.visit('https://demoqa.com/select-menu');
	});
	it('30260 | TC01: Validate dropdown "Select Value" shows agrouped options', () => {
		cy.fixture('/data/GX-30259-Dropdown.json').then(data => {
			dropDown.clickSelectValue(); //click to active and show options
			dropDown.get.titleGroup1SelectValue().should('have.text', data.selectValue.group1.titleGroup1);
			dropDown.get.option1Group1SelectValue().should('have.text', data.selectValue.group1.option1);
			dropDown.get.option2Group1SelectValue().should('have.text', data.selectValue.group1.option2);
			dropDown.get.titleGroup2SelectValue().should('have.text', data.selectValue.group2.titleGroup2);
			dropDown.get.option1Group2SelectValue().should('have.text', data.selectValue.group2.option1);
			dropDown.get.option2Group2SelectValue().should('have.text', data.selectValue.group2.option2);
			dropDown.get.rootOptionSelectValue().should('have.text', data.selectValue.outOfGroup.value1);
			dropDown.get.anotherOptionSelectValue().should('have.text', data.selectValue.outOfGroup.value2);
		});
	});
	it('30260 | TC02: Validate choice random option in dropdown "Select Value"', () => {
		cy.fixture('/data/GX-30259-Dropdown.json').then(data => {
			dropDown.clickSelectValue(); //click to active and show options
			dropDown.get.allOptionsSelectValue().eq(Cypress._.random(0, 5)).click();
			dropDown.get.valueSelectedSelectValue().eq(0).should('contain.text', 'option');
		});
	});
	it.only('30260 | TC03: Validate choice a random option in dropdown "Select One"', () => {
		cy.fixture('/data/GX-30259-Dropdown.json').then(data => {
			dropDown.clickSelectOne();
		});
	});
});
import { removeLogs } from '@helper/RemoveLogs';
removeLogs();
