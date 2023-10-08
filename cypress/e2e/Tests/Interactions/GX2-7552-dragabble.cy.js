import { removeLogs } from '@helper/RemoveLogs';
removeLogs();
import { dragMove } from '@pages/Interactions/GX2-7552-dragabble.page';
import '@4tw/cypress-drag-drop';

describe('GX2-7552-✅-tools-qa-interactions-dragabble', () => {
	beforeEach('Usuario debe estar situado en https://demoqa.com/dragabble', () => {
		cy.visit('/dragabble');
		cy.url().should('contain', 'dragabble');
	});
	it('7553 | TC1: Validar poder movilizar la pestaña hacia alguna direccion', () => {
		dragMove.clickSimple();
		dragMove.get.simple().should('contain.text', 'Simple');
		dragMove.clickDragbox();
		dragMove.get.dragBox().invoke('offset').as('Inicial');
		cy.get('@Inicial').then($inicial => {
			dragMove.get.dragBox().trigger('mousedown', { which: 1 });
			dragMove.get.dragBox().trigger('mousemove', {
				clientX: $inicial.left - 550,
				clientY: $inicial.top + 80,
			});
		});
	});
	it('7553 | TC2: Validar  poder movilizar OnlyX en la posicion X y OnlyY en la posicion Y', () => {
		dragMove.clickAxis();
		dragMove.get.axisRestricted().should('have.text', 'Axis Restricted');
		dragMove.clickOnly();
		dragMove.get.OnlyX().should('have.css', 'top', '0px').and('be.visible');
		dragMove.clickOnlyY();
		dragMove.get.OnlyY().should('have.css', 'left', '0px').and('be.visible');
	});
	it('7553 | TC3: Validar  poder movilizar  el cuadro y el texto dentro de su caja contenedora', () => {
		dragMove.clickContenedor();
		dragMove.get.restricted().should('have.text', 'Container Restricted');
		dragMove.clickContenedorBox();
		dragMove.get.contenedorBox().should('have.css', 'left', '350px').and('be.visible');
		dragMove.clickContenedorParent();
		dragMove.get.contenedorParent().should('have.css', 'top', '86px').and('be.visible');
	});
	it('7553 | TC4: Validar poder movilizar el cursor top, center y bottom dentro de su caja contenedora', () => {
		dragMove.clickCursoStyle();
		dragMove.get.cursoStyle().should('have.text', 'Cursor Style');
		dragMove.clickCursorCenter();
		dragMove.get.cursorCenter().should('have.css', 'top', '90px').and('be.visible');
		dragMove.clickCursorTopLeft();
		dragMove.get.cursorTopLeft().should('have.css', 'top', '51px').and('be.visible');
		dragMove.clickCursorBottom();
		dragMove.get.cursorBottom().should('have.css', 'top', '146px').and('be.visible');
		dragMove.resetCursorCenter();
		dragMove.get.cursorCenter().invoke('css', 'top', '80px').and('be.visible');
		dragMove.resetCursorTopLeft();
		dragMove.get.cursorTopLeft().invoke('css', 'top', '102px').and('be.visible');
		dragMove.resetCursorbottom();
		dragMove.get.cursorBottom().invoke('css', 'top', '242px').and('be.visible');
	});
});
