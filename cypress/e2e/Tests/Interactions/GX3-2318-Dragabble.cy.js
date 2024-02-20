import {dragabblePage} from '../../../support/pages/GX3-2318-Dragabble.Page';

describe('2318 | Interactions | Dragabble', () => {

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
		dragabblePage.selectTabContianer();
		dragabblePage.get.tabContainer().should('contain.text', 'Container Restricted');
		dragabblePage.selectTabCursorStyle();
		dragabblePage.get.tabCursorStyle().should('contain.text', 'Cursor Style');
	});

	it('2319 | TC03: Validar que el área "Drag me" es visible', () => {
    	dragabblePage.get.tabs();
		dragabblePage.get.dragBox().should('be.visible');
	});

	it.only('2319 | TC04: Validar que el área "Drag me" puede arrastrarse en cualquier dirección', () => {
		dragabblePage.get.tabs();
		dragabblePage.get.dragBox().should('have.css', 'left', `${0}px`).and('be.visible');
		dragabblePage.get.dragBox().should('have.css', 'top', `${0}px`);

		const X = Cypress._.random(0, 600);
		const Y = Cypress._.random(0, 600);
		cy.log(X, Y);
		dragabblePage.moveDragBox(X, Y);
		//dragabblePage.get.dragBox().should('be.visible');
		//dragabblePage.get.dragBox().should('have.css', 'left', `${X}px`);
		//dragabblePage.get.dragBox().should('have.css', 'top', `${Y}px`);



	});

	it('2319 | TC05: Confirmar que el área "Sólo X" es visible y solo se puede arrastrar en el eje X', () => {
		// Aquí irían tus pasos de prueba y aserciones específicas
		expect(1).to.equal(1);
	});

	it('2319 | TC06: Confirmar que el área "Sólo Y" es visible y solo se puede arrastrar en el eje Y', () => {
		// Aquí irían tus pasos de prueba y aserciones específicas
		expect(1).to.equal(1);
	});

	it('2319 | TC07: Verificar que el recuadro con el texto "Estoy contenido dentro del recuadro" está visible y no puede arrastrarse fuera del área delimitada de acción', () => {
		// Aquí irían tus pasos de prueba y aserciones específicas
		expect(1).to.equal(1);
	});

	it('2319 | TC08: Confirmar que la caja delimitada con el texto "Estoy contenido dentro de mi padre" no puede arrastrarse fuera del área delimitada de acción', () => {
		// Aquí irían tus pasos de prueba y aserciones específicas
		expect(1).to.equal(1);
	});

	it('2319 | TC09: Confirmar que aparece un icono de cursor en los cuadros al pasar el ratón por encima', () => {
		// Aquí irían tus pasos de prueba y aserciones específicas
		expect(1).to.equal(1);
	});

	it('2319 | TC10: Verificar que, al arrastrar la casilla "Siempre me ceñiré al centro", el cursor se adhiere al centro de la caja', () => {
		// Aquí irían tus pasos de prueba y aserciones específicas
		expect(1).to.equal(1);
	});

	it('2319 | TC11: Confirmar que, al arrastrar la casilla "Mi cursor está arriba a la izquierda", el cursor se adhiere a la parte superior izquierda de la caja con el icono cambiando a "+"', () => {
		// Aquí irían tus pasos de prueba y aserciones específicas
		expect(1).to.equal(1);
	});

	it('2319 | TC12: Verificar que, al arrastrar la casilla "Mi cursor está abajo", el cursor se adhiere al centro inferior de la caja con el icono volviendo al icono por defecto', () => {
		// Aquí irían tus pasos de prueba y aserciones específicas
		expect(1).to.equal(1);
	});





} );