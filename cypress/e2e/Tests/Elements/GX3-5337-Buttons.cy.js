describe('GX3-5337 | ToolsQA | Buttons', () => {
	beforeEach(() => {
		cy.visit('https://demoqa.com/buttons');
		cy.url().should('include', '/buttons');
		cy.get('h1.text-center').should('have.text', 'Buttons');
	});
	it('GX3 5365 | TC1: Validar que los tres botones de radio esten presentes', () => {
		cy.get('.btn.btn-primary').should('have.length', 3);
		cy.contains('Double Click Me').should('be.visible');
		cy.contains('Right Click Me').should('be.visible');
		cy.contains('Click Me').should('be.visible');
	});
	it('GX3 5365 | TC2: Validar seleccionar el Button "Double Click Me".', () => {
		cy.get('#doubleClickBtn').dblclick();
		cy.get('#doubleClickMessage').should('have.text', 'You have done a double click');
	});
	it('GX3 5365 | TC3: Validar seleccionar el Button "Right Click Me".', () => {
		cy.get('#rightClickBtn').rightclick();
		cy.get('#rightClickMessage').should('have.text', 'You have done a right click');
	});
	it('GX3 5365 | TC4: Validar seleccionar el Button "Click Me".', () => {
		cy.get('button.btn').eq(2).click();
		cy.get('#dynamicClickMessage').should('have.text', 'You have done a dynamic click');
	});
});
