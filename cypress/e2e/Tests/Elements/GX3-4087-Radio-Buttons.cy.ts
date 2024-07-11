describe('GX3 4087 ToolsQA | Elements | Radio Buttons',() => {
	beforeEach ('PRC: El usuario debe Estar situado en  DemoQA', () => {
		cy.visit('https://demoqa.com/radio-button');
		cy.url().should('contain','radio-button');
	});

	it ('4088 | TC1: Validar que al seleccionar el radio buttons "YES", se muestre al final de la etiqueta la palabra  "Yes". ', () => {
		cy.get('.custom-control-label').eq(0).click();
		cy.get('.text-success').should('contain','Yes');
	});
	it ('4088 | TC2: Validar que al seleccionar el radio buttons "Impressive", se muestre al final de la etiqueta la palabra "Impressive".  ', () => {
		cy.get('.custom-control-label').eq(1).click();
		cy.get('.text-success').should('contain','Impressive');
	});
	it ('4088 | TC3: Validar que al seleccionar el radio buttons "NO", este sea imposible seleccionar".  ', () => {
		cy.get('#noRadio').should('be.disabled');
	});
});