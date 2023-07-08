import { removeLogs } from '@helper/RemoveLogs';
removeLogs();

describe('US GX-22440 | ToolsQA | Elements | Radio Buttons', () => {
    
	beforeEach('PRC: Usuario debe ubicarse en la Radio Button Page', () => {
		cy.visit('https://demoqa.com/radio-button ');
	});

	it('22441 | TC01: Validar visualizar log message "You have selected Yes" al seleccionar RB “Yes”', ()=>{
		cy.get('#yesRadio').click({ force : true });
		cy.get('.mt-3').should('have.text', 'You have selected Yes');
	});
    
	it('22441 | TC02: Validar visualizar log message "You have selected Impressive" al seleccionar RB “Impressive”', () => {
    	cy.get('#impressiveRadio').click({ force : true });
		cy.get('.mt-3').should('have.text', 'You have selected Impressive');
    });

	it('22441 | TC03: Validar NO poder seleccionar el RB “No” al clickear sobre él', () => {
		cy.get('#noRadio').click({ force : true }).should('be.disabled');
	});

	it('22441 | TC04: Validar que RB "Yes" contenga la etiqueta "Yes"', () => {
		cy.get('label[for=yesRadio]').should('contain', 'Yes');
	});

	it('22441 | TC05: Validar que RB "Impressive" contenga la etiqueta "Impressive"', () => {
		cy.get('label[for=impressiveRadio]').should('contain', 'Impressive');
	});

	it('22441 | TC06: Validar que RB "No" contenga la etiqueta "No"', () => {
		cy.get('label[for=noRadio]').should('contain', 'No');
	});
});