import { removeLogs } from '@helper/RemoveLogs';
import { elementbuttons } from '@pages/Elements/GX-33587-elementsButtons.page';

describe('GX-33587-🪶ToolsQA | Elements | Buttons', () => {
	beforeEach('Visitar Demo QA', () => {
		cy.visit('/buttons');
	});

	it('33588 | TC1: Validar desplegar mensaje al hacer doble click izquierdo en el botón “Double Click Me”.', () => {
		elementbuttons.get.firstButton().dblclick();
		elementbuttons.get.firstMessage().should('have.text', 'You have done a double click');
	});

	it('33588 | TC2: Validar desplegar mensaje al hacer click derecho en el botón “Right Click Me“.', () => {
		elementbuttons.get.secondButton().rightclick();
		elementbuttons.get.secondMessage().should('have.text', 'You have done a right click');
	});

	it('33588 | TC3: Validar desplegar mensaje al hacer click izquierdo en el botón “Click Me“.', () => {
		elementbuttons.get.thirdButton().click();
		elementbuttons.get.thirdMessage().should('have.text', 'You have done a dynamic click');
	});
	it('33588 | TC4: Validar NO desplegar mensaje al hacer un click izquierdo en el botón "Double Click Me"', () => {
		elementbuttons.get.firstButton().click();
		elementbuttons.get.firstMessage().should('not.exist');
	});
	it('33588 | TC5: Validar NO desplegar mensaje al hacer click izquierdo en el botón “Right Click Me“', () => {
		elementbuttons.get.secondButton().click();
		elementbuttons.get.secondMessage().should('not.exist');
	});
	it('33588 | TC6: Validar NO desplegar mensaje al hacer click derecho en el botón “Click Me“', () => {
		elementbuttons.get.thirdButton().rightclick();
		elementbuttons.get.thirdMessage().should('not.exist');
	});
});

removeLogs();
