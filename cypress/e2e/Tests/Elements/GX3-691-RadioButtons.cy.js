describe('GX3-691 | TS: ToolsQA | Elements | Radio Buttons', () => {
	// ARRANGE
	beforeEach('Visitar la pagina demoQA', () => {
		cy.visit('/radio-button');
	});

	//ACTIONS y ASSENT
	it('Validar que al presionar YES se muestre el mensaje: "You have selected  YES', () => {
		cy.get('[for="yesRadio"]').click();
		cy.get('.text-success').should('have.text', 'Yes');
	});

	it('Validar que al presionar IMPRESSIVE se muestre el mensaje: "You have selected IMPRESSIVE', () => {
		cy.get('[for="impressiveRadio"]').click();
		cy.get('.text-success').should('have.text', 'Impressive');
	});

	it('Validar que al presionar NO se el elemento este deshabilitado', () => {
		cy.get('[for="noRadio"]').click();
		cy.get('#noRadio').should('be.disabled');
	});
});
