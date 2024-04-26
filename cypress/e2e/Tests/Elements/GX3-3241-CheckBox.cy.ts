describe('GX3-3241 | ToolsQA | Elements | Checkbox', () => {
	beforeEach('Precon: Go to DemoQA webpage', () => {
		cy.visit('https://demoqa.com/checkbox');
		cy.url().should('contain', 'checkbox');
	});
	it('GX3-3242 | TC1 | Verify that clicking the "Expand All" button expands all folders', () => {
		cy.log('Hello');
	});
});
