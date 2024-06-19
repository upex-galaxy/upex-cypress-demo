import data from '@data/Elements/GX3-3754-TextBox.json';
describe('GX3-3754| ToolsQA | Elements | Text Box: Fill form and Submit', () => {
	beforeEach('PRC: El usuario debe estar situado en la pagina Demo Qa', () => {
		cy.visit('https://demoqa.com/text-box');
		cy.url().should('include', 'text-box');
	});
	it('3755 | TC1: Validar registrar correctamente al ingresar los datos en el formulario.', () => {
		cy.get('#userName').type(data.dataValid.fullName);
		cy.get('#userEmail').type(data.dataValid.email);
		cy.get('#currentAddress').type(data.dataValid.currentAddress);
		cy.get('#permanentAddress').type(data.dataValid.permanetAddress);
		cy.get('#submit').click();

		//Validacion
		cy.get('#name').should('contain.text', data.dataValid.fullName);
		cy.get('#email').should('contain.text', data.dataValid.email);
		cy.get('p#currentAddress').should('contain.text', data.dataValid.currentAddress);
		cy.get('p#permanentAddress').should('contain.text', data.dataValid.permanetAddress);
		
	});
	it.skip('3755 | TC2: Validar No registrar correctamente cuando el campo de "Full Name" esta vacio.', () => {
		
		cy.get('#userEmail').type(data.dataTc2.email);
		cy.get('#currentAddress').type(data.dataTc2.currentAddress);
		cy.get('#permanentAddress').type(data.dataTc2.permanetAddress);
		cy.get('#submit').click();

		//Validacion 
		cy.get('#name').should('not.exist');
		cy.get('#email').should('not.exist');
		cy.get('p#currentAddress').should('not.exist');
		cy.get('p#permanentAddress').should('not.exist');
		//cy.get('.form-control').should('be.visible').and('eq', dataValid);
	});
	it.skip('3755 | TC3: Validar No registrar correctamente cuando el campo de "Current Address" esta vacio.', () => {
		cy.get('#userName').type(data.dataTc3.fullName);
		cy.get('#userEmail').type(data.dataTc3.email);
		cy.get('#permanentAddress').type(data.dataTc3.permanetAddress);
		cy.get('#submit').click();
		
		//Validacion
		cy.get('#name').should('not.exist');
		cy.get('#email').should('not.exist');
		cy.get('p#currentAddress').should('not.exist');
		cy.get('p#permanentAddress').should('not.exist');
	});
	it.skip('3755 | TC4: Validar No registrar correctamente cuando el campo de"Permanet Address" esta vacio.', () => {
		cy.get('#userName').type(data.dataTc4.fullName);
		cy.get('#userEmail').type(data.dataTc4.email);
		cy.get('#currentAddress').type(data.dataTc4.currentAddress);
		cy.get('#submit').click();

		//Validacion 
		cy.get('#name').should('not.exist');
		cy.get('#email').should('not.exist');
		cy.get('p#currentAddress').should('not.exist');
		cy.get('p#permanentAddress').should('not.exist');
	});
	it.skip('3755 | TC5: Validar No registrar correctamente cuando el campo de "Email" esta vacío.', () => {
		cy.get('#userName').type(data.dataTc5.fullName);
		cy.get('#currentAddress').type(data.dataTc5.currentAddress);
		cy.get('#permanentAddress').type(data.dataTc5.permanetAddress);
		cy.get('#submit').click();

		//Validacion 
		cy.get('#name').should('not.exist');
		cy.get('#email').should('not.exist');
		cy.get('p#currentAddress').should('not.exist');
		cy.get('p#permanentAddress').should('not.exist');
		
	});

	it('3755 | TC6: Validar No registrar correctamente cuando el “email” no contiene “@“', () => {
		cy.get('#userName').type(data.dataTc6.fullName);
		cy.get('#userEmail').type(data.dataTc6.email);
		cy.get('#currentAddress').type(data.dataTc6.currentAddress);
		cy.get('#permanentAddress').type(data.dataTc6.permanetAddress);
		cy.get('#submit').click();

		//Validacion campo useremail en error
		cy.get('#userEmail').should('have.class','field-error');
		//Validacion
		cy.get('#name').should('not.exist');
		cy.get('#email').should('not.exist');
		cy.get('p#currentAddress').should('not.exist');
		cy.get('p#permanentAddress').should('not.exist');
		
		
	});
	it('3755 | TC7: Validar No registrar correctamente cuando el “email” no contiene “caracter alfanumerico“ despues del “@“', () => {
		cy.get('#userName').type(data.dataTc7.fullName);
		cy.get('#userEmail').type(data.dataTc7.email);
		cy.get('#currentAddress').type(data.dataTc7.currentAddress);
		cy.get('#permanentAddress').type(data.dataTc7.permanetAddress);
		cy.get('#submit').click();

		//Validacion campo user email en error
		cy.get('#userEmail').should('have.class','field-error');
		//Validacion
		cy.get('#name').should('not.exist');
		cy.get('#email').should('not.exist');
		cy.get('p#currentAddress').should('not.exist');
		cy.get('p#permanentAddress').should('not.exist');
	});
	it('3755 | TC8: Validar No registrar correctamente cuando el “email” no contiene “.“ despues del “caracter alfanumerico “ despues de “@”', () => {
		cy.get('#userName').type(data.dataTc8.fullName);
		cy.get('#userEmail').type(data.dataTc8.email);
		cy.get('#currentAddress').type(data.dataTc8.currentAddress);
		cy.get('#permanentAddress').type(data.dataTc8.permanetAddress);
		cy.get('#submit').click();

		//Validacion campo user email en error
		cy.get('#userEmail').should('have.class','field-error');
		//Validacion
		cy.get('#name').should('not.exist');
		cy.get('#email').should('not.exist');
		cy.get('p#currentAddress').should('not.exist');
		cy.get('p#permanentAddress').should('not.exist');
	});
	it('3755 | TC9: Validar No registrar correctamente cuando el “email” no contiene “2 caracteres alfanumericos“ despues del “.”', () => {
		cy.get('#userName').type(data.dataTc9.fullName);
		cy.get('#userEmail').type(data.dataTc9.email);
		cy.get('#currentAddress').type(data.dataTc9.currentAddress);
		cy.get('#permanentAddress').type(data.dataTc9.permanetAddress);
		cy.get('#submit').click();

		//Validacion campo user email en error
		cy.get('#userEmail').should('have.class','field-error');
		//Validacion
		cy.get('#name').should('not.exist');
		cy.get('#email').should('not.exist');
		cy.get('p#currentAddress').should('not.exist');
		cy.get('p#permanentAddress').should('not.exist');
	});
});
