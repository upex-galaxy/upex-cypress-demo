describe('GX3-5305 | ToolsQA | Elements | Buttons', () => {
	beforeEach('Prc: Usuario debe estar situado en la pagina web DemoQA', () => {
		cy.visit('https://demoqa.com/buttons');
		cy.url().should('contain', 'buttons');
	});
	it('5305 | TC1: Validar activar el Double Click Me Button y obtener mensaje “You have done a double click” ', () => {
		cy.get('#doubleClickBtn').dblclick();
		cy.get('#doubleClickMessage').should('have.text', 'You have done a double click');
		cy.get('#doubleClickBtn').should('have.text', 'Double Click Me');
	});
	it('5305 | TC2: Validar activar el Right Click Me Button y obtener mensaje “You have done a right click”', () => {
		cy.get('#rightClickBtn').rightclick();
		cy.get('#rightClickMessage').should('have.text', 'You have done a right click');
		cy.get('#rightClickBtn').should('have.text', 'Right Click Me');
	});
	it('5305 | TC3: Validar activar el Click Me Button y obtener mensaje “You have done a dynamic click”', () => {
		cy.get('.btn.btn-primary').eq(2).click();
		cy.get('#dynamicClickMessage').should('have.text', 'You have done a dynamic click');
		cy.get('.btn.btn-primary').eq(2).should('have.text', 'Click Me');
	});
});
