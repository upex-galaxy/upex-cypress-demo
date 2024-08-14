describe('GX3-4687| ToolsQA | Elements | Radio Buttons', () => {
	beforeEach('PRC:El usuario debe estar situado en la pagina de Demo QA', () => {
		cy.visit('https://demoqa.com/radio-button');
		cy.url().should('include', 'radio-button');
		cy.get('h1.text-center').should('have.text', 'Radio Button');
	});
	it('TC1:Validar hacer click en el botón YES ', () => {
		cy.get('label[for="yesRadio"]').click();
		cy.get('span.text-success').should('have.text', 'Yes');
	});
	it('TC2:Validar hacer click en el botón Impressive ', () => {
		cy.get('label[for="impressiveRadio"]').click();
		cy.get('span.text-success').should('have.text', 'Impressive');
	});
	it('TC3:Validar no hacer click en el botón NO', () => {
		//cy.get('label[for="noRadio"]').click();
		//cy.get('label[for="noRadio"]').should('have.html', 'No');
		cy.get('#noRadio').should('be.disabled');
	});
});