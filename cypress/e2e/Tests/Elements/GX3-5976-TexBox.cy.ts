describe('GX3-5976 ToolsQA | Elements | Text Box: Fill form and Submit', () => {
	beforeEach('PRC Abrir la url de Tex Box de Tools QA', () => {
		cy.visit('https://demoqa.com/text-box');
		cy.url().should('contain', 'text-box');
	});

	it.only('TC01 Validar el registro de usuario ingresando data valida', () => {
		cy.fixture('data/Elements/GX3-5976-texBox.json').then(carpeta => {
			cy.get('#userName').type(carpeta.userName.userNameValido);
			cy.get('#userName').should('have.value', carpeta.userName.userNameValido);
			cy.get('#userEmail').type(carpeta.userEmail.userEmailValido);
			cy.get('#userEmail').should('have.value', carpeta.userEmail.userEmailValido);
			cy.get('#currentAddress').type(carpeta.currentAddress.currentAddressValido);
			cy.get('#currentAddress').should('have.value', carpeta.currentAddress.currentAddressValido);
			cy.get('#permanentAddress').type(carpeta.permanentAddress.permanentAddressValido);
			cy.get('#permanentAddress').should('have.value', carpeta.permanentAddress.permanentAddressValido);

			cy.get('button#submit').click();
			cy.get('p#name').should('contain.text', carpeta.userName.userNameValido);
			cy.get('p#email').should('contain.text', carpeta.userEmail.userEmailValido);
			cy.get('p#currentAddress.mb-1').eq(1).should('contain.text', carpeta.currentAddress.currentAddressValido);
			cy.get('p#permanentAddress').eq(1).should('contain.text', carpeta.permanentAddress.permanentAddressValido);
		});
	});

	it('TC02 Validar No registro dejando campos vacíos', () => {
		cy.get('input#userName').should('be.empty');
		cy.get('input#userEmail').should('be.empty');
		cy.get('textarea#currentAddress').should('be.empty');
		cy.get('textarea#permanentAddress').should('be.empty');

		cy.get('button#submit').click();
		cy.get('#output').should('not.be.visible');
	});

	it('TC03 Validar que se muestre mensaje en rojo cuando ingresa data con formato invalido en capo Email (@)', () => {
		cy.get('input#userEmail').type('email');
		cy.get('input#userEmail').should('have.value', 'email');
		cy.get('button#submit').click();

		cy.get('input#userEmail').should('have.class', 'field-error');

		// cy.get('.field-error').should('have.css', 'border', '1px solid red');
		// no funciona porque no se puede validar el color del borde
		// validar con propiedades CSS no es recomendable, ya que puede cambiar dependiendo del navegador
	});
});
