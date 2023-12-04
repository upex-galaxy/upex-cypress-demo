describe('GX3-691 | TS: ToolsQA | Elements | Radio Buttons', () => {
	// ARRANGE
	beforeEach('Visitar la pagina demoQA', () => {
		cy.visit('/radio-button');
	});

	//ACTIONS y ASSENT
	it('692 | TC1: Validar que al presionar YES se muestre el mensaje: "You have selected  YES', () => {
		cy.get('[for="yesRadio"]').click();
		cy.get('.text-success').should('have.text', 'Yes');
	});

	it('692 | TC2: Validar que al presionar IMPRESSIVE se muestre el mensaje: "You have selected IMPRESSIVE', () => {
		cy.get('[for="impressiveRadio"]').click();
		cy.get('.text-success').should('have.text', 'Impressive');
	});

	it('692 | TC3: Validar que al presionar NO se el elemento este deshabilitado', () => {
		cy.get('[for="noRadio"]').click();
		cy.get('#noRadio').should('be.disabled');
	});
});
