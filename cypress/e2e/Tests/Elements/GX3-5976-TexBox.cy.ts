describe('GX3-5976 ToolsQA | Elements | Text Box: Fill form and Submit', () => {
	beforeEach('PRC Abrir la url de Tex Box de Tools QA', () => {
		cy.visit('https://demoqa.com/text-box');
		cy.url().should('contain', 'text-box');
	});

	it.only('TC01 Validar el registro de usuario ingresando data valida', () => {
		cy.get('input#userName').type('Milagros');
		cy.get('input#userName').should('have.value', 'Milagros');
		cy.get('input#userEmail').type('mila@gmail.com');
		cy.get('input#userEmail').should('have.value', 'mila@gmail.com');
		cy.get('textarea#currentAddress').type('Barcelona');
		cy.get('textarea#currentAddress').should('have.value', 'Barcelona');
		cy.get('textarea#permanentAddress').type('España');
		cy.get('textarea#permanentAddress').should('have.value', 'España');

		cy.get('button#submit').click();
		cy.get('#output').should('be.visible');
		cy.get('#name').should('contain', 'Milagros');
		cy.get('#email').should('contain', 'mila@gmail.com');
		cy.get('#output #currentAddress').should('contain', 'Barcelona');
		cy.get('#output #permanentAddress').should('contain', 'España');
	});

	it('TC02 Validar No registro ingresando caracteres alfanumericos en campo full Name', () => {
		cy.get('input#userName["type"="text"]').should('exist').and('be.visible').and('be.enabled');
		cy.get('input#userName').type('12mil34');
		cy.get('input#userEmail["type"="email"]').should('exist').and('be.visible').and('be.enabled');
		cy.get('input#userEmail').type('juan@gmail.com');
		cy.get('textarea#currentAddress').should('exist').and('be.visible').and('be.enabled');
		cy.get('textarea#currentAddress').type('Madrid');
		cy.get('textarea#permanentAddress').should('be.enabled').and('exist').and('be.visible');
		cy.get('textarea#permanentAddress').type('España');

		cy.get('button#submit').click();
	});
	it('TC03 Validar No registro ingresando data con formato invalido en capo Email', () => {});
});
