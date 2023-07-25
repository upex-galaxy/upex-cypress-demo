import { removeLogs } from '@helper/RemoveLogs';
removeLogs();
import { Draggable } from '@pages/Interactions/GX2-5094-Draggable.Page';
import the from '@data/GX2-5094-Draggable';

describe('GX2-5094-✅-tools-qa-interactions-dragabble', () => {
	beforeEach('Precondición: encontrarse en la página de Draggable', () => {
		cy.visit('/dragabble');
		cy.url().should('contain', 'dragabble');
	});
	it('5095 | TC1: Validar que que se muestran las pestañas mencionadas dentro de la pagina y se visualiza una a la vez', () => {
		//Tab 1 Simple: Validaremos que sea visible la elección de la pestaña "Simple" y que es por default la que se encuentra activa
		Draggable.get.Tabs().should('contain.text', the.Tabs.Tab1);
		Draggable.get.TabSimple().should('contain.class', 'active');
		// Tab 2 Axis Restricted: Validaremos que sea visible la elección de la pestaña "Axis Restricted", que no está activa y luego que la seleccionemos se encuentre activa.
		Draggable.get.Tabs().should('contain.text', the.Tabs.Tab2);
		Draggable.get.TabAxisRestricted().should('not.contain.class', 'active');
		Draggable.SelectTabAxisRestricted();
		Draggable.get.TabAxisRestricted().should('contain.class', 'active');
		// Tab 3 Contain Restricted: Validaremos que sea visible la elección de la pestaña "Contain Restricted", que no está activa y luego que la seleccionemos se encuentre activa.
		Draggable.get.Tabs().should('contain.text', the.Tabs.Tab3);
		Draggable.get.TabContainerRestricted().should('not.contain.class', 'active');
		Draggable.SelectTabContainerRestricted();
		Draggable.get.TabContainerRestricted().should('contain.class', 'active');
		// Tab 4 Cursor Style: Validaremos que sea visible la elección de la pestaña "Cursor Style", que no está activa y luego que la seleccionemos se encuentre activa.
		Draggable.get.Tabs().should('contain.text', the.Tabs.Tab4);
		Draggable.get.TabCursorStyle().should('not.contain.class', 'active');
		Draggable.SelectTabCursorStyle();
		Draggable.get.TabCursorStyle().should('contain.class', 'active');
	});
	it('5095 | TC2: Validar mover aleatoriamente recuadrado punteado “Drag me” de la pestaña “Simple”', () => {
		// Se valida que el Posicionamiento inicial es "0" y que sea visible
		Draggable.get.DragMe().should('have.css', 'left', `${0}px`).and('be.visible');
		Draggable.get.DragMe().should('have.css', 'top', `${0}px`);
		// Se crean coordenadas random
		const X = Cypress._.random(-300, 600);
		const Y = Cypress._.random(-300, 600);
		cy.log(X, Y);
		// Se mueve el "Drag me" y se valida su nuevo posicionamiento
		Draggable.MoveDragMe(X, Y);
		Draggable.get.DragMe().should('have.css', 'left', `${X}px`);
		Draggable.get.DragMe().should('have.css', 'top', `${Y}px`);
	});
	it('5095 | TC3: Validar mover aleatoriamente recuadrado punteado “Only X” de la pestaña “Axis Restricted”', () => {
		//Nos ubicamos en la pestaña Axis Restricted
		Draggable.SelectTabAxisRestricted();
		//Se valida que su posicionamiento inicial es "0" y que sea visible "Only X"
		Draggable.get.OnlyX().should('have.css', 'left', `${0}px`).and('be.visible');
		//Se crean coordenadas random
		const X = Cypress._.random(-300, 600);
		cy.log(X);
		// Se mueve "only X" y se valida su nuevo posicionamiento
		Draggable.MoveOnlyX(X);
		Draggable.get.OnlyX().should('have.css', 'left', `${X}px`);
	});
	it('5095 | TC4: Validar mover aleatoriamente recuadrado punteado “Only Y” de la pestaña “Axis Restricted”', () => {
		// Nos ubicamos en la pestaña Axis Restricted
		Draggable.SelectTabAxisRestricted();
		// Se valida que su posicionamiento inicial es "0" y que sea visible "Only Y"
		Draggable.get.OnlyY().should('have.css', 'top', `${0}px`).and('be.visible');
		//Se crean coordenadas random
		const Y = Cypress._.random(-300, 600);
		cy.log(Y);
		// Se mueve "Only Y" y se valida su nuevo posicionamiento
		Draggable.MoveOnlyY(Y);
		Draggable.get.OnlyY().should('have.css', 'top', `${Y}px`);
	});
	it('5095 | TC5: Validar mover aleatoriamente recuadrado “I am contained within the box” dentro del área delimitada en la pestaña “Container Restricted”', () => {
		// Nos ubicamos en la pestaña Container Restricted
		Draggable.SelectTabContainerRestricted();
		//se valida que su posicionamiento inicial es "0"
		Draggable.get.ContainedInTheBox().should('have.css', 'left', `${0}px`);
		Draggable.get.ContainedInTheBox().should('have.css', 'top', `${0}px`);
		// Se crean coordenadas random
		const X = Cypress._.random(0, 674); //Son los limites del cuadro del área delimitada
		const Y = Cypress._.random(0, 107); //Son los limites del cuadro del área delimitada
		cy.log(X, Y);
		// Se mueve “I'm contained within the box” y se valida su nuevo posicionamiento
		Draggable.MoveContainedInTheBox(X, Y);
		Draggable.get.ContainedInTheBox().should('have.css', 'left', `${X}px`);
		Draggable.get.ContainedInTheBox().should('have.css', 'top', `${Y}px`);
	});
});
