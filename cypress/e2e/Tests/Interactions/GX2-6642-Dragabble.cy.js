import { removeLogs } from '@helper/RemoveLogs';
removeLogs();
import { Dragabble } from '../../../support/pages/Interactions/GX2-6642-Dragabble.page';

describe('GX2-6642 ✅ToolsQA | Interactions | Dragabble', () => {
	beforeEach('Visitar la pagina DemoQA', () => {
		cy.visit('https://demoqa.com/dragabble');
		cy.url().should('contain', 'dragabble');
	});
	it('GX2-6643 | TC1: Validar poder arrastrar en cualquier posición el tablero “Drag me“ de la pestaña “Simple“.', () => {
		Dragabble.dragToRandomPosition();
		cy.get('#dragBox').should('have.css', 'left');
		cy.get('#dragBox').should('have.css', 'top');
        
	});
	it('GX2-6643 | TC2: Validar poder arrastrar el tablero “Only X“ para izquierda y derecha respetando su eje de la pestaña “Axis Restricted”.', () => {
		Dragabble.clickAxisRestricted();
		Dragabble.moveX();
		cy.get('#restrictedX').should('have.css', 'left');
		cy.get('#restrictedX').should('have.css', 'top');
	});
	it('GX2-6643 | TC3: Validar poder arrastrar el tablero “Only Y“ para arriba y abajo respetando su eje de la pestaña “Axis Restricted”.', () => {
		Dragabble.clickAxisRestricted();
		Dragabble.moveY();
		cy.get('#restrictedY').should('have.css', 'left');
		cy.get('#restrictedY').should('have.css', 'top');
	});
	it('GX2-6643 | TC4: Validar el cuadro que contiene el texto “I`m contained within the box“ NO se pueda arrastrar fuera del área de acción delimitada correspondiente de la pestaña “Container Restricted”.', () => {
		Dragabble.clickContainerRestricted();
		Dragabble.moveInTheBox();
		cy.get('.draggable.ui-widget-content.ui-draggable.ui-draggable-handle').should('have.css', 'left');
		cy.get('.draggable.ui-widget-content.ui-draggable.ui-draggable-handle').should('have.css', 'top');
	});
	it('GX2-6643 | TC5: Validar el cuadro que contiene el texto “I`m contained within my parent“ NO se pueda arrastrar fuera del área de acción delimitada correspondiente de la pestaña “Container Restricted”.', () => {
		Dragabble.clickContainerRestricted();
		Dragabble.moveInTheParents();
		cy.get('.draggable.ui-widget-content.m-3 span').should('have.css', 'left');
		cy.get('.draggable.ui-widget-content.m-3 span').should('have.css', 'top');
	});
	it('GX2-6643 | TC6: Validar al arrastrar el cuadro “I will always stick to the center“ de la pestaña “Cursor Style” que el cursor siempre se ubique en el centro del mismo.', () => {
		Dragabble.clickCursorStyle();
		Dragabble.moveBoxCenter();
		cy.get('#cursorCenter').should('have.css', 'left');
		cy.get('#cursorCenter').should('have.css', 'top');
	});
	it('GX2-6643 | TC7: Validar al arrastrar el cuadro “My cursor is at top left“ de la pestaña “Cursor Style” que el cursor siempre se ubique en la parte superior izquierda del mismo.', () => {
		Dragabble.clickCursorStyle();
		Dragabble.moveBoxTopLeft();
		cy.get('#cursorTopLeft').should('have.css', 'left');
		cy.get('#cursorTopLeft').should('have.css', 'top');
	});
	it('GX2-6643 | TC8: Validar al arrastrar el cuadro “My cursor is at bottom“ de la pestaña “Cursor Style” que el cursor siempre se ubique en la parte inferior del mismo.', () => {
		Dragabble.clickCursorStyle();
		Dragabble.moveBoxBottom();
		cy.get('#cursorBottom').should('have.css', 'left');
		cy.get('#cursorBottom').should('have.css', 'top');
	});
});