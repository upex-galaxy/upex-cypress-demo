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

	it.only('TC02 Validar No registro dejando campos vacíos', () => {
		cy.get('input#userName').should('be.empty');
		cy.get('input#userEmail').type('mila@gmail.com');
		cy.get('input#userEmail').should('have.value', 'mila@gmail.com');
		cy.get('textarea#currentAddress').should('be.empty');
		cy.get('textarea#permanentAddress').should('be.empty');

		cy.get('button#submit').click();
		cy.get('#output').should('not.be.visible');
	});

	it('TC03 Validar que se muestre mensaje en rojo cuando ingresa data con formato invalido en capo Email (@)', () => {;
	cy.get('input#userName').type('Milagros');
	cy.get('input#userName').should('have.value', 'Milagros');
	cy.get('input#userEmail).type("email");
	cy.get('input#userEmail').;
	cy.get('textarea#currentAddress').type('Barcelona');
	cy.get('textarea#currentAddress').should('have.value', 'Barcelona');
	cy.get('textarea#permanentAddress').type('España');
	cy.get('textarea#permanentAddress').should('have.value', 'España');

	cy.get('button#submit').click();
		cy.get(
	})
});
