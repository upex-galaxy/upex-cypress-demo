import { removeLogs } from '@helper/RemoveLogs';
removeLogs();
import { dragMovePage } from '@pages/Interactions/GX2-7552-dragabble.page';
import '@4tw/cypress-drag-drop';

describe('GX2-7552-✅-tools-qa-interactions-dragabble', () => {
	let randomX = Cypress._.random(0, 500);
	let randomY = Cypress._.random(0, 500);
	beforeEach('Usuario debe estar situado en https://demoqa.com/dragabble', () => {
		cy.intercept({ resourceType: /^(xhr|fetch)$/ }, { statusCode: 200, body: { data: 'fake data' } });
		cy.visit('/dragabble');
		cy.url().should('contain', 'dragabble');
	});
	it('7553 | TC1: Validar poder movilizar la pestaña hacia alguna direccion', () => {
		dragMovePage.clickTabSimple();
		dragMovePage.clickDragbox(randomX, randomY);
		dragMovePage.get.dragBox().move({ deltaX: randomX, deltaY: randomY });

		dragMovePage.get.dragBox().should('not.have.css', 'left', `${0}px`);
	});

	it('7553 | TC2: Validar  poder movilizar OnlyX en la posicion X y OnlyY en la posicion Y', () => {
		dragMovePage.clickTabAxis();
		dragMovePage.clickOnlyX(randomX);
		dragMovePage.get.OnlyX().move({ deltaX: randomX });
		dragMovePage.get.OnlyX().should('have.css', 'top', `${0}px`);
		dragMovePage.clickOnlyY(randomY);
		dragMovePage.get.OnlyY().move({ deltaY: randomY });
		dragMovePage.get.OnlyY().should('have.css', 'left', `${0}px`);
	});
	it('7553 | TC3: Validar  poder movilizar  el cuadro y el texto dentro de su caja contenedora', () => {
		dragMovePage.clickContenedor();
		dragMovePage.clickContenedorBox(randomX, randomY);
		dragMovePage.get.containedBox().move({ deltaX: randomX, deltaY: randomY });
		dragMovePage.get.containedBox().should('not.have.css', 'left', 'auto').and('not.have.css', 'top', 'auto');
		dragMovePage.clickContenedorParent(randomX, randomY);
		let X = Cypress._.random(0, 13);
		let Y = Cypress._.random(0, 86);
		cy.log(X);
		dragMovePage.get.containedParent().move({ deltaX: X, deltaY: Y });
		dragMovePage.get.containedParent().should('not.have.css', 'left', '0px').and('not.have.css', 'top', '0px');
	});
	it('7553 | TC4: Validar poder movilizar el cursor top, center y bottom dentro de su caja contenedora', () => {
		dragMovePage.clickCursoStyle();
		dragMovePage.clickCursorCenter();
		dragMovePage.get.cursorCenter().move({ deltaX: '250px', deltaY: '300px' });

		dragMovePage.get.cursorCenter().should('not.have.css', 'left', `${0}px`).and('not.have.css', 'top', `${0}px`);
		dragMovePage.clickCursorTopLeft(randomX, randomY);
		dragMovePage.get.cursorTopLeft().move({ deltaX: randomX, deltaY: randomY });

		dragMovePage.get.cursorTopLeft().should('not.have.css', 'left', `${0}px`).and('not.have.css', 'top', `${0}px`);
		let X = Cypress._.random(0, 1000);
		let Y = Cypress._.random(0, 500);

		dragMovePage.clickCursorBottom(X, Y);
		dragMovePage.get.cursorBottom().move({ deltaX: X, deltaY: Y });
	});
});
