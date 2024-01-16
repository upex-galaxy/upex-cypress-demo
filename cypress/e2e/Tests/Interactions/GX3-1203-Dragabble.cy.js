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
	it('1204| TC2: Validar mover el botón "Drag me" de manera aleatoria', () => {
		const deltaX = Cypress._.random(0, 400);
		const deltaY = Cypress._.random(0, 400);
		cy.log(`DeltaX: ${deltaX}`);
		cy.log(`DeltaY: ${deltaY}`);
		cy.get('#dragBox').move({ deltaX, deltaY, force: true });
		cy.get('#dragBox').should('have.css', 'left', `${deltaX}px`);
		cy.get('#dragBox').should('have.css', 'top', `${deltaY}px`);
	});
	it('1204 | TC3: Validar mover horizontalmente  el botón "X" de manera aleatoria.', () => {
		const deltaX = Cypress._.random(-30, 50);
		const deltaY = 0;
		cy.get('#draggableExample-tab-axisRestriction').click();
		cy.get('#restrictedX').should('have.text', 'Only X');
		cy.get('#restrictedX').move({ deltaX, deltaY, force: true });
		cy.get('#restrictedX').should('have.css', 'left', `${deltaX}px`);
	});
	it('1204 | TC4: Validar mover horizontalmente  el botón "Y" de manera aleatoria.', () => {
		const deltaY = Cypress._.random(-40, 200);
		const deltaX = 0;
		cy.get('#draggableExample-tab-axisRestriction').click();
		cy.get('#restrictedY').should('have.text', 'Only Y');
		cy.get('#restrictedY').move({ deltaX, deltaY, force: true });
		cy.get('#restrictedY').should('have.css', 'top', `${deltaY}px`);
	});
	it('1204 | TC5: Validar que el  botón "i am contained within the box" dentro del contenedor', () => {
		const deltaX = Cypress._.random(0, 165);
		const deltaY = Cypress._.random(0, 106);

		cy.get('#draggableExample-tab-containerRestriction').click();
		cy.get('.draggable.ui-widget-content.ui-draggable').should('have.text', "I'm contained within the box");
		cy.get('.draggable.ui-widget-content.ui-draggable').move({ boxX: deltaX, boxY: deltaY });
	});
	it('1204| TC6: Validar mover el cuadro "I will always stick to the center” de la pestaña Cursor Style”', () => {
		const deltaX = Cypress._.random(0, 400);
		const deltaY = Cypress._.random(0, 400);
		cy.get('#draggableExample-tab-cursorStyle').click();
		cy.get('#cursorCenter').move(deltaX, deltaY);
		cy.get('#cursorCenter').should('have.css', 'cursor', 'move');
	});
	it.only('1204| TC7: Validar arrastrar el cuadro "My cursor is at top left” de la pestaña Cursor Style”', () => {
		const deltaX = Cypress._.random(0, 400);
		const deltaY = Cypress._.random(0, 400);
		cy.get('#draggableExample-tab-cursorStyle').click();
		cy.get('#cursorTopLeft').move(deltaX, deltaY);
		cy.get('body').should('have.css', 'cursor', 'crosshair');
	});
	it('1204 | TC8: Validar arrastrar el cuadro "My cursor is at bottom” de la pestaña Cursor Style”', () => {
		const deltaX = Cypress._.random(0, 400);
		const deltaY = Cypress._.random(0, 400);
		cy.get('#draggableExample-tab-cursorStyle').click();
		cy.get('#cursorBottom').move(deltaX, deltaY);
		cy.get('#cursorBottom').should('have.css', 'cursor', 'auto');
	});
});

import { removeLogs } from '@helper/RemoveLogs';
removeLogs();
