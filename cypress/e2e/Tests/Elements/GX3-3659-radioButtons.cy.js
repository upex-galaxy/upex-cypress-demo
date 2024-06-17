describe ('ToolsQA | Elements | Radio Buttons',() => {
	beforeEach('Precondicion',() => {
		cy.visit('https://demoqa.com/radio-button');
		cy.url().should('contain', 'radio-button');
		cy.viewport(1000, 660);
	});
	it('3660 TC01 | Validar Que funcione el Radio Button "Yes" correctamente', () => {
		cy.get('#yesRadio').click({ force: true });
		cy.get('.text-success').should('have.text','Yes');
	});
	it('3660 TC02 | Validar Que funcione el Radio Button "Impressive" correctamente', () => {
		cy.get('#impressiveRadio').click({ force: true });
		cy.get('.text-success').should('have.text','Impressive');
	});
	it('3660 TC03 | Validar que el Radio Button "No" esté disabled', () => {
		cy.get('input#noRadio')
			.should('be.disabled');
	});
});
