import { removeLogs } from '@helper/RemoveLogs';
removeLogs();

describe('24117 | TS: | Elements | Text Box', () => {
	beforeEach('visitar la página de Demo QA', () => {
		cy.visit('https://demoqa.com/text-box');
	});

	it.only('24117| TC1: Validar completar los campos con datos validos.', () => {
		cy.fixture('data/GX-24117-TexBox.json').then((the)=> {
			cy.get(the.FullName.input).type(the.FullName.data.valid);
			cy.get(the.FullName.input).should('have.value', the.FullName.data.valid);
			cy.get(the.Email.input).type(the.Email.data.valid);
			cy.get(the.CurrentAddress.input).type(the.CurrentAddress.data.valid);
			cy.get(the.PermanentAddress.input).type(the.PermanentAddress.data.valid);
			cy.get('#submit').click();
			cy.get('#name').should('contain', the.FullName.data.valid);
			
		});    
		
	});
	it('24117| TC2: Validar al enviar el formulario cuando todos los campos son vacíos, no se muestre ningún mensaje.', () => {
		cy.get();
	});

});