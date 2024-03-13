describe ('GX3-2691 | TS: ToolsQA | Elements | Buttons', () => {
	beforeEach (() => {
		cy.visit('https://demoqa.com/buttons'); //Ingresa a la página que se va a testear
		cy.url().should('contains', 'buttons'); //Comprueba que la URL contenga la cadena buttons
	});
	it('GX3-2691 | TC1: Validar que existan los botones "Double Click Me - Right Click Me - Click Me"', () => {
		cy.get('button[type="button"][id="doubleClickBtn"]').should('have.length', 1);
		cy.get('button[type="button"][id="rightClickBtn"]').should('have.length', 1);
		cy.get('button').contains('Click Me').should('have.length', 1);
	});
	it('GX3-2691 | TC2: Validar mostrar mensaje "You have done a double click" cuando se hace doble click en el botón "Double Click"', () => {
		cy.get('button[type="button"][id="doubleClickBtn"]').dblclick();	
		cy.get('#doubleClickMessage').should('have.text', 'You have done a double click');
	});
	it('GX3-2691 | TC3: Validar mostrar mensaje "You have done a right click" cuando se hace click derecho en el botón "Right Click Me"', () => {
		cy.get('button[type="button"][id="rightClickBtn"]').rightclick();	
		cy.get('#rightClickMessage').should('have.text', 'You have done a right click');
	});
	it('GX3-2691 | TC4: Validar mostrar mensaje "You have done a dynamic click" cuando se hace un click en el botón "Click Me"', () => {
		cy.get('button').eq(3).click();
		cy.get('#dynamicClickMessage').should('have.text', 'You have done a dynamic click');
	});
});