describe('GX3 4035  | ToolsQA | Elements | Buttons',() => {
	beforeEach('PRC: El usuario debe Estar situado en  DemoQA',() => {
		cy.visit('https://demoqa.com/buttons');
		cy.url().should('contain','buttons');
	});

	it('4035 | TC1: Validar hacer dobleclick en el Boton "double Click Me"',() => {
		cy.get('#doubleClickBtn').dblclick();
		cy.get('#doubleClickMessage').should('have.text','You have done a double click');
	});
	it('4035 | TC2: Validar hacer click derecho en el Boton "Right Click Me"',() => {
		cy.get('#rightClickBtn').rightclick();
		cy.get('#rightClickMessage').should('have.text','You have done a right click');
	});
	it('4035 | TC3: Validar hacer click en el Boton "Click Me"',() => {
		cy.get('.btn.btn-primary').eq(2).click();
		cy.get('#dynamicClickMessage').should('have.text','You have done a dynamic click');
	});
});