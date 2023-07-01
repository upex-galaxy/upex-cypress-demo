describe('✅ToolsQA | Elements | Buttons', () => {
	beforeEach('precondición: visitar página Demo QA', () => {
		cy.visit('https://demoqa.com/buttons');
		cy.url().should('contain', 'buttons');
	});

	it('21734 | TC1: Validar funcionamiento del botón “double click me”', () => {
		cy.get('#doubleClickBtn').dblclick();
		cy.get('#doubleClickMessage').should('contain', 'You have done a double click');
		//cy.get('[class="btn btn-primary"]').eq(0).dblclick();
	});

	it('21734 | TC2: Validar funcionamiento del botón "right click me"', () => {
		cy.get('#rightClickBtn').rightclick();
		cy.get('#rightClickMessage').should('contain', 'You have done a right click');
	});

	it('21734 | TC3: Validar funcionamiento del botón “click me”', () => {
		cy.get('[class$="btn-primary"]').eq(2).click();
		cy.get('#dynamicClickMessage').should('contain', 'You have done a dynamic click');
	});

	it('21734 | TC4: Validar que NO aparezca mensaje al hacer sólo un "click" en el botón “double click me”', () => {
		cy.get('#doubleClickBtn').click();
		cy.get('#doubleClickMessage').should('not.exist');
	});

	it('21734 | TC5: Validar que NO aparezca mensaje "you have done a right click" al hacer click izquierdo en "Right Click me button"', () => {
		cy.get('#rightClickBtn').click();
		cy.get('#rightClickMessage').should('not.exist');
	});

	it('21734 | TC6: Validar que NO aparezca mensaje "you have done a dynamic click" al hacer click derecho en "click button"', () => {
		cy.get('[class$="btn-primary"]').eq(2).rightclick();
		cy.get('#dynamicClickMessage').should('not.exist');
	});

	it('21734 | TC7: Validar que NO aparezca mensaje "you have done a right click" al hacer doble click "Right Click me button"', () => {
		cy.get('#rightClickBtn').dblclick();
		cy.get('#rightClickMessage').should('not.exist');
	});
});

import { removeLogs } from '@helper/RemoveLogs';
removeLogs();
