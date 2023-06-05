describe('GX-19275: ToolsQA | Elements | Dynamic Properties', () => {
	beforeEach('Precondición: Usuario debe estar situado en Dynamic properties page', () => {
		cy.visit('https://demoqa.com/dynamic-properties');
	});

	it('19276 | TC1: Validar elemento de texto', () => {
		cy.get('#enableAfter') // Seleccionar el elemento que debe estar después
			.prev() // Seleccionar el elemento anterior
			.should('have.attr', 'id'); // Validar que el elemento anterior tiene un atributo "id"
	});

	it('19276 | TC2: Validar habilitación del elemento después de 5 segundos', () => {
		cy.get('#enableAfter').click();
		cy.get('#enableAfter').should('not.be.enabled'); //Validar elemento no activo
		cy.wait(5000); // Esperar 5 segundos
		cy.get('#enableAfter').should('be.enabled'); // Validar elemento activo después de 5 segundos
	});

	it('19276 | TC3: Validar cambio de color del elemento despues de 5 segundos', () => {
		cy.get('.mt-4.btn.btn-primary').contains('Color Change'); //color inicial
		cy.wait(5000); // Esperar 5 segundos
		cy.get('.mt-4.text-danger.btn.btn-primary').contains('Color Change'); // Validar cambio de color del elemento
	});

	it.only('19276 | TC4: Validar visibilidad del elemento después de 5 segundos ', () => {
		cy.get('#visibleAfter').should('not.be.visible'); // Validar no visibilidad del elemento antes de 5 segundos
		cy.wait(5000); // Esperar 5 segundos
		cy.get('#visibleAfter').should('be.visible'); // Validar visibilidad del elemento después de 5 segundos
	});
});

//________________________________________________________________________
// Comando predeterminado para que no ocurran errores de excepciones:
Cypress.on('uncaught:exception', () => {
	// returning false here prevents Cypress from
	// failing the test
	return false;
});
// Comando predeterminado para que no aparezcan los Fetch en el log del Test Runner:
const origLog = Cypress.log;
Cypress.log = function (opts, ...other) {
	if (opts.displayName === 'xhr' || (opts.displayName === 'fetch' && opts.url.startsWith('https://'))) {
		return;
	}
	return origLog(opts, ...other);
};
