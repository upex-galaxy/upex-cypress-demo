import { Dragabble } from '@pages/Interactions/dragabble.page';
import { removeLogs } from '@helper/RemoveLogs';
describe('✅ToolsQA | Interactions | Dragabble', () => {
	beforeEach('Precondition', () => {
		cy.visit('dragabble');
		cy.url().should('contain', 'dragabble');
	});

	it('4011 | TC1: Validar mover el botón "Drag me" de manera aleatoria.', () => {
		const deltaX = Cypress._.random(0, 300);
		cy.log(deltaX);
		const deltaY = Cypress._.random(0, 300);
		cy.log(deltaY);
		Dragabble.move(deltaX, deltaY);
		Dragabble.get.boxDragMe().should('have.css', 'left', `${deltaX}px`);
		Dragabble.get.boxDragMe().should('have.css', 'top', `${deltaY}px`);
	});
	it('4011 | TC2: Validar mover el botón "X" de manera aleatoria.', () => {
		Dragabble.clickAxis();
		Dragabble.get.boxX().should('have.attr', 'id', 'restrictedX').and('be.visible');
		const deltaX = Cypress._.random(0, 300);
		const deltaY = 0;
		cy.log(deltaX);
		Dragabble.moveOnlyX(deltaX, deltaY);
		Dragabble.get.boxX().should('have.css', 'left', `${deltaX}px`);
	});
	it('4011 | TC3; Validar mover el botón "Y" de manera aleatoria.', () => {
		Dragabble.clickAxis();
		Dragabble.get.boxY().should('have.attr', 'id', 'restrictedY').and('be.visible');
		const deltaX = 0;
		cy.log(deltaX);
		const deltaY = Cypress._.random(0, 300);
		cy.log(deltaY);
		Dragabble.moveOnlyY(deltaX, deltaY);
		Dragabble.get.boxY().should('have.css', 'top', `${deltaY}px`);
	});
});
removeLogs();
