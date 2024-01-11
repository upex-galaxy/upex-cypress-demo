describe('USGX3-1203 | TS:ToolsQA | Interactions | Dragabble', () => {
	beforeEach('El usuario se debe ubicar en la pagina de demoQA', () => {
		cy.visit('https://demoqa.com/dragabble');
		cy.get('#dragBox').should('exist').and('be.visible');
	});
	it('25131|TC1: Validar que al cambiar entre pestañas, la pestaña previamente mostrada se oculte.', () => {
		cy.get('#draggableExample-tab-simple').should('have.length', 1);
		cy.get('.nav-item').each($tab => {
			const tabText = $tab.text();
			cy.wrap($tab).click();
			cy.get('.nav-item.nav-link.active').should('have.length', 1);
			cy.contains('.nav-item.nav-link.active', tabText).should('exist');
			cy.get('.nav-item').not('.nav-item.nav-link.active').should('not.contain', tabText);
		});
	});
	it('4011| TC1: Validar mover el botón "Drag me" de manera aleatoria', () => {
		const deltaX = Cypress._.random(0, 400);
		const deltaY = Cypress._.random(0, 400);
		cy.log(`DeltaX: ${deltaX}`);
		cy.log(`DeltaY: ${deltaY}`);
		cy.get('#dragBox').move({ deltaX, deltaY, force: true });
		cy.get('#dragBox').should('have.css', 'left', `${deltaX}px`);
		cy.get('#dragBox').should('have.css', 'top', `${deltaY}px`);
	});
	it.only('4011 | TC2: Validar mover horizontalmente  el botón "X" de manera aleatoria.', () => {
		const X = Cypress._.random(0, 60);
		cy.log(X);
		cy.get('#draggableExample-tab-axisRestriction').click();
		cy.get('#restrictedX').should('have.text', 'Only X');
		cy.get('#restrictedX').move({ X, force: true });
		cy.get('#restrictedX').should('have.css', 'left', `${X}px`);
	});
});

import { removeLogs } from '@helper/RemoveLogs';
removeLogs();
