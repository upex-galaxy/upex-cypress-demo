import { removeLogs } from '@helper/RemoveLogs';
removeLogs();

describe('ToolsQA | Widgets | Dropdown - Select Menu', () => {
	beforeEach('El usuario debe navegar al endpoint requerido', () => {
		cy.visit('https://demoqa.com/select-menu');
		cy.url().should('contain', 'select-menu');
	});
	it('GX-21525|TC1:Validar la funcionalidad del Dropdown “Select Value” al poder seleccionar correctamente una opción del mismo', () => {
		cy.get('.css-1hwfws3').eq(0).click();
		cy.get('#react-select-2-option-1-0').click();
		cy.get('.css-1pahdxg-control').should('contain.text', 'Group 2, option 1');
	});
	it('GX-21525|TC2:Validar la funcionalidad del Dropdown “Select One” al poder seleccionar correctamente una opción del mismo', () => {
		cy.get('.css-1hwfws3').eq(1).click();
		cy.get('#react-select-3-option-0-4').click();
		cy.get(':nth-child(4) > .col-md-6').should('contain.text', 'Prof.');
	});
	it('GX-21525|TC3:Validar la funcionalidad del Dropdown “Old Style Select Menu” al poder seleccionar correctamente una opción del mismo', () => {
		cy.get('#oldSelectMenu').select('Black');
		cy.get('#oldSelectMenu').should('have.value', '5');
	});
	it('GX-21525|TC4:Validar la funcionalidad del Dropdown “Multiselect drop down” al poder seleccionar correctamente más de una opción del mismo', () => {
		cy.get('.css-1hwfws3').eq(2).click();
		cy.get('.css-26l3qy-menu').find('#react-select-4-option-0').click();
		cy.get('.css-26l3qy-menu').find('#react-select-4-option-1').click();
		cy.get('.css-26l3qy-menu').find('#react-select-4-option-2').click();
		cy.get('.css-26l3qy-menu').find('#react-select-4-option-3').click();
		cy.get('.css-1pahdxg-control > .css-1hwfws3').should('have.text', 'GreenBlueBlackRed');
	});
	it('GX-21525|TC5:Validar que se visualice el atributo “No Options“ al seleccionar todas las opciones del Dropdown “Multiselect drop down”', () => {
		cy.get('.css-1hwfws3').eq(2).click();
		cy.get('.css-26l3qy-menu').find('#react-select-4-option-0').click();
		cy.get('.css-26l3qy-menu').find('#react-select-4-option-1').click();
		cy.get('.css-26l3qy-menu').find('#react-select-4-option-2').click();
		cy.get('.css-26l3qy-menu').find('#react-select-4-option-3').click();
		cy.get('.css-1gl4k7y').should('contain.text', 'No options');
	});
	it('GX-21525|TC6:Validar la funcionalidad del Dropdown “Standard Multi select” al poder seleccionar correctamente más de una opción del mismo', () => {
		cy.get('select[name="cars"]').select(['Volvo', 'Audi', 'Saab', 'Opel']);
		cy.get('select[name="cars"]').invoke('val').should('deep.equal', ['volvo', 'saab', 'opel', 'audi']);
		cy.get('[value="volvo"]').should('be.selected');
		cy.get('[value="saab"]').should('be.selected');
		cy.get('[value="opel"]').should('be.selected');
		cy.get('[value="audi"]').should('be.selected');
	});
});
