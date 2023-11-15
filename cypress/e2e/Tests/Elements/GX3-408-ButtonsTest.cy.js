describe('GX3-408- ToolsQA | Elements | Radio Buttons', () => {
	beforeEach('Precondition: usuario debe situarse en la web:https://demoqa.com/radio-button', () => {
		cy.visit('https://demoqa.com/radio-button');
	});

	it('409| TC1: Validar  hacer click en el botón opcional "Yes"', () => {
		cy.get('[for="yesRadio"]').click();
		cy.get('p.mt-3').should('have.text', 'You have selected Yes');
	});
	it('409| TC2: Validar hacer click en el botón opcional “improvise”', () => {
		cy.get('[for="impressiveRadio"]').click();
		cy.get('p.mt-3').should('have.text', 'You have selected Impressive');
	});
	it('409| TC3: Validar no poder seleccionar la opción “NO”', () => {
		cy.get('#noRadio').should('be.disabled');
	});
});
