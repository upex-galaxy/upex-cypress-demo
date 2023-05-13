/// <reference types="cypress"/>

import { removeLogs } from '@helper/RemoveLogs';
removeLogs();
import { Clicking } from '@pages/clickButtons.Page';

describe('GX-15351 | ToolsQA | Elements | Buttons', () => {

  beforeEach('User should visit the page Elements/Buttons', () => {
		cy.visit('https://demoqa.com/buttons');
		cy.url().should('contains', 'button');
	});

	it('15358 | TC1:  Validate “Double Click” button is clicked', () => {

		Clicking.PerformDoubleClick();
		Clicking.getMessage2Click().should('have.text', 'You have done a double click');
	});

	it('15358 | TC2:  Validate  “Right Click” button is clicked', () => {
		Clicking.DoRightClick();
		Clicking.getRightClickMsg().should('have.text', 'You have done a right click');
	});

	it('15358 | TC3:  Validate  “Click” button is clicked', () => {
		Clicking.SoloClick();
		Clicking.getClickMsg().should('have.text', 'You have done a dynamic click');
	});
});

