describe('This is your test project title', () => {
	beforeEach(() => {
		cy.visit('/select-menu');
		cy.url().should('include', '/select-menu');
	});
	it('This is your test case two title', () => {
		cy.get('#withOptGroup').click();
		cy.get('[id*="react-select-2-option-"]').should('be.visible');
		cy.get('[id*="react-select-2-option-"]').then(arrayElements => {
			const randomElement = Cypress._.random(0, arrayElements.length -1);

			cy.wrap(arrayElements).eq(randomElement).then(elementoObtenido => {
				const text = elementoObtenido.text();
				cy.wrap(elementoObtenido).should('have.text', text).click();
				cy.get('#withOptGroup').should('contain', text);
			});
		});
	});
});