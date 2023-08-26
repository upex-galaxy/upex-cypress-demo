import { removeLogs } from '@helper/RemoveLogs';
removeLogs();
import { radioBtn } from '@pages/Elements/GX-29673-RadioButtons';
describe('US GX-29673 | ToolsQA | Elements | Radio Buttons', () => {
	beforeEach('Precondition', () => {
		const endpoint = 'radio-button';
		cy.visit(`/${endpoint}`);
	});
	it('29676 | TC1: Validate visualize label YES when radio button "YES" is selected', () => {
		radioBtn.clickYes();
		radioBtn.get.message().should('have.text', 'Yes');
	});
	it('29676 | TC2: Validate visualize label impressive when radio button "IMPRESSIVE" is selected', () => {
		radioBtn.clickImpressive();
		radioBtn.get.message().should('have.text', 'Impressive');
	});
	it('29676 | TC3: Validate label NO not to be selected ', () => {
		radioBtn.get.noRadio().should('not.be.enabled');
	});
});
