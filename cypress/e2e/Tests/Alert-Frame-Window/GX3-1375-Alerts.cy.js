describe('ToolsQA | Alert-Frame-Window | Alerts', () => {
	beforeEach(() => {
		cy.visit('/alerts');
		cy.url().should('include', 'alerts');
	});
	it('1376 | TC1: Validar mensaje de alerta del primer botton "Click me" cuando es clickeado', () => {});
});
