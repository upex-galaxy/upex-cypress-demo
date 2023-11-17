describe('Text Box: Fill Form and Submit', () => {
	beforeEach('Visitar la pagina de Demo', () => {
		cy.visit('https://demoqa.com/text-box');
	});
	it('497 | TC1: Validar funcionalidad de campo Email', () => {
		cy.fixture('data/Elements/GX-496-fillFormAndSubmit').then(the => {
			cy.get(the.userEmail.input).should('be.visible');
		});
	});
});
