import { removeLogs } from '@helper/RemoveLogs';
removeLogs();

describe('GX-19275: ToolsQA | Elements | Dynamic Properties', () => {
	beforeEach('Precondición: Usuario debe estar situado en Dynamic properties page', () => {
		cy.visit('/dynamic-properties');
		cy.url().should('contain', 'demoqa');
	});

	it('19276 | TC1: Validar elemento de texto', () => {
		cy.get('#enableAfter') // Seleccionar el elemento que debe estar después
			.prev() // Seleccionar el elemento anterior
			.should('have.attr', 'id'); // Validar que el elemento anterior tiene un atributo "id"
	});

	it('19276 | TC2: Validar habilitación del elemento después de 5 segundos', () => {
		cy.get('button#enableAfter.mt-4.btn.btn-primary').click(); // Interactuar con el botón
		cy.get('button#enableAfter.mt-4.btn.btn-primary').should('be.disabled', { timeout: 5000 }); // Verificar que el botón esté inicialmente deshabilitado
		cy.get('button#enableAfter.mt-4.btn.btn-primary').should('be.enabled'); // Verificar que el botón esté habilitado después de 5 segundos
	});

	it('19276 | TC3: Validar cambio de color del elemento después de 5 segundos', () => {
		cy.get('.mt-4.btn.btn-primary').contains('Color Change'); //color inicial
		cy.wait(5000); // Esperar 5 segundos
		cy.get('.mt-4.text-danger.btn.btn-primary').contains('Color Change'); // Validar cambio de color del elemento
	});

	it('19276 | TC4: Validar visibilidad del elemento después de 5 segundos ', () => {
		cy.get('#visibleAfter').should('exist'); // Verificar que el elemento esté presente en el DOM
		cy.get('#visibleAfter').should('not.be.visible', { timeout: 5000 }); // Verificar que el elemento no esté visible
		cy.get('#visibleAfter').should('be.visible'); // Validar visibilidad del elemento después de 5 segundos
	});
});
