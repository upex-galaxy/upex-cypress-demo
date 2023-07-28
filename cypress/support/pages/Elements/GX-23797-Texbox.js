import { removeLogs } from '@helper/RemoveLogs';
removeLogs();

describe('GX-23797 | ToolsQA | Elements | Text box:Fill form and Submit', () => {
	beforeEach('PRC: El usuario debe estar ubicado en la pagina del PLP Demoqa', () => {
		cy.visit('https://demoqa.com/text-box');
	});
	it('23798 | TC1: Validar los campos correctamente estén llenos muestre  un párrafo.', () => {
		cy.get('#userName').type('Karina');
		cy.get('#userEmail').type('karinamon1849@gmail.com');
		cy.get('#currentAddress').type('Antonio tomba 151');
		cy.get('#permanentAddress').type('Correntoso 1245');
		cy.get('#submit').click();
		cy.get('#name').should('contain', 'Karina');
		cy.get('#email').should('contain', 'karinamon1849@gmail.com');
		cy.get('#currentAddress.mb-1').should('contain.text', 'Antonio tomba 151');
		cy.get('#permanentAddress.mb-1').should('contain', 'Correntoso 1245');
	});
	it('23798 | TC2: Validar  los campos estén vacíos no se muestre ningún párrafo', () => {
		cy.visit('https://demoqa.com/text-box');
		cy.get('#userName').should('be.empty');
		cy.get('#userEmail').should('be.empty');
		cy.get('#currentAddress').should('be.empty');
		cy.get('#permanentAddress').should('be.empty');
		cy.get('#submit').click();
		const selectors = ['#name', '#email', '#currentAddress.mb-1', '#permanentAddress.mb-1'];
		selectors.forEach(selectors => {
			cy.get(selectors).should('not.exist');
		});
	});
	it('23798 | TC3:  Validar los campos estén llenos y email este vacío  y no se muestre ningún registro', () => {
		cy.get('#userName').type('Karina');
		cy.get('#userEmail').should('be.empty');
		cy.get('#currentAddress').type('Antonio tomba 151');
		cy.get('#permanentAddress').type('Correntoso 1245');
		cy.get('#submit').click();
		cy.get('#name').should('contain', 'Karina');
		cy.get('#email').should('not.exist');
		cy.get('#currentAddress.mb-1').should('contain.text', 'Antonio tomba 151');
		cy.get('#permanentAddress.mb-1').should('contain', 'Correntoso 1245');
	});
	it('23798 | TC4: Validar  No poder enviar el formulario sin el @.', () => {
		cy.get('#userName').type('Karina');
		cy.get('#userEmail').type('karinamon1849gmail.com');
		cy.get('#currentAddress').type('Antonio tomba 151');
		cy.get('#permanentAddress').type('Correntoso 1245');
		cy.get('#submit').click();
		cy.get('#userEmail').should('have.class', 'field-error', 'border', '1px solid rgb (255, 0, 0)');
	});
	it('23798 | TC5: Validar No poder enviar el formulario con un carácter alfanumérico antes del @', () => {
		cy.get('#userName').type('Karina');
		cy.get('#userEmail').type('8K@gmail.c');
		cy.get('#currentAddress').type('Antonio tomba 151');
		cy.get('#permanentAddress').type('Correntoso 1245');
		cy.get('#submit').click();
		cy.get('#userEmail').should('have.class', 'field-error');
	});
	it('23798 | TC6: Validar No poder enviar el formulario con un carácter alfanumérico después de @.', () => {
		cy.get('#userName').type('Karina');
		cy.get('#userEmail').type('karina8k@.com');
		cy.get('#currentAddress').type('Antonio tomba 151');
		cy.get('#permanentAddress').type('Correntoso 1245');
		cy.get('#submit').click();
		cy.get('#userEmail').should('have.class', 'field-error');
	});
	it('23798 | TC7: Validar No poder enviar el formulario con  dos caracteres alfanuméricos después de @.', () => {
		cy.get('#userName').type('Karina');
		cy.get('#userEmail').type('karina@.8.J8');
		cy.get('#currentAddress').type('Antonio tomba 151');
		cy.get('#permanentAddress').type('Correntoso 1245');
		cy.get('#submit').click();
		cy.get('#userEmail').should('have.class', 'field-error');
	});
});
