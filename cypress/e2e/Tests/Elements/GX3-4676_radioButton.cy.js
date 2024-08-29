describe('GX3-4676| ToolsQA | Elements | Radio Buttons', () => {
	beforeEach('PRC:El usuario debe estar situado en la pagina de Demo QA', () => {
		cy.visit('https://demoqa.com/radio-button');
		cy.url().should('include', 'radio-button');
		cy.get('h1.text-center').should('have.text', 'Radio Button');
	});
	it('GX3-4677 | TC1: Validar hacer click en el radiobutton “Yes” y se desplegue el mensaje del radiobutton', () => {
		cy.get('label[for="yesRadio"]').click();
		cy.get('span.text-success').should('have.text', 'Yes');
	});
	it('GX3-4677 | TC2: Validar hacer click en el radiobutton "Impressive" y se desplegue el mensaje del radiobutton', () => {
		cy.get('label[for="impressiveRadio"]').click();
		cy.get('span[class="text-success"]').should('have.text', 'Impressive');
	});

	it('GX3-4677 | TC3: Validar hacer click en el raidioutton “No" y se encuentre desabilitado', () => {
		cy.get('#noRadio').should('be.disabled');
	});
});
