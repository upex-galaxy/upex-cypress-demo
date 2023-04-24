describe('GX-13995 | ToolsQA |Widgets | Dropdown - Select Menu', () => {
	beforeEach('Usuario debe visitar la página', () => {
		cy.visit('https://demoqa.com/select-menu');
	});

	it('13996 | TC1 : Validar que en el Dropdown "Select Value" se pueda seleccionar una opción.', () => {
		cy.get('#withOptGroup').click();
		cy.get('#withOptGroup').within(() => {
			cy.get('[id^="react-select"]:not([id$="heading"])').eq(random).click();
		});
	});

	it('13996 | TC2 : Validar que en el Dropdown "Select One" se pueda seleccionar una opción', () => {
		cy.get('div #selectOne.css-2b097c-container').click();
		cy.get('#react-select-3-option-0-0').click();
	});

	it('13996 | TC3 : Validar que en el Dropdown "Old Style Select Menu" se pueda seleccionar una opción', () => {
		cy.get('#oldSelectMenu').click;

		cy.get('select#oldSelectMenu').select('Green').should('have.value', '2');
	});

	it.only('13996 | TC4 : Validar que en el Dropdown "Multiselect drop down" se pueda seleccionar a la vez las opciones "red, green, blue y black."', () => {
		cy.get('.css-2b097c-container').eq(2).click();
		cy.get('#react-select-4-option-0').click();
		cy.get('#react-select-4-option-1').click();
		cy.get('#react-select-4-option-2').click();
		cy.get('#react-select-4-option-3').click();
	});

	it('13996 | TC5 : Validar que en el Dropdown "Multiselect drop down" al estar todas sus opciones seleccionadas se muestre el atributo “No Options” ', () => {
		cy.get('.css-2b097c-container').eq(2).click();
		cy.get('#react-select-4-option-0').click();
		cy.get('#react-select-4-option-1').click();
		cy.get('#react-select-4-option-2').click();
		cy.get('#react-select-4-option-3').click();
		cy.get('.css-26l3qy-menu').should('have.text', 'No options');
	});

	it('13996 | TC6 : Validar que en el Dropdown "Standard multi select" se pueda seleccionar más de una opción', () => {
		cy.get('#cars').click;
		cy.get('select#cars').select(['Volvo', 'Saab']);
	});
});

import { removeLogs } from '@helper/RemoveLogs';

removeLogs();

const random = Cypress._.random(0, 6);
