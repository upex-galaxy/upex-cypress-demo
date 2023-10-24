describe('GX-39846 - ToolsQA | Elements | Radio Buttons', () => {
	beforeEach('Usuario debe situarse en ToolsQA - Radio Buttons', () => {
		cy.visit('https://demoqa.com/radio-button');
	});
	it('GX-39847 - TC 1: Validar visualizar el mensaje “You have selected Yes” cuando selecciono en Radio Buttons: "Yes".', () => {
		cy.get('[for="yesRadio"]').click();
		cy.get('p.mt-3').should('have.text', 'You have selected Yes');
	});
	it('GX-39847 - TC 2: Validar visualizar el mensaje “You have selected Impressive” cuando selecciono en Radio Buttons: "Impressive"', () => {
		cy.get('[for="impressiveRadio"]').click();
		cy.get('.mt-3').should('have.text', 'You have selected Impressive');
	});
	it('GX-39847 - TC 3: Validar No poder seleccionar Radio Buttons  "No" al pasar el cursor del mouse por encima.', () => {
		cy.get('#noRadio').should('be.disabled');
	});
});
