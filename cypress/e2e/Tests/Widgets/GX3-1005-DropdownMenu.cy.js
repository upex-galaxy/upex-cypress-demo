describe('US GX3-1005 | ToolsQA | Widgets | Dropdown - Select Menu', () => {
	beforeEach('el usuario se encuentra en el endpoint /select-menu', () => {
		cy.visit('https://demoqa.com/select-menu');
	});

	it('25131|TC1:Validar que el usuario selecciona un elemento del menu "Select Value"', () => {
		cy.get('#withOptGroup').click();
		cy.get('.css-11unzgr').should('exist');
		cy.get('#react-select-2-option-0-0').click();
		cy.get('#withOptGroup').should('contain', 'Group 1, option 1');
	});

	it.only('25131|TC1:Validar que el usuario selecciona un elemento del menu "Select One"', () => {
		cy.get('#selectOne').click();
		cy.get('.css-1s9izoc').should('exist');
		cy.get('#react-select-3-option-0-0').click();
		cy.get('#selectOne').should('contain', 'Dr.');
	});
	it('25131|TC1:Validar que el usuario selecciona un elemento del menu "Old Style Select Menu"', () => {
		cy.get('#oldSelectMenu').select('Green').should('have.value', '2');
	});
	it('25131|TC1:Validar que el usuario selecciona uno o más elementos del "Multiselect drop down"', () => {
		cy.get('.css-tlfecz-indicatorContainer').eq(2).click();
		cy.get('.css-26l3qy-menu').should('be.visible');
		cy.get('#react-select-4-option-1').click();
		cy.get('#react-select-4-option-2').click();
		cy.get('.css-1hwfws3').eq(2).should('contain', 'Blue').and('contain', 'Black');
	});
	it('25131|TC1:Validar que el usuario selecciona varios elementos del menú "Standard multi select"', () => {
		cy.get('#cars').select(['Volvo', 'Saab', 'Opel']).should('have.css', 'background-color', 'rgb(255, 255, 255)');
	});
});

import { removeLogs } from '@helper/RemoveLogs';
removeLogs();
