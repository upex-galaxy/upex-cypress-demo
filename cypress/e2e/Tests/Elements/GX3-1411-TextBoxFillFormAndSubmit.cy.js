describe('GX3-1411: ToolsQA | Elements | Text Box: Fill form and Submit', () => {
	beforeEach('User visit web site Text Box', () => {
		cy.visit('https://demoqa.com/text-box');
		cy.url().should('contain', 'text-box');
	});

	it('1412 | TC1: Validar registrar formulario con todos los campos completos y válidos', () => {
		cy.fixture('data/Elements/GX3-1411-TextBox.json').then(the => {
			cy.get(the.fullName.input).type(the.fullName.data.full);
			cy.get(the.submit.input).click();
			cy.get('p').should($p => {
				expect($p.eq(0)).to.contain(`Name:${the.fullName.data.full}`);
			});
		});
	});
});
