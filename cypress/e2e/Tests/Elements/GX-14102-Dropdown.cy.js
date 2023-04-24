describe('GX-14102 | TS: ✅ToolsQA | Widgets | Dropdown - Select Menu', () => {
	beforeEach('Usuario debe tener acceso a la página', () => {
		cy.visit('https://demoqa.com/select-menu');
		cy.url().should('contain', 'select-menu');
	});
    

	it('14103 |TC1: Validar que se puede seleccionar una opción en el "Grupo 1" de listas desplegables".', () => {
		cy.get('#withOptGroup').click();
		cy.get('#react-select-2-option-0-0').click();

	});
	

	it('14103 |TC2: Validar que se puede seleccionar una opción en el "Grupo 2" de lista desplegables".', () => {
		cy.get('#withOptGroup ').click();
		cy.contains('Group 2, option 1').click();

	});

	it('14103 |TC3: Validar que se puede seleccionar una opción en el "React Dropdown".', () => {
		cy.get('.css-1wa3eu0-placeholder').eq(1).click();
		cy.get('#react-select-3-option-0-3').click();
		cy.contains('Ms.');

	});

	it('14103 |TC4: Validar que se puede seleccionar una opción en el "Old Style Select Menu".', () => {
		cy.get('#oldSelectMenu').select('Red');

	});

	it.only('14103 |TC5: Validar que se pueda seleccionar hasta 4 opciones en "Multiselect drop down", el mensaje "Sin opciones" debe mostrarse en el menú desplegable', () => {
		cy.get('.css-2b097c-container').eq(2).click();
		cy.get('#react-select-4-option-0').click();
		cy.get('#react-select-4-option-1').click();
		cy.get('#react-select-4-option-2').click();
		cy.get('#react-select-4-option-3').click();

	});

	it('14103 |TC6: Validar que se pueda seleccionar mas de una opción en el "Standard multi select".', () => {
		cy.get('#cars').select('volvo');
		cy.get('#cars').select('saab');
		cy.get('#cars').select('opel');
		cy.get('#cars').select('audi');
	});

});

import { removeLogs } from '@helper/RemoveLogs';
removeLogs();



