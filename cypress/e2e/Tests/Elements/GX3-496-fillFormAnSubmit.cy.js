describe('Text Box: Fill Form and Submit', () => {
	beforeEach(() => {
		cy.visit('https://demoqa.com/text-box');
	});
	it('497 | TC1: Validar funcionalidad de campo full Name', () => {
		cy.fixture('data/Elements/GX-496-fillFormAndSubmit').then(the => {
			cy.get(the.fullName.input).type(the.fullName.data.validName).should('have.value', the.fullName.data.validName);
		});
	});
	it('497 | TC2: Validar Funcion campo Correo Electronico', () => {
		cy.fixture('data/Elements/GX-496-fillFormAndSubmit').then(the => {
			cy.get(the.userEmail.input).type(the.userEmail.data.validEmail).should('have.value', the.userEmail.data.validEmail);
		});
	});
	it('497 | TC3: Validar formato valido de correo incorrecto', () => {
		cy.fixture('data/Elements/GX-496-fillFormAndSubmit').then(the => {
			cy.get(the.userEmail.input).type(the.userEmail.data.validEmail).should('not.have.value', the.userEmail.data.invalidEmail);
		});
	});
	it('497 | TC4: Validar Funcionalidad de boton Submit', () => {
		cy.fixture('data/Elements/GX-496-fillFormAndSubmit').then(the => {
			cy.get(the.submitButton.input).should('be.visible').click();
		});
	});
	it('497 | TC6: Validar despliegue de mensaje de error', () => {
		cy.fixture('data/Elements/GX-496-fillFormAndSubmit').then(the => {
			cy.get(the.outputMessage.input).should('exist');
			cy.get(the.outputMessage.customerConfirmedInput).should('contain', 'Juana de Arco');
		});
	});
});
