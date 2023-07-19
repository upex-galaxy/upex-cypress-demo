describe(' GX-24109 | ✅ToolsQA | Elements | Text Box: Fill form and Submit', () => {
	beforeEach('PRC: Ingresar a la página', () => {
		cy.visit('/text-box');
	});

	it('GX-24109 | TC1: Validar que al estar los campos llenos para “Nombre Completo”, “Dirección Actual” y “Dirección Permanente” , la cadena se muestre a continuación como un párrafo después de enviar.', () => {
		cy.fixture('data/GX-24109-TextBoxForm').then(the => {
			cy.get(the.FullName.input).type(the.FullName.data.valid); //campo nombre completo lleno
			cy.get(the.FullName.input).should('have.value', the.FullName.data.valid);
			cy.get(the.CurrentAddress.input).type(the.CurrentAddress.data.valid); //campo direccion actual lleno
			cy.get(the.CurrentAddress.input).should('have.value', the.CurrentAddress.data.valid);
			cy.get(the.PermanentAddress.input).type(the.PermanentAddress.data.valid); //campo permanente actual lleno
			cy.get(the.PermanentAddress.input).should('have.value', the.PermanentAddress.data.valid);
			cy.get(the.SubmitButton).click(); //click en boton
			cy.get('#name').should('contain.text', 'Name:NataliaPedraza');
			cy.get('#currentAddress').should('have.value', the.CurrentAddress.data.valid);
			cy.get('#permanentAddress').should('have.value', the.PermanentAddress.data.valid);
		});
	});

	it('GX-24109 |TC2: Validar que al estar los campos vacíos para “Nombre Completo”, “Dirección Actual” y “Dirección Permanente” , no se muestre ningún mensaje de registro después del envío.', () => {
		cy.fixture('data/GX-24109-TextBoxForm').then(the => {
			cy.get(the.FullName.input).should('be.empty'); //campo nombre completo vacio
			cy.get(the.CurrentAddress.input).should('be.empty'); //campo direccion actual  vacio
			cy.get(the.PermanentAddress.input).should('be.empty'); //campo permanente actual  vacio
			cy.get(the.SubmitButton).click(); //click en boton
		});
	});

	it('GX-24109 | TC3: Validar que el campo "Correo electrónico" sea válido si contiene @,mínimo 1 caracter alfanumérico antes de “@”,1 carácter alfanumérico después de “@” y  2 caracteres alfanuméricos después de “.” ', () => {
		cy.fixture('data/GX-24109-TextBoxForm').then(the => {
			cy.get(the.Email.input).type(the.Email.data.valid); //campo email valido
			cy.get(the.Email.input).should('have.value', the.Email.data.valid);
			cy.get(the.SubmitButton).click(); //click en boton
			cy.get('#email').should('contain.text', 'Email:natipedraza22@gmail.com');
		});
	});

	it('GX-24109 |  TC4: Validar que el campo "Correo electrónico" sea inválido sino contiene @.', () => {
		cy.fixture('data/GX-24109-TextBoxForm').then(the => {
			cy.get(the.Email.input).type(the.Email.data.invalid1); //no contiene @.
			cy.get(the.Email.input).should('have.value', the.Email.data.invalid1);
			cy.get(the.SubmitButton).click(); //click en boton
			cy.get(the.Email.input).should('have.css', 'border-color', 'rgb(255, 0, 0)');
			cy.get(the.Email.input).should('have.class', 'field-error');
		});
	});

	it('GX-24109 |  TC5: Validar que el campo "Correo electrónico" sea inválido sino contiene (mínimo) 1 carácter alfanumérico antes de “@” .', () => {
		cy.fixture('data/GX-24109-TextBoxForm').then(the => {
			cy.get(the.Email.input).type(the.Email.data.invalid2); //no contiene (mínimo) 1 carácter alfanumérico antes de “@” .
			cy.get(the.Email.input).should('have.value', the.Email.data.invalid2);
			cy.get(the.SubmitButton).click(); //click en boton
			cy.get(the.Email.input).should('have.css', 'border-color', 'rgb(255, 0, 0)');
			cy.get(the.Email.input).should('have.class', 'field-error');
		});
	});

	it('GX-24109 |  TC6: Validar que el campo "Correo electrónico" sea inválido sino contiene "." después: 1 carácter alfanumérico después de “@”.', () => {
		cy.fixture('data/GX-24109-TextBoxForm').then(the => {
			cy.get(the.Email.input).type(the.Email.data.invalid3); //no contiene "." después: 1 carácter alfanumérico después de “@”.
			cy.get(the.Email.input).should('have.value', the.Email.data.invalid3);
			cy.get(the.SubmitButton).click(); //click en boton
			cy.get(the.Email.input).should('have.css', 'border-color', 'rgb(255, 0, 0)');
			cy.get(the.Email.input).should('have.class', 'field-error');
		});
	});

	it('GX-24109 | TC7: Validar que el campo "Correo electrónico" sea inválido sino contiene (mínimo) 2 caracteres alfanuméricos después de “.”', () => {
		cy.fixture('data/GX-24109-TextBoxForm').then(the => {
			cy.get(the.Email.input).type(the.Email.data.invalid4); //no contiene (mínimo) 2 caracteres alfanuméricos después de “.”
			cy.get(the.Email.input).should('have.value', the.Email.data.invalid4);
			cy.get(the.SubmitButton).click(); //click en boton
			cy.get(the.Email.input).should('have.css', 'border-color', 'rgb(255, 0, 0)');
			cy.get(the.Email.input).should('have.class', 'field-error');
		});
	});
});

import { removeLogs } from '@helper/RemoveLogs';

removeLogs();
