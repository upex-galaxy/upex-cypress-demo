import { Clicking } from '../../../support/pages/clickButtons.Page';

const page = Cypress.env('endpoint').buttons;

// const fixture from "../../../fixtures/DOM/MessageBtn.json";

describe('GX-14862 | ToolsQA | Elements | Buttons', () => {
	beforeEach('Usuario debe estar en la pagina de element/buttons', () => {
		cy.visit('https://demoqa.com/buttons');
		cy.url().should('contain', page);
	});

	it('14863 | TC1: Validate message “You have done a double click“ should be displayed when double click in the Double Click Me button', () => {
		Clicking.PerformDoubleClick();
		Clicking.getMessage2Click();
		cy.should('have.text', 'You have done a double click').and('be.visible');
	});

	it('14863 | TC2: Validate message “You have done a right click“ should be displayed when right click in the Right Click Me button', () => {
		Clicking.DoRightClick();
		Clicking.getRightClickMsg();
		cy.should('include.text', 'right'); //obtain the element where the message is displayed and assert
	});

	it('14863 | TC3: Validate message “You have done a Dynamic click“ should be displayed when click in the Click Me button', () => {
		Clicking.SoloClick();
		Clicking.getClickMsg();
		cy.should('exist').and('contain', 'You have done a dynamic click'); //obtain the element where the message is displayed and assert
	});
});

import { removeLogs } from '@helper/RemoveLogs';
removeLogs();
