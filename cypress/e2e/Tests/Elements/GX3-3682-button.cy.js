describe('⚡️ToolsQA | Elements | Buttons', () => {

	beforeEach('PRC: Estar situado en la pagina de DemoQa buttons', () => {
		cy.visit('https://demoqa.com/buttons');
		cy.url().should('contains','/buttons');
	});

	it('3683 | TC1: Validar hacer click en el boton “Double Click Me“', () => {
		cy.get('[id="doubleClickBtn"]').dblclick();
		// usando asercion (expect)
		cy.get('#doubleClickMessage').then(($elementButton) => {
			expect($elementButton).to.have.text('You have done a double click');
		});
	});
});