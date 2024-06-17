describe('GX3-3651|ToolsQA | Elements | Buttons', () => {
	beforeEach('PRC: Estar situado en la pagina de Demo QA buttons', () => {
		cy.visit('https://demoqa.com/buttons');
		cy.url().should('include', 'buttons');
	});

	it('3652 | TC1: Validar hacer double click en el button “Double click Me” y se muestre el mensaje del button', () => {
		cy.get('#doubleClickBtn').dblclick();
		cy.get('p#doubleClickMessage').should('have.text', 'You have done a double click');
	});

	it('3652 | TC2: Validar hacer right click en el button “Right Click Me" y se muestre el mensaje del button', () => {
		cy.get('#rightClickBtn').rightclick();
		cy.get('#rightClickMessage').should('have.text', 'You have done a right click');
	});
	it('3652 | TC3: Validar hacer click en el button “Click Me"y se muestre el mensaje del button', () => {
		cy.get('button').eq(3).click();
		cy.get('#dynamicClickMessage').should('have.text', 'You have done a dynamic click');
	});

	it('3652 | TC4: Validar hacer click en el button “Double click Me” y NO se muestre el mensaje del button', () => {
		cy.get('#doubleClickBtn').click();
		cy.get('p#doubleClickMessage').should('not.exist');
	});
});
