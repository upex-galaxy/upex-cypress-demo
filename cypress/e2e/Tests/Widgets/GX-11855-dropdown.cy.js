import { removeLogs } from '@helper/RemoveLogs';
removeLogs();
describe('✅ToolsQA | Widgets | Dropdown - Select Menu', () => {
	beforeEach(() => {
		cy.visit('https://demoqa.com/select-menu');
		cy.url().should('contain', 'select-menu');
	});
	it('11856 | TC1: Validar seleccionar la característica de la opción Select Value, Grupo 1 opción 2', () => {
		cy.get('#withOptGroup').click();
		cy.get('#react-select-2-option-0-0').click();
	});
	it('11856 | TC2: Validar seleccionar la característica de opción Select Value, Grupo 1 opción 2', () => {
		cy.get('#withOptGroup').click();
		cy.get('#react-select-2-option-0-1').click();
	});
	it('11856 | TC3: Validar seleccionar la característica de opción Select Value, Grupo 1 opción 1', () => {
		cy.get('#withOptGroup').click();
		cy.get('#react-select-2-option-1-0').click();
	});
	it('11856 | TC4: Validar seleccionar la característica de opción Select Value, Grupo 2 opción 2', () => {
		cy.get('#withOptGroup').click();
		cy.get('#react-select-2-option-1-1').click();
	});
	it('11856 | TC5: Validar seleccionar la característica de opción Select Value, A root option', () => {
		cy.get('#withOptGroup').click();
		cy.get('#react-select-2-option-2').click();
	});
	it('11856 | TC6: Validar seleccionar la característica de opción Select Value, Another root option', () => {
		cy.get('#withOptGroup').click();
		cy.get('#react-select-2-option-3').click();
	});
});
