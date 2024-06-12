describe('⚡️ToolsQA | Elements | Buttons', () => {

	beforeEach('PRC: Estar situado en la pagina de DemoQa buttons', () => {
		cy.visit('https://demoqa.com/buttons');
	});

	it('3683 | TC1: Validar hacer click en el boton “Double Click Me“', () => {
		expect(1).to.equal(1);
	});
});