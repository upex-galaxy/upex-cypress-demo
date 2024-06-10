describe.skip('GX3-2367 | TS: ⚡️ToolsQA | Elements | Radio Buttons', () => {
	beforeEach('Precondición: Usuario debe estar situado en la página demoqa', () => {
		cy.visit('https://demoqa.com/radio-button');
		cy.url().should('include', 'radio-button');
	});

	it('US2367 | TC1: Validar  poder presionar el botón YES', () => {
		cy.get('[for="yesRadio"]')
			.click();
		cy.get('.text-success').should('have.text', 'Yes');
	});

	it('US2367 | TC2: Validar  poder presionar el botón Impressive', () => {
		cy.get('[for="impressiveRadio"]')
			.click();
		cy.get('.text-success').should('have.text', 'Impressive');
	});

	it('US2367 | TC3: Validar no poder presionar el botón No', () => {
		cy.get('[for="noRadio"]').should('have.class','disabled');
		cy.get('#noRadio').should('be.disabled').and('have.class','disabled');
	});
});
