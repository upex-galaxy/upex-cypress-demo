describe('GX3-5270 | ToolsQA | Elements | Radio Buttons', () => {
	beforeEach(() => {
		cy.visit('https://demoqa.com/radio-button');
	});
	it('GX3 5270 | TC1: Validar que la pagina carga correctamente.', () => {
		cy.url().should('include', '/radio-button');
		cy.get('h1.text-center').should('have.text', 'Radio Button');
	});
	it('GX3 5270 | TC2: Validar que los tres botones de radio esten presentes', () => {
		cy.get('input[type="radio"]').should('have.length', 3);
		cy.contains('Yes').should('be.visible');
		cy.contains('Impressive').should('be.visible');
		cy.contains('No').should('be.visible');
	});
	it('GX3 5270 | TC3: Validar que ningun boton este seleccionado por defecto', () => {
		cy.get('#yesRadio.custom-control-input').should('not.be.checked');
		cy.get('#impressiveRadio.custom-control-input').should('not.be.checked');
		cy.get('#noRadio.custom-control-input').should('not.be.checked');
	});
	it('GX3 5270 | TC4: Validar seleccionar Radio Button "Yes".', () => {
		cy.get('label[for="yesRadio"]').click();
		cy.get('.text-success').should('have.text', 'Yes');
		cy.contains('You have selected Yes').should('be.visible');
	});
	it('GX3 5270 | TC5: Validar seleccionar Radio Button "Impressive".', () => {
		cy.get('label[for="impressiveRadio"]').click();
		cy.get('.text-success').should('have.text', 'Impressive');
		cy.contains('You have selected Impressive').should('be.visible');
	});
	it('GX3 5270 | TC6: Validar que Radio Button "No" no puede ser seleccionado', () => {
		cy.get('.custom-control-input.disabled').should('be.disabled');
	});
});
