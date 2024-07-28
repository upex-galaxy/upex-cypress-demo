import { dragabblePage } from '../../../support/pages/GX3-2318-Dragabble.Page';
// Flaky suite
describe.skip('2318 | Interactions | Dragabble', () => {
	// eslint-disable-next-line chai-friendly/no-unused-expressions
	beforeEach(() => {

		cy.visit('https://demoqa.com/dragabble');
		cy.url().should('include', 'dragabble');

	}),

	it('2319 | TC01: Validar que la pestaña "Simple" se muestra por defecto.', () => {

   	   	dragabblePage.get.tabsSimple().should('contain.class', 'active');

	});

	it('2319 | TC02: Validar que se muestre las pestañas "simple", "axis restricted", "containd restricted" y "cursor styled" uno a la vez', () => {
		dragabblePage.get.tabs();
		dragabblePage.get.tabsSimple().should('contain.text', 'Simple');
		dragabblePage.get.tabs();
		dragabblePage.selectTabAxis();
		dragabblePage.get.tabAxis().should('contain.text', 'Axis Restricted');
		dragabblePage.selectTabContainer();
		dragabblePage.get.tabContainer().should('contain.text', 'Container Restricted');
		dragabblePage.selectTabCursorStyle();
		dragabblePage.get.tabCursorStyle().should('contain.text', 'Cursor Style');
	});

	it('2319 | TC03: Validar que el área "Drag me" es visible', () => {
    	dragabblePage.get.tabs();
		dragabblePage.get.dragBox().should('be.visible');
	});

	it('2319 | TC04: Validar que el área "Drag me" puede arrastrarse en cualquier dirección', () => {
		dragabblePage.get.tabs();
		dragabblePage.get.dragBox().should('have.css', 'left', `${0}px`).and('be.visible');
		dragabblePage.get.dragBox().should('have.css', 'top', `${0}px`);

		const X = Cypress._.random(0, 600);
		const Y = Cypress._.random(0, 600);
		cy.log(X, Y);
		dragabblePage.moveDragBox(X, Y);
		dragabblePage.get.dragBox().should('have.css', 'left', `${X}px`);
		dragabblePage.get.dragBox().should('have.css', 'top', `${Y}px`);

	});

	it('2319 | TC05: Validar que el área "Sólo X" es visible y solo se puede arrastrar en el eje X', () => {
		dragabblePage.get.tabs();
		dragabblePage.selectTabAxis();
		dragabblePage.get.tabAxis();
		dragabblePage.get.onlyX().should('have.css' , 'left', `${0}px` ).and('be.visible');

		const X = Cypress._.random(0, 600);
		cy.log(X);
		dragabblePage.moveOnlyX(X);
		dragabblePage.get.onlyX().should('have.css', 'left', `${X}px`).and('be.visible');
	});

	it('2319 | TC06: Validar que el área "Sólo Y" es visible y solo se puede arrastrar en el eje Y', () => {
		dragabblePage.get.tabs();
		dragabblePage.selectTabAxis();
		dragabblePage.get.tabAxis();
		dragabblePage.get.onlyY().should('have.css' , 'top', `${0}px` ).and('be.visible');

		const Y = Cypress._.random(0, 600);
		cy.log(Y);
		dragabblePage.moveOnlyY(Y);
		dragabblePage.get.onlyY().should('have.css', 'top', `${Y}px`).and('be.visible');
	});

	it('2319 | TC07: Validar que el recuadro con el texto "I` m contained within the box" está visible y se pueda arrastrar dentro del área delimitada de acción', () => {
		dragabblePage.selectTabContainer();
		dragabblePage.get.containedBox().should('have.css', 'left', `${0}px`).and('be.visible');
		dragabblePage.get.containedBox().should('have.css', 'top', `${0}px`);

		const X = Cypress._.random(0, 398);
		const Y = Cypress._.random(0, 107);
		cy.log(X, Y);
		dragabblePage.moveContainedBox(X, Y);
		dragabblePage.get.containedBox().should('have.css', 'left', `${X}px`);
		dragabblePage.get.containedBox().should('have.css', 'top', `${Y}px`);

	});

	it('2319 | TC08: Validar que la caja delimitada con el texto "I` m contained within my parent" se pueda arrastrar dentro del área delimitada de acción', () => {
		dragabblePage.selectTabContainer();
		dragabblePage.get.containedMyParent().should('have.css', 'left', `${0}px`).and('be.visible');
		dragabblePage.get.containedMyParent().should('have.css', 'top', `${0}px`);

		const X = Cypress._.random(0, 14);
		const Y = Cypress._.random(-1, 87);
		cy.log(X, Y);
		dragabblePage.moveContainedMyParent(X, Y);
	});

	it('2319 | TC09: Validar que, al arrastrar la casilla "Siempre me ceñiré al centro", el cursor se adhiere al centro de la caja', () => {
		dragabblePage.selectTabCursorStyle();
		dragabblePage.get.cursorCenter().should('have.css', 'left', `${0}px`).and('be.visible');
		dragabblePage.get.cursorCenter().should('have.css', 'top', `${0}px`);

		const X = Cypress._.random(0, 600);
		const Y = Cypress._.random(0, 600);
		cy.log(X, Y);
		dragabblePage.moveCursorCenter(X, Y);
		dragabblePage.get.cursorCenter().should('have.css', 'cursor', 'move');
	});

	it('2319 | TC10: Validar que, al arrastrar la casilla "Mi cursor está arriba a la izquierda", el cursor se adhiere a la parte superior izquierda de la caja.', () => {
		dragabblePage.selectTabCursorStyle();

		const X = Cypress._.random(0, 600);
		const Y = Cypress._.random(0, 600);
		cy.log(X, Y);
		dragabblePage.moveCursorLeft(X, Y);

		dragabblePage.get.cursorLeft().should('have.css', 'cursor', 'move');
	});

	it('2319 | TC11: Validar que, al arrastrar la casilla "Mi cursor está abajo", el cursor se adhiere al centro inferior de la caja.', () => {
		dragabblePage.selectTabCursorStyle();
		dragabblePage.get.cursorBottom().should('have.css', 'left', `${0}px`).and('be.visible');
		dragabblePage.get.cursorBottom().should('have.css', 'top', `${0}px`);

		const X = Cypress._.random(0, 600);
		const Y = Cypress._.random(0, 600);
		cy.log(X, Y);
		dragabblePage.moveCursorBottom(X, Y);
		dragabblePage.get.cursorBottom().should('have.css', 'cursor', 'move');

	});

} );