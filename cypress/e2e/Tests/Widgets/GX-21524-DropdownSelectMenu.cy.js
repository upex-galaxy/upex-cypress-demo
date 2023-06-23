import { removeLogs } from '@helper/RemoveLogs';
removeLogs();

describe('ToolsQA | Widgets | Dropdown - Select Menu', () => {
	beforeEach('', () => {
		cy.visit('https://demoqa.com/select-menu');
		cy.url().should('contain', 'select-menu');
	});
	it('GX-21525|TC1:HappyPath: Validar que se puede seleccionar al menos un objeto de cada Dropdown', () => {
		cy.get('.css-1hwfws3').eq(0).click();
		cy.get('#react-select-2-option-1-0').click();
		cy.get('#selectMenuContainer > :nth-child(2) > .col-md-6').should('contain.text', 'Group 2, option 1');
		cy.get('.css-1hwfws3').eq(1).click();
		cy.get('#react-select-3-option-0-1').click();
		cy.get(':nth-child(4) > .col-md-6').should('contain.text', 'Mr.');
		cy.get('#oldSelectMenu').select('Aqua').should('have.value', '10');
		cy.get('.css-1hwfws3').eq(2).click();
		//cy.get('#react-select-5-option-1-0').click();
		cy.get('.css-2613qy-menu').click('#react-select-4-option-1');
		//cy.get('#react-select-4-option-0').click({ force: true });
	});
	it('GX-21525|TC2:Validar la funcionalidad del Dropdown “Select Value” al poder seleccionar correctamente una opción del mismo', () => {});
	it('GX-21525|TC3:Validar la funcionalidad del Dropdown “Select One” al poder seleccionar correctamente una opción del mismo', () => {});
	it('GX-21525|TC4:Validar la funcionalidad del Dropdown “Old Style Select Menu” al poder seleccionar correctamente una opción del mismo', () => {});
	it('GX-21525|TC5:Validar la funcionalidad del Dropdown “Multiselect drop down” al poder seleccionar correctamente más de una opción del mismo', () => {});
	it('GX-21525|TC6:Validar la funcionalidad del Dropdown “Standard Multi select” al poder seleccionar correctamente más de una opción del mismo', () => {});
});
