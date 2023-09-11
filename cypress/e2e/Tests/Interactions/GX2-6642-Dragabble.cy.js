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
	});
	it('GX2-6643 | TC2: Validar poder arrastrar el tablero “Only X“ para izquierda y derecha respetando su eje de la pestaña “Axis Restricted”.', () => {
		Dragabble.clickAxisRestricted();
		Dragabble.moveX();
	});
	it('GX2-6643 | TC3: Validar poder arrastrar el tablero “Only Y“ para arriba y abajo respetando su eje de la pestaña “Axis Restricted”.', () => {
		Dragabble.clickAxisRestricted();
		Dragabble.moveY();
	});
	it('GX2-6643 | TC4: Validar el cuadro que contiene el texto “I`m contained within the box“ NO se pueda arrastrar fuera del área de acción delimitada correspondiente de la pestaña “Container Restricted”.', () => {
		Dragabble.clickContainerRestricted();
		Dragabble.moveInTheBox();
	});
	it('GX2-6643 | TC5: Validar el cuadro que contiene el texto “I`m contained within my parent“ NO se pueda arrastrar fuera del área de acción delimitada correspondiente de la pestaña “Container Restricted”.', () => {
		Dragabble.clickContainerRestricted();
		Dragabble.moveInTheParents();
	});
});