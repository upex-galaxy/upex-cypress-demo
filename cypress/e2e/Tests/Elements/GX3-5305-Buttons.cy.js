describe('GX3-5305 | ToolsQA | Elements | Buttons', () => {
	beforeEach('Prc: Usuario debe estar situado en la pagina web DemoQA', () => {
		cy.visit('https://demoqa.com/buttons');
		cy.url().should('contain', 'buttons');
	});
	// 3 Positive TestCases //
	it('5305 | TC1: Validar activar el Double Click Me Button y obtener mensaje “You have done a double click” ', () => {
		cy.get('#doubleClickBtn').dblclick(); // Hacer double click //
		cy.get('#doubleClickMessage').should('have.text', 'You have done a double click'); // Debe mostrar texto //
		cy.get('#doubleClickBtn').should('have.text', 'Double Click Me'); // Button debe tener texto //
	});
	it('5305 | TC2: Validar activar el Right Click Me Button y obtener mensaje “You have done a right click”', () => {
		cy.get('#rightClickBtn').rightclick(); // Hacer right click //
		cy.get('#rightClickMessage').should('have.text', 'You have done a right click'); // Debe mostrar texto //
		cy.get('#rightClickBtn').should('have.text', 'Right Click Me'); // Button debe tener texto //
	});
	it('5305 | TC3: Validar activar el Click Me Button y obtener mensaje “You have done a dynamic click”', () => {
		cy.get('.btn.btn-primary').eq(2).click(); // Hacer click //
		cy.get('#dynamicClickMessage').should('have.text', 'You have done a dynamic click'); // Debe mostrar texto //
		cy.get('.btn.btn-primary').eq(2).should('have.text', 'Click Me'); // Button debe tener texto //
	});
});
