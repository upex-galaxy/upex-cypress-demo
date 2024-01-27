import { dragabblePage } from '@pages/Interactions/GX3-1203-Dragabble.page';

describe('USGX3-1203 | TS:ToolsQA | Interactions | Dragabble', () => {
	beforeEach('El usuario se debe ubicar en la pagina de demoQA', () => {
		cy.visit('https://demoqa.com/dragabble');
		cy.url().should('contain', 'dragabble');
	});
	it('1204|TC1: Validar que al cambiar entre pestañas, la pestaña previamente mostrada se oculte.', () => {
		dragabblePage.clickSimpleTab().should('have.length', 1);
		dragabblePage.get.tabList().each($tab => {
			const tabText = $tab.text();
			cy.wrap($tab).click().should('be.visible');
			dragabblePage.tswitchToTab().should('have.length', 1);
			cy.contains('.nav-item.nav-link.active', tabText).should('exist');
			dragabblePage.get.tabList().not('.nav-item.nav-link.active').should('not.contain', tabText);
		});
	});
	it('1204| TC2: Validar mover el botón "Drag me" de manera aleatoria', () => {
		const randomX = Cypress._.random(-42, 400);
		const randomY = Cypress._.random(-14, 400);
		dragabblePage.moveRandomBox(randomX, randomY);
		dragabblePage.get.draBox().should('have.css', 'left', `${randomX}px`);
		dragabblePage.get.draBox().should('have.css', 'top', `${randomY}px`);
	});
	it('1204 | TC3: Validar mover horizontalmente  el botón "X" de manera aleatoria.', () => {
		const OnlyX = Cypress._.random(-30, 50);
		const OnlyY = 0;
		dragabblePage.clicktabaxisRestriction();
		dragabblePage.get.restrictedX().should('have.text', 'Only X');
		dragabblePage.moveRamdomOnlyX(OnlyX, OnlyY);
		dragabblePage.get.restrictedX().should('have.css', 'left', `${OnlyX}px`);
	});
	it('1204 | TC4: Validar mover horizontalmente  el botón "Y" de manera aleatoria.', () => {
		const OnlyY = Cypress._.random(-40, 200);
		const OnlyX = 0;
		dragabblePage.clicktabaxisRestriction();
		dragabblePage.get.restrictedY().should('have.text', 'Only Y');
		dragabblePage.moveRamdomOnlyY(OnlyY, OnlyX);
		dragabblePage.get.restrictedY().should('have.css', 'top', `${OnlyY}px`);
	});
	it('1204 | TC5: Validar que el  botón "i am contained within the box" dentro del contenedor', () => {
		const TextBoX = Cypress._.random(0, 165);
		const TextBoxY = Cypress._.random(0, 106);
		const ParentX = Cypress._.random(0, 14);
		const ParentY = Cypress._.random(-1, 86);
		dragabblePage.clicktabcontainerRestriction();
		dragabblePage.get.textcontainedBox().should('be.visible');
		dragabblePage.get.textcontainedParent().should('be.visible');

		dragabblePage.moveTextBox(TextBoX, TextBoxY);
		dragabblePage.get.textcontainedBox().should('have.css', 'left', `${TextBoX}px`);
		dragabblePage.get.textcontainedBox().should('have.css', 'top', `${TextBoxY}px`);

		dragabblePage.moveTextParent(ParentX, ParentY);
		dragabblePage.get.textcontainedParent().should('have.css', 'left', `${ParentX}px`);
		dragabblePage.get.textcontainedParent().should('have.css', 'top', `${ParentY}px`);
	});
	it('1204| TC6: Validar mover el cuadro "I will always stick to the center” de la pestaña Cursor Style”', () => {
		const CursorX = Cypress._.random(0, 400);
		const CursorY = Cypress._.random(0, 400);
		dragabblePage.clickCursorStyle();
		dragabblePage.dragCursorCenter(CursorX, CursorY);
		cy.get('#cursorBottom').should('have.css', 'cursor', 'move');
	});
	it('1204| TC7: Validar arrastrar el cuadro "My cursor is at top left” de la pestaña Cursor Style”', () => {
		const cursorTopX = Cypress._.random(0, 400);
		const cursorTopY = Cypress._.random(0, 400);
		dragabblePage.clickCursorStyle();
		dragabblePage.dragCursorTopLeft(cursorTopX, cursorTopY);
		cy.get('#cursorBottom').should('have.css', 'cursor', 'move');
	});
	it('1204 | TC8: Validar arrastrar el cuadro "My cursor is at bottom” de la pestaña Cursor Style”', () => {
		const cursorbottomX = Cypress._.random(0, 400);
		const cursorbottomY = Cypress._.random(0, 400);
		dragabblePage.clickCursorStyle();
		dragabblePage.dragCursorBottom(cursorbottomX, cursorbottomY);
		cy.get('#cursorBottom').should('have.css', 'cursor', 'move');
	});
});

import { removeLogs } from '@helper/RemoveLogs';
removeLogs();
