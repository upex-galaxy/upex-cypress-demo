import { removeLogs } from '@helper/RemoveLogs';
removeLogs();

describe('', () => {
	beforeEach('', () => {
		cy.visit('https://demoqa.com/checkbox');
		cy.url().should('contain', 'checkbox');
	});

	it('2064 |TC01 Expand all and collapse all', () => {
		cy.get('[title="Expand all"]').click();
		cy.get('[for^="tree-node"]').should('have.length', 17);
		cy.get('[title="Collapse all"]').click();
		cy.get('[for^="tree-node"]').should('have.length', 1);
	});

	it.only('2064 |TC02 Check random and compare with display result', () => {
		cy.get('[for^="tree-node"]').should('have.length', 1);
		cy.get('[title="Expand all"]').click();
		cy.get('[for^="tree-node"]')
			.its('length')
			.then(count => {
				const randomCheck = Cypress._.random(count);
				cy.get('[type = "checkbox"]').eq(randomCheck).check({ force: true });
				cy.get('[type = "checkbox"]').eq(randomCheck).should('be.checked');

				cy.get('[type = "checkbox"]').eq(0).check({ force: true });
				cy.get('[type = "checkbox"]').eq(0).should('be.checked');

				cy.get('[type = "checkbox"]').eq(randomCheck).check({ force: true });
				cy.get('[type = "checkbox"]').eq(randomCheck).should('be.checked');
			});
	});
});
