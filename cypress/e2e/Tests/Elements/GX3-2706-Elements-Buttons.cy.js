describe('2707: GX3-2706 | ToolsQA | Elements | Buttons', () =>
{
	beforeEach('Precondición: Usuario debe estar situado en la página demoqa', () =>
	{
		cy.visit('https://demoqa.com/buttons');
		cy.url().should('contains', 'buttons'); // Esto es un Comando de Acción directa
	});
	it('US 2706 | TC1: Validar hacer click en Double Click Me', () =>
	{
		cy.get('[type="button"]').eq(1).trigger('dblclick');
		cy.get('#doubleClickMessage').should('have.text', 'You have done a double click');
	});
	it('US 2706 | TC2: Validar hacer click en Right Click Me', () =>
	{
		cy.get('[type="button"]').eq(2).trigger('contextmenu');
		cy.get('#rightClickMessage').should('have.text', 'You have done a right click');
	});
	it('US 2706 | TC3: Validar hacer click en Click Me', () =>
	{
		cy.get('[type="button"]').eq(3).click();
		cy.get('#dynamicClickMessage').should('have.text', 'You have done a dynamic click');
	});
});
