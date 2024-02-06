
describe('', () => {
	beforeEach('', () => {
		cy.visit('https://demoqa.com/checkbox');
		cy.url().should('contain', 'checkbox');
	});

	it('2084 |TC01 Expand all and collapse all', () => {
		cy.get('[title="Expand all"]').click();
		cy.get('[for^="tree-node"]').should('have.length', 17);
		cy.get('[title="Collapse all"]').click();
		cy.get('[for^="tree-node"]').should('have.length', 1);
	});

	it('2084 |TC02 Check random and compare with display result', () => {
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

				cy.get('[type = "checkbox"]').eq(randomCheck).uncheck({ force: true });
				cy.get('[type = "checkbox"]').eq(randomCheck).should('not.be.checked');
			});

		const labels= [];
		cy.get('[for^="tree-node"]:has(.rct-icon-check)').each(element=>{
			labels.push(element.text());
		})
		
		

		const successTexts = [];
		cy.get('#result .text-success').each(element=>{
			successTexts.push(element.text());
		}).then(()=>{
			const checkLabels = labels.map(text=> text.toLowerCase().replace(' ','').replace('.doc',''));
			const displayTexts = successTexts.map(text=>text.toLowerCase())
			expect(displayTexts).deep.equal(checkLabels);
		})
		
		
	});
});
