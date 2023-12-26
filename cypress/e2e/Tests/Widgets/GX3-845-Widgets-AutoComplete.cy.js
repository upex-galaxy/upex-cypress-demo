import { removeLogs } from '@helper/RemoveLogs';

describe('🧪GX3-845 | TS: ⚡️ToolsQA | Widgets | Auto-Complete', () => {
	beforeEach('PRC: El usuario debe ubicarse en la Auto-Complete Page', () => {
		cy.visit('https://demoqa.com/auto-complete');
		cy.url().should('contain', 'complete');
	});

	it('GX3-846 | TC1: Validar que la lista de opciones de color coincida con la letra ingresada en el input “Type multiple color names”', () => {
		cy.get('#autoCompleteMultipleInput').type('a');
		cy.get('.auto-complete__option').then(options => {
			for (let i = 0; i < options.length; i++) {
				expect(options[i].innerHTML).contains('a');
			}
		});
	});

	it('GX3-846 | TC2: Validar que la lista de opciones de color coincida con la letra ingresada en el input “Type single color name"', () => {
		cy.get('#autoCompleteSingleInput').type('e');
		cy.get('.auto-complete__option').then(options => {
			for (let i = 0; i < options.length; i++) {
				expect(options[i].innerHTML).contains('e');
			}
		});
	});

	it('GX3-846 | TC3: Validar que una opción de color se convierta en etiqueta al seleccionarla', () => {
		cy.get('#autoCompleteMultipleInput').type('a');
		cy.get('#react-select-2-option-1').should('have.text', 'Magenta').click();
		cy.get('.auto-complete__multi-value__label').should('have.text', 'Magenta');
	});

	it('GX3-846 | TC4: Validar que una opción de color se visualice en el input “Type single color name" al seleccionarla', () => {
		cy.get('#autoCompleteSingleInput').type('a');
		cy.get('#react-select-3-option-2').should('have.text', 'Aqua').click();
		cy.get('.auto-complete__single-value').should('have.text', 'Aqua');
	});

	it('GX3-846 | TC5: Validar que puedan seleccionarse dos colores en el input “Type multiple color names”', () => {
		cy.get('#autoCompleteMultipleInput').type('u');
		cy.get('#react-select-2-option-1').should('have.text', 'Purple').click();
		cy.get('.auto-complete__multi-value__label').should('have.text', 'Purple');
		cy.get('#autoCompleteMultipleInput').type('t');
		cy.get('#react-select-2-option-0').should('have.text', 'White').click();
	});

	it('GX3-846 | TC6: Validar que pueda eliminarse una etiqueta del input “Type multiple color names”', () => {
		cy.get('#autoCompleteMultipleInput').type('u');
		cy.get('#react-select-2-option-1').should('have.text', 'Purple').click();
		cy.get('.auto-complete__multi-value__remove').click();
		cy.get('#react-select-2-option-1').should('not.exist');
	});

	it('GX3-846 | TC7: Validar que el input “Type single color name" NO permita ingresar más de un color', () => {
		cy.get('#autoCompleteSingleInput').type('b');
		cy.get('#react-select-3-option-0').should('have.text', 'Blue').click();
		cy.get('.auto-complete__single-value').should('exist');
		cy.get('#autoCompleteSingleInput').type('b');
		cy.get('.auto-complete__single-value').should('not.exist');
		cy.log('El valor asignado previamente se ha borrado');
	});

	it('GX3-846 | TC8: Validar que NO se repitan opciones ya seleccionadas al ingresar letras en el input “Type multiple color names”', () => {
		cy.get('#autoCompleteMultipleInput').type('u');
		cy.get('#react-select-2-option-1').should('have.text', 'Purple').click();
		cy.get('#autoCompleteMultipleInput').type('u');
		cy.get('#react-select-2-option-1').should('not.exist');
	});
});

removeLogs();
