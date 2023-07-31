import { removeLogs } from '@helper/RemoveLogs';
removeLogs();
import { Draggable } from '@pages/Interactions/GX2-5094-Draggable.Page';
import the from '@data/GX2-5094-Draggable';

describe('GX2-5094-✅-tools-qa-interactions-dragabble', () => {
	beforeEach('Precondición: encontrarse en la página de Draggable', () => {
		cy.visit(the.UrlVisit);
		cy.url().should('contain', the.UrlVisit);
	});
	it('5095 | TC1: Validar que que se muestran las pestañas mencionadas dentro de la pagina y se visualiza una a la vez', () => {
		//Tab 1 Simple: Validaremos que sea visible la elección de la pestaña "Simple" y que es por default la que se encuentra activa
		Draggable.get.Tabs().should('contain.text', the.Tabs.Tab1);
		Draggable.get.TabSimple().should('contain.class', the.Status);
		// Tab 2 Axis Restricted: Validaremos que sea visible la elección de la pestaña "Axis Restricted", que no está activa y luego que la seleccionemos se encuentre activa.
		Draggable.get.Tabs().should('contain.text', the.Tabs.Tab2);
		Draggable.get.TabAxisRestricted().should('not.contain.class', the.Status);
		Draggable.SelectTabAxisRestricted();
		Draggable.get.TabAxisRestricted().should('contain.class', the.Status);
		// Tab 3 Contain Restricted: Validaremos que sea visible la elección de la pestaña "Contain Restricted", que no está activa y luego que la seleccionemos se encuentre activa.
		Draggable.get.Tabs().should('contain.text', the.Tabs.Tab3);
		Draggable.get.TabContainerRestricted().should('not.contain.class', the.Status);
		Draggable.SelectTabContainerRestricted();
		Draggable.get.TabContainerRestricted().should('contain.class', the.Status);
		// Tab 4 Cursor Style: Validaremos que sea visible la elección de la pestaña "Cursor Style", que no está activa y luego que la seleccionemos se encuentre activa.
		Draggable.get.Tabs().should('contain.text', the.Tabs.Tab4);
		Draggable.get.TabCursorStyle().should('not.contain.class', the.Status);
		Draggable.SelectTabCursorStyle();
		Draggable.get.TabCursorStyle().should('contain.class', the.Status);
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
	it('5095 | TC5: Validar mover aleatoriamente recuadrado “I`m contained within the box” dentro del área delimitada en la pestaña “Container Restricted”', () => {
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
	it('5095 | TC6: Validar mover aleatoriamente el texto “I`m contained within my parent” dentro del área delimita en la pestaña “Container Restricted”', () => {
		//Nos ubicamos en la pestaña Container Restricted
		Draggable.SelectTabContainerRestricted();
		// Se valida que su posicionamiento inicial es "0"
		Draggable.get.ContainedInTheParent().should('have.css', 'left', `${0}px`);
		Draggable.get.ContainedInTheParent().should('have.css', 'top', `${0}px`);
		// Se crean coordenadas random
		const X = Cypress._.random(0, 14); //Son los limites del cuadro del área delimitada
		const Y = Cypress._.random(0, 87); //Son los limites del cuadro del área delimitada
		cy.log(X, Y);
		// Se mueve “I`m contained within my parent” y se valida su nuevo posicionamiento
		Draggable.MoveContainedInTheParent(X, Y);
		Draggable.get.ContainedInTheParent().should('have.css', 'left', `${X}px`);
		Draggable.get.ContainedInTheParent().should('have.css', 'top', `${Y}px`);
	});
	it('5095 | TC7: Validar que al mover aleatoriamente el recuadro punteado “I will always stick to the center” dentro de la pestaña “Cursor Style” se visualiza el cursor en el centro del recuadro', () => {
		//Nos ubicamos en la pestaña Cursor Style
		Draggable.SelectTabCursorStyle();
		// Se valida que su posicionamiento inicial es "0"
		Draggable.get.CursorCenter().should('have.css', 'left', `${0}px`);
		Draggable.get.CursorCenter().should('have.css', 'top', `${0}px`);
		// Se crean coordenadas random
		var X = Cypress._.random(0, 1400);
		var Y = Cypress._.random(0, 1000);
		cy.log(X, Y);
		//Se mueve “I will always stick to the center” y se valida su que el cursor tenga el style "move"
		Draggable.get.CursorCenter().trigger('mousedown', { which: 1 }).trigger('mousemove', { which: 1, pageX: X, pageY: Y });
		Draggable.get.CursorCenter().should('contain.class', the.ClassDragging);
		Draggable.get.Body().should('have.css', 'cursor', 'move');
		// Su posición final es distinta a la inicial
		Draggable.get.CursorCenter().should('not.have.css', 'left', `${0}px`);
		Draggable.get.CursorCenter().should('not.have.css', 'top', `${0}px`);
	});
	it('5095 | TC8: Validar que al mover aleatoriamente el recuadro punteado “My cursor is at top left” dentro de la pestaña “Cursor Style” se visualiza en la parte superior izquierda del recuadro', () => {
		//Nos ubicamos en la pestaña Cursor Style
		Draggable.SelectTabCursorStyle();
		// Se valida que su posicionamiento inicial es "0"
		Draggable.get.CursorLeft().should('have.css', 'left', `${0}px`);
		Draggable.get.CursorLeft().should('have.css', 'top', `${0}px`);
		// Se crean coordenadas random
		var X = Cypress._.random(0, 1400);
		var Y = Cypress._.random(0, 1000);
		cy.log(X, Y);
		//Se mueve “I will always stick to the center” y se valida su que el cursor tenga el style "crosshair"
		Draggable.get.CursorLeft().trigger('mousedown', { which: 1 }).trigger('mousemove', { which: 1, pageX: X, pageY: Y });
		Draggable.get.CursorLeft().should('contain.class', the.ClassDragging);
		Draggable.get.Body().should('have.css', 'cursor', 'crosshair'); //Se debería visualizar en style attribute el cursor = crosshair
		// Su posición final es distinta a la inicial
		Draggable.get.CursorLeft().should('not.have.css', 'left', `${0}px`);
		Draggable.get.CursorLeft().should('not.have.css', 'top', `${0}px`);
	});
	it('5095 | TC9: Validar que al mover aleatoriamente el recuadro punteado “My cursor is at bottom” dentro de la pestaña “Cursor Style” se visualiza en la parte inferior central del recuadro', () => {
		//Nos ubicamos en la pestaña Cursor Style
		Draggable.SelectTabCursorStyle();
		// Se valida que su posicionamiento inicial es "0"
		Draggable.get.CursorBottom().should('have.css', 'left', `${0}px`);
		Draggable.get.CursorBottom().should('have.css', 'top', `${0}px`);
		// Se crean coordenadas random
		var X = Cypress._.random(0, 1400);
		var Y = Cypress._.random(0, 1000);
		cy.log(X, Y);
		//Se mueve “I will always stick to the center”
		Draggable.get.CursorBottom().trigger('mousedown', { which: 1 }).trigger('mousemove', { which: 1, pageX: X, pageY: Y });
		Draggable.get.CursorBottom().should('contain.class', the.ClassDragging);
		Draggable.get.Body().should('have.css', 'cursor', 'auto');
		// Su posición final es distinta a la inicial
		Draggable.get.CursorBottom().should('not.have.css', 'left', `${0}px`);
		Draggable.get.CursorBottom().should('not.have.css', 'top', `${0}px`);
	});
});
