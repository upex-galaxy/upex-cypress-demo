describe('GX-41418 | TS: 🪶ToolsQA | Elements | Text Box: Fill form and Submit', () => {
	beforeEach('Estar ubicado en la pagina de DemoQA', () => {
		cy.visit('/text-box'); // Esto es un Comando de Acción directa
	});
	it('41426| TC1: Validar  ingresar al formulario con datos validos', () => {
		cy.fixture('data/Elements/GX-41418-TextBox').then(the => {
			cy.get('#userName').type(the.fullName.data.valido).should('have.value', the.fullName.data.valido);

			cy.get('#userEmail').type(the.email.dataEmail.valido);
			cy.get('#userEmail').should('have.value', the.email.dataEmail.valido);

			cy.get('#currentAddress').type(the.currentAddress.dataCurrentAddress.valido);
			cy.get('#currentAddress').should('have.value', the.currentAddress.dataCurrentAddress.valido);

			cy.get('#permanentAddress').type(the.permanentAddress.dataPermanentAddress.valido);
			cy.get('#permanentAddress').should('have.value', the.permanentAddress.dataPermanentAddress.valido);

			cy.get('#submit').click();
		});
	});
	it('41426| TC2: Validar no poder ingresar el formulario cuando el “email” no contenga @', () => {
		cy.fixture('data/Elements/GX-41418-TextBox').then(the => {
			cy.get('#userName').should('be.empty');

			cy.get('#userEmail').type(the.email.dataEmail.invalido);
			cy.get('#currentAddress').should('be.empty');
			cy.get('#permanentAddress').should('be.empty');
			cy.get('#submit').click();
			cy.get('input.mr-sm-2.field-error.form-control').should('be.enabled');
		});
	});
	it('41426| TC3 Validar no poder ingresar el formulario cuando el “email” no contenga 1 carácter alfanuméricos antes del “@”', () => {
		cy.fixture('data/Elements/GX-41418-TextBox').then(the => {
			cy.get('#userName').should('be.empty');

			cy.get('#userEmail').type(the.email.dataEmail.invalido1);
			cy.get('#currentAddress').should('be.empty');
			cy.get('#permanentAddress').should('be.empty');
			cy.get('#submit').click();
			cy.get('input.mr-sm-2.field-error.form-control').should('be.enabled');
		});
	});
	it('41426| TC4 Validar no poder ingresar el formulario cuando el  “email” no contenga 1 carácter alfanuméricos  después del @', () => {
		cy.fixture('data/Elements/GX-41418-TextBox').then(the => {
			cy.get('#userName').should('be.empty');

			cy.get('#userEmail').type(the.email.dataEmail.invalido2);
			cy.get('#currentAddress').should('be.empty');
			cy.get('#permanentAddress').should('be.empty');
			cy.get('#submit').click();
			cy.get('input.mr-sm-2.field-error.form-control').should('be.enabled');
		});
	});
	it('41426 TC5 Validar no poder ingresar el formulario cuando el “email” no contenga 1 carácter alfanuméricos  antes del “.”', () => {
		cy.fixture('data/Elements/GX-41418-TextBox').then(the => {
			cy.get('#userName').should('be.empty');

			cy.get('#userEmail').type(the.email.dataEmail.invalido3);
			cy.get('#currentAddress').should('be.empty');
			cy.get('#permanentAddress').should('be.empty');
			cy.get('#submit').click();
			cy.get('input.mr-sm-2.field-error.form-control').should('be.enabled');
		});
	});
	it('41426| TC6 Validar no poder ingresar el formulario cuando el “email” no contenga 1 carácter alfanuméricos  después del “.”', () => {
		cy.fixture('data/Elements/GX-41418-TextBox').then(the => {
			cy.get('#userName').should('be.empty');

			cy.get('#userEmail').type(the.email.dataEmail.invalido4);
			cy.get('#currentAddress').should('be.empty');
			cy.get('#permanentAddress').should('be.empty');
			cy.get('#submit').click();
			cy.get('input.mr-sm-2.field-error.form-control').should('be.enabled');
		});
	});
});
import { removeLogs } from '@helper/RemoveLogs';
removeLogs();
