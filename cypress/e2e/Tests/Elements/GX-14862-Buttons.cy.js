import { Clicking } from '../../../support/pages/clickButtons.Page';

const page = Cypress.env('endpoint').buttons;

// const fixture1 from "../../"

describe('GX-14862 | ToolsQA | Elements | Buttons', () => {
	beforeEach('Usuario debe estar en la pagina de element/buttons', () => {
		cy.visit('https://demoqa.com/buttons');
		cy.url().should('contain', page);
	});

	it('14863 | TC1: Validate message “You have done a double click“ should be displayed when double click in the Double Click Me button', () => {
		Clicking.PerformDoubleClick();
		cy.get('#doubleClickMessage').should('have.text', 'You have done a double click'); //obtain the element where the message is displayed and assert
	});

	it('14863 | TC2: Validate message “You have done a right click“ should be displayed when right click in the Right Click Me button', () => {
		Clicking.DoRightClick();
		cy.get('#rightClickMessage').should('include.text', 'right'); //obtain the element where the message is displayed and assert
	});

	it('14863 | TC3: Validate message “You have done a Dynamic click“ should be displayed when click in the Click Me button', () => {
		Clicking.SoloClick();
		cy.get('#dynamicClickMessage').should('exist').and('contain', 'You have done a dynamic click'); //obtain the element where the message is displayed and assert
	});
});

import { removeLogs } from '@helper/RemoveLogs';
removeLogs();
