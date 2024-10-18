describe('GX3-5443| ToolsQA | Elements | Radio Buttons', () => {
	beforeEach('PRC:El usuario debe estar situado en la pagina de DemoQA', () => {
		cy.visit('https://demoqa.com/radio-button');
		cy.url().should('include', 'radio-button');
	});

	it('GX3-5443 | TC1: Validar seleccionar el radio button “Yes” y visualizar mensaje "You have selected Yes".', () => {
		cy.get('label[for="yesRadio"]').click();
		cy.get('.text-success').should('have.text', 'Yes');
	});

	it('GX3-5443 | TC2: Validar seleccionar el radio button “Impressive” y visualizar mensaje "You have selected Impressive".', () => {
		cy.get('label[for="impressiveRadio"]').click();
		cy.get('[class="text-success"]').should('have.text', 'Impressive');
	});

	it('GX3-5443 | TC3: Validar que el radio button “No" se encuentre deshabilitado', () => {
		cy.get('#noRadio').should('be.disabled');
	});
});
