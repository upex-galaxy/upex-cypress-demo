describe('GX3-2134-⚡️-tools-qa-elements-buttons',() =>
{
	beforeEach('Precondicion:El usuario debe estar situado en la pagina DEMOQA', () =>
	{
		cy.visit('https://demoqa.com/buttons');
		cy.url().should('contains','buttons');
	});
	it('GX3-2133| TC1: Usuario clickea click me button', () => {
		cy.get('[type="button"]').eq(3).click();
		cy.get('#dynamicClickMessage').should('have.text', 'You have done a dynamic click');
	});
	it('GX3-2133| TC2: Usuario clickea right click me Button', () => {
		cy.get('[type="button"]').eq(2).trigger('contextmenu');
		cy.get('#rightClickMessage').should('have.text', 'You have done a right click');
	});
	it('GX3-2133| TC3: Usuario clickea doble click me button', () => {
		cy.get('[type="button"]').eq(1).trigger('dblclick');
		cy.get('#doubleClickMessage').should('have.text', 'You have done a double click');
	});
});
