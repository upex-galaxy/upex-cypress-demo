import { removeLogs } from '@helper/RemoveLogs';
//import {} from 'cypress';
removeLogs();
describe('✅ToolsQA | Widgets | Dropdown - Select Menu', () => {
	beforeEach(() => {
		cy.visit('https://demoqa.com/select-menu');
		cy.url().should('contain', 'select-menu');
	});
	it('11856 | TC1: Validar seleccionar la característica Select Value, Grupo 1 opción 2', () => {
		cy.get('#withOptGroup').click();
		cy.get('#react-select-2-option-0-0').click();
	});
	it('11856 | TC2: Validar seleccionar la característica Select Value, Grupo 1 opción 2', () => {
		cy.get('#withOptGroup').click();
		cy.get('#react-select-2-option-0-1').click();
	});
	it('11856 | TC3: Validar seleccionar la característica Select Value, Grupo 1 opción 1', () => {
		cy.get('#withOptGroup').click();
		cy.get('#react-select-2-option-1-0').click();
	});
	it('11856 | TC4: Validar seleccionar la característica Select Value, Grupo 2 opción 2', () => {
		cy.get('#withOptGroup').click();
		cy.get('#react-select-2-option-1-1').click();
	});
	it('11856 | TC5: Validar seleccionar la característica Select Value, A root option', () => {
		cy.get('#withOptGroup').click();
		cy.get('#react-select-2-option-2').click();
	});
	it('11856 | TC6: Validar seleccionar la característica Select Value, Another root option', () => {
		cy.get('#withOptGroup').click();
		cy.get('#react-select-2-option-3').click();
	});
	it('11856 | TC7: Validar seleccionar la característica Select Value, Grupo 1 opción 2', () => {
		cy.get('#withOptGroup').click();
		cy.get('#react-select-2-option-0-1').click();
	});
	it('11856 | TC8: Validar seleccionar la característica Select One,"Dr."', () => {
		cy.get('#selectOne').click();
		cy.get('#react-select-3-option-0-0').click();
	});
	it('11856 | TC9: Validar seleccionar la característica Select One,"Mrs."', () => {
		cy.get('#selectOne').click();
		cy.get('#react-select-3-option-0-2').click();
	});
	it('11856 | TC10: Validar seleccionar la característica Select One,"Prof."', () => {
		cy.get('#selectOne').click();
		cy.get('#react-select-3-option-0-4').click();
	});
	it('11856 | TC11: Validar seleccionar la característica Old Style Menu, "Red"', () => {
		cy.get('#oldSelectMenu').select('red');
	});
	it('11856 | TC12: Validar seleccionar la característica Old Style Menu, "Black"', () => {
		cy.get('#oldSelectMenu').select('5');
	});
	it('11856 | TC13: Validar seleccionar la característica Old Style Menu, "Aqua"', () => {
		cy.get('#oldSelectMenu').select('10');
	});
	it('11856 | TC14: Validar la característica Multiselect drop down, Green', () => {
		cy.get('.css-yk16xz-control').eq(2).click();
		cy.get('#react-select-4-option-0').click();
	});
	it('11856 | TC15: Validar la característica Multiselect drop down, Blue ', () => {
		cy.get('.css-yk16xz-control').eq(2).click();
		cy.get('#react-select-4-option-1').click();
	});
	it('11856 | TC16: Validar la característica Multiselect drop down, Black ', () => {
		cy.get('.css-yk16xz-control').eq(2).click();
		cy.get('#react-select-4-option-2').click();
	});
	it('11856 | TC18: Validar eliminar desde una característica de Multiselect drop down, Red', () => {
		cy.get('.css-yk16xz-control').eq(2).click();
		cy.get('#react-select-4-option-3').click();
		cy.get('.css-xb97g8').click();
	});
	it('11856 | TC19: Validar seleccionar la característica "Volvo" de ', () => {
		cy.get('#cars').select('Volvo');
	});
	it('11856 | TC20: Validar seleccionar la característica "Audi" de ', () => {
		cy.get('#cars').select('Audi');
	});
});
