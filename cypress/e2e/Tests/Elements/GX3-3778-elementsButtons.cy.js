describe ('ToolsQA | Elements | Buttons', () =>
{
	beforeEach('PRC: Estar en la página DemoQA', () =>
	{
		cy.visit('https://demoqa.com/buttons');
		cy.url().should('contain','buttons');
	});
	it('GX-3779 | TC01 Validar recibir mensaje al hacer doble click en el botón "Double click me"',() =>
	{
		cy.get('#doubleClickBtn').dblclick();
		cy.get('#doubleClickMessage').should('have.text','You have done a double click');
	});
	it('GX-3779 | TC02 Validar recibir mensaje al hacer click derecho en el botón "Right Click Me"',() =>
	{
		cy.get('#rightClickBtn').rightclick();
		cy.get('#rightClickMessage').should('have.text','You have done a right click');
	});
	it('GX3779 | TC03 Validar recibir mensaje al hacer click en el botón "Click Me"', () =>
	{
		cy.get('[class="btn btn-primary"]').eq(2).click();
		cy.get('#dynamicClickMessage').should('have.text','You have done a dynamic click');
	});
});