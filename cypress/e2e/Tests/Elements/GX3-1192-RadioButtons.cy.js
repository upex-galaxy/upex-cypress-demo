describe('TS 🧪GX3-1193 | TS: ⚡️ToolsQA | Elements | Radio Buttons ', () => {
	beforeEach('acceder a la pagina https://demoqa.com/radio-button', () => {
		cy.visit('https://demoqa.com/radio-button');
	});
	it('1193 | TC1: verificar poder seleccionar la opción “Yes” exitosamente', () => {
		cy.get('[for="yesRadio"]').click();
		cy.get('p.mt-3').should('have.text', 'You have selected Yes');
		cy.get('.text-success').should('have.text', 'Yes');
	});
	it('1193 | TC2: verificar poder seleccionar el opción  “Impressive” exitosamente', () => {
		cy.get('[for="impressiveRadio"]').click();
		cy.get('p.mt-3').should('have.text', 'You have selected Impressive');
		cy.get('.text-success').should('have.text', 'Impressive');
	});
	it('1193 | TC3: verificar No poder seleccionar el opción “No” ', () => {
		cy.get('#noRadio').should('be.disabled');
		cy.get('[for=noRadio]').click();
		cy.get('p.mt-3').should('not.exist');
		cy.get('.text-success').should('not.exist');
	});
});
