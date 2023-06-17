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
	it('4011 | TC3: Validar mover el botón "Y" de manera aleatoria.', () => {
		Dragabble.clickAxis();
		Dragabble.get.boxY().should('have.attr', 'id', 'restrictedY').and('be.visible');
		const deltaX = 0;
		cy.log(deltaX);
		const deltaY = Cypress._.random(0, 300);
		cy.log(deltaY);
		Dragabble.moveOnlyY(deltaX, deltaY);
		Dragabble.get.boxY().should('have.css', 'top', `${deltaY}px`);
	});
	it('4011 | TC4: Validar botón "i am contained within the box" se mueva en un espacio delimitado.', () => {
		Dragabble.clickContainer();
		//objeto
		Dragabble.moveBox(1, 1);
		Dragabble.getObjectPosition().then(initialPosition => {
			cy.log(initialPosition);
			Dragabble.moveBox(680, 110); // moviendo más allá de la caja!
			Dragabble.getObjectPosition().then(finalPosition => {
				cy.log(finalPosition);
				expect(initialPosition).not.equal(finalPosition);
				Dragabble.get.boxContainer().within(() => {
					Dragabble.get.boxInsideContainer().should('exist');
				});
			});
		});
	});
	it('4011 | TC5: Validar botón "i am contained within my parent" se mueva en un espacio determinado. ', () => {
		Dragabble.clickContainer();
		//objeto
		Dragabble.moveBox2(1, 1);
		Dragabble.getObjectPositionB().then(initialPosition => {
			cy.log(initialPosition);
			Dragabble.moveBox2(14, 90);
			Dragabble.getObjectPositionB().then(finalPosition => {
				cy.log(finalPosition);
				expect(initialPosition).not.equal(finalPosition);
				Dragabble.get.cajaBContenedora().within(() => {
					Dragabble.get.elementoCajaB().should('exist');
				});
			});
		});
	});
	it.only('Validar mover la caja "i will always stick to the center".', () => {
		Dragabble.clickStyle();
		Dragabble.get.bttnStyle().should('have.class', 'active');
		const deltaX = Cypress._.random(0, 90);
		cy.log(deltaX);
		const deltaY = Cypress._.random(0, 90);
		cy.log(deltaY);
		Dragabble.MoveBoxCenter(deltaX, deltaY);
		Dragabble.get.boxCenter().should('have.css', '', `${deltaX}px`);
		//Dragabble.get.boxCenter().should('have.css', 'top', `${deltaY}px`);
	});
	it('Validar mover la caja "My cursor is at top left"', () => {
		Dragabble.clickStyle();
		Dragabble.get.boxTop().should('have.attr', 'id', 'cursorTopLeft').and('be.visible');
		const deltaX = Cypress._.random(0, 600);
		cy.log(deltaX);
		const deltaY = 0;
		cy.log(deltaY);
		Dragabble.moveBoxTop(deltaX, deltaY);
		Dragabble.get.boxCursor().should('have.css', 'left', `${deltaX}px`);
	});
});
removeLogs();
