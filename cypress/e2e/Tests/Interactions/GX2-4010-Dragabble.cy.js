import { Dragabble } from '@pages/Interactions/GX2-4010-dragabble.page';
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
		cy.log(deltaX);
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
	it.only('4011 | TC6:Validar mover la caja "i will always stick to the center".', () => {
		Dragabble.clickStyle();
		Dragabble.get.bttnStyle().should('have.class', 'active');
		Dragabble.getObjectPosition1().then(initialPosition => {
			cy.log(initialPosition);
			Dragabble.moveObjectCenter(20, 90);
			Dragabble.getObjectPosition1().then(finalPosition => {
				cy.log(finalPosition);
				Dragabble.get.boxCenter().should('exist');
			});
		});
	});
	// it.only('4011 | TC7: Validar mover la caja "My cursor is at top left"', () => {
	// });
});
removeLogs();
