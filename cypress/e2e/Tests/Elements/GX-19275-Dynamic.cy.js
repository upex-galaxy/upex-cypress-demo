describe('GX-19275: ToolsQA | Elements | Dynamic Properties', () => {
	beforeEach('Precondición: Usuario debe estar situado en Dynamic properties page', () => {
		cy.visit('https://demoqa.com/dynamic-properties');
		cy.url().should('contain', 'dynamic');
	});
});

it.only('19276 | TC1: Validar elemento de texto', () => {
	// Validar obtención de elemento con ID dinámico sin usar "texto"
	cy.get('#enableAfter') // Seleccionar el elemento que debe estar después
		.prev() // Seleccionar el elemento anterior
		.should('have.attr', 'id'); // Validar que el elemento anterior tiene un atributo "id"
});

it.only('19276 | TC2: Validar que el botón "Will enable 5 Sec" no se puede hacer clic antes de 5 segundos', () => {
	cy.get('#enableAfter').should('not.be.enabled'); // Validar habilitación del elemento después de 5 segundos
});

it('19276 | TC3: Validar que el botón "Will enable 5 Sec" se puede hacer clic después de 5 segundos', () => {
	cy.wait(5000); // Esperar 5 segundos
	cy.get('#enableAfter').should('be.enabled'); // Validar habilitación del elemento después de 5 segundos
});

it('19276 | TC4: Validar que el botón "Color Change" tiene texto de color blanco antes de 5 segundos', () => {
	cy.get('#colorChange').should('have.css', 'color', 'rgb(0, 0, 0)'); // Validar cambio de color del elemento
});

it('19276 | TC5: Validar que el botón "Color Change" tiene texto de color rojo después de 5 segundos', () => {
	cy.wait(5000); // Esperar 5 segundos
	cy.get('#colorChange').should('have.css', 'color', 'rgb(255, 0, 0)'); // Validar cambio de color del elemento
});

it('19276 | TC6: Validar que el botón "Visible after 5 sec" no es visible antes de 5 segundos', () => {
	cy.get('#visibleAfter').should('not.be.visible'); // Validar visibilidad del elemento después de 5 segundos
});

it('19276 | TC7: Validar que el botón "Visible after 5 sec" es visible después de 5 segundos', () => {
	cy.wait(5000); // Esperar 5 segundos
	cy.get('#visibleAfter').should('be.visible'); // Validar visibilidad del elemento después de 5 segundos
});
