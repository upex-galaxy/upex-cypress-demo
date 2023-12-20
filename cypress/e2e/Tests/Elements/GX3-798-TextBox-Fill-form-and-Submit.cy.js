describe('GX3-798 | TS: ToolsQA | Elements | Text Box', () => {
	// ARRANGE
	beforeEach('', () => {
		cy.visit('https://demoqa.com/text-box');
		cy.url().should('contain', 'text-box');
	});

	//casos
	it('799|TC1: Validar que se realiza el envio exitoso cuando los datos son ingresados correctamente', () => {
		//constantes
		const j_UserName = 'Janetzi';
		const j_UserEmails = 'janetzi@gmail.com';
		const j_CurrentAddress = 'Direccion principal';
		const j_PermanentAddress = ' Direccion secundaria';
		//steps
		cy.get('input#userName').type(j_UserName);
		cy.get('input#userEmail').type(j_UserEmails);
		cy.get('textarea#currentAddress').type(j_CurrentAddress);
		cy.get('textarea#permanentAddress').type(j_PermanentAddress);
		cy.get('#submit').click();

		//Assertion
		cy.get('p#name').should('contains.text', j_UserName);
		cy.get('p#email').should('contains.text', j_UserEmails);
		cy.get('p#currentAddress').should('contains.text', j_CurrentAddress);
		cy.get('p#permanentAddress').should('contains.text', j_PermanentAddress);
	});

	it('799|TC2: Validar que se realiza el envio exitoso cuando  solo el campo emails tiene un valor valido el resto de los campos es vacio', () => {
		cy.get('input#userName').should('be.empty');
		cy.get('input#userEmail').type(j_UserEmails);
		cy.get('textarea#currentAddress').should('be.empty');
		cy.get('textarea#permanentAddress').should('be.empty');
		cy.get('#submit').click();

		//Assertion
		cy.get('p#email').should('contains.text', j_UserEmails);
	});

	it('799|TC3: Validar que el envio es fallido cuando el campo email no contiene @.', () => {
		//const
		const j_UserEmails1 = 'janetzigmail.com';
		//steps
		cy.get('input#userName').type(j_UserName);
		cy.get('input#userEmail').type(j_UserEmails1);
		cy.get('textarea#currentAddress').type(j_CurrentAddress);
		cy.get('textarea#permanentAddress').type(j_PermanentAddress);
		cy.get('#submit').click();

		//Assertion
		cy.get('p#name').should('contains.text', j_UserName);
		cy.get('p#email').should('contains.text', j_UserEmails);
		cy.get('p#currentAddress').should('contains.text', j_CurrentAddress);
		cy.get('p#permanentAddress').should('contains.text', j_PermanentAddress);
	});
});
