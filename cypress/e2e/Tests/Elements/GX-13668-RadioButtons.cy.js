

describe('GX-13668 | ToolsQA | Elements | Radio Buttons', () => {
	beforeEach('Usuario debe ingresar a la página', () => {
		cy.visit('https://demoqa.com/radio-button');
		
		cy.url().should('contain', 'radio-button');
	});
    
	
	it('13669 | TC1 : Validar al hacer " click" en la etiqueta "YES" de el mensaje de "You have selected Yes".', () => {
		cy.get('#yesRadio').click({ force: true }).should('have.attr', 'type', 'radio');
		cy.contains('You have selected').children().should('have.text', 'Yes');
        
	});
    

	it('13669 | TC2 : Validar al hacer " click" en la etiqueta "IMPRESSIVE" de el mensaje de "You have selected Impressive".', () => {
		cy.get('.custom-control.custom-radio.custom-control-inline').eq(1).click();
		cy.get('.mt-3').should('contain', 'You have selected Impressive');
	});

	it('13669 | TC3 : Validar que El cursor no pueda seleccionar el RB "NO".', () => {
		cy.get('#noRadio').click({ force: true });
		cy.get('.text-success').should('not.exist');
	
	});


});

import { removeLogs } from '@helper/RemoveLogs';
removeLogs();

