const { removeLogs } = require('@helper/RemoveLogs');

describe('GX-16650|✅ToolsQA | Widgets | Dropdown - Select Menu', () => {
	beforeEach(() => {
		cy.visit('https://demoqa.com/select-menu');
	});

	it('Validar seleccionar una opción del select value', () => {
		cy.get('.css-tlfecz-indicatorContainer').eq(0).click();
		cy.get('#react-select-2-group-0-heading').click(); //.should('contain', 'Group 1, option 1');
		cy.should('contain', 'Group');
		//.should()
	});
	it('Validar seleccionar una opción del select one', () => {
		cy.get('.css-tlfecz-indicatorContainer').eq(1).click();
		cy.get('#react-select-3-option-0-1').click(); //.should('contain', 'Group 1, option 1');
		cy.get('.css-1uccc91-singleValue').contains('Mr.').should('be.visible');
		//cy.contains('Mrs').should('be.visible');
		// Write your test case two here
	});
	it('Validar seleccionar una opción del Old Style Select Menu', () => {
		cy.get('#oldSelectMenu').select('8').should('have.value', '8');
		cy.get('select option[value="8"]').should('be.selected').should('be.visible'); //cy.contains('Indigo').should('be.visible');
		// Write your test case two here
	});
	it('Validar seleccionar varias opciones del Multiselect drop down', () => {
		cy.get('.css-tlfecz-indicatorContainer').eq(2).click();

		cy.get('#react-select-4-option-0').click();
		cy.get('#react-select-4-option-1').click();
		cy.get('#react-select-4-option-2').click();
		cy.get('#react-select-4-option-3').click();
		//cy.get('.css-2b097c-container').should('be.visible');
		cy.get('.css-12jo7m5').should('be.visible');
		cy.get('.css-1gl4k7y').should('be.visible');
	});
	it('Validar seleccionar varias opciones del stantard multiselect', () => {
		cy.get('#cars').select('volvo').should('be.visible');
		cy.get('#cars').select('saab').should('be.visible');
		cy.get('#cars').select('opel').should('be.visible');
		cy.get('#cars').select('audi').should('be.visible');
	});
});
removeLogs();
