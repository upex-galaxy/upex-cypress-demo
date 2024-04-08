import datosFixture from 'cypress/fixtures/data/Elements/GX3-2966-textBox.json';

describe('GX3-2966 | TS: ToolsQA | Elements | Text Box: Fill form and Submit', () => {
	beforeEach('PRC: El usuario debe estar en la página DEMOQA', ()=>{
		cy.visit('https://demoqa.com/text-box');
		cy.url().should('contain','text-box');		
	});

	const validName = datosFixture.fullName.values.valid;
	const validEmail = datosFixture.email.values.validTc1;
	const validCurrentAddress = datosFixture.currentAddress.values.valid;
	const validPermanentAddress = datosFixture.permanentAddress.values.valid;
	
	it('GX3-2966 | TC1: Validar que el usuario llene correctamente el formulario', ()=> {
		//ENTRADA DE DATOS
		cy.get(datosFixture.fullName.input).type(validName);
		cy.get(datosFixture.email.input).type(validEmail);
		cy.get(datosFixture.currentAddress.input).type(validCurrentAddress);
		cy.get(datosFixture.permanentAddress.input).type(validPermanentAddress);
		
		cy.get('#submit').click();

		//VERIFICACIÓN DE RESULTADOS
		cy.get('#name.mb-1').should('contain.text', validName);
		cy.get('#email.mb-1').should('contain.text', validEmail);
		cy.get('#currentAddress.mb-1').should('contain.text', validCurrentAddress);
		cy.get('#permanentAddress.mb-1').should('contain.text', validPermanentAddress);
	});

	it('GX3-2966 | TC2: Validar NO enviar el formulario cuando los campos estén vacíos', ()=> {
		cy.get('#submit').click();

		//VERIFICACIÓN DE RESULTADOS
		cy.get(datosFixture.fullName.input).should('be.empty');
		cy.get(datosFixture.email.input).should('be.empty');
		cy.get(datosFixture.currentAddress.input).should('be.empty');
		cy.get(datosFixture.permanentAddress.input).should('be.empty');

		cy.get('#name.mb-1').should('not.exist');
		cy.get('#email.mb-1').should('not.exist');
		cy.get('#currentAddress.mb-1').should('not.exist');
		cy.get('#permanentAddress.mb-1').should('not.exist');
	});

	it('GX3-2966 | TC3: Validar NO enviar el formulario si el campo Email no contiene "@"', ()=> {
		const validEmailTc3 = datosFixture.email.values.valisTc3;
		
		//ENTRADA DE DATOS
		cy.get(datosFixture.fullName.input).type(validName);
		cy.get(datosFixture.email.input).type(validEmailTc3);
		cy.get(datosFixture.currentAddress.input).type(validCurrentAddress);
		cy.get(datosFixture.permanentAddress.input).type(validPermanentAddress);
		
		cy.get('#submit').click();

		//VERIFICACIÓN DE RESULTADOS
		cy.get('.mr-sm-2.field-error.form-control').should('have.css', 'border-color', 'rgb(255, 0, 0)');
		cy.get('#name.mb-1').should('not.exist');
		cy.get('#email.mb-1').should('not.exist');
		cy.get('#currentAddress.mb-1').should('not.exist');
		cy.get('#permanentAddress.mb-1').should('not.exist');
	});

	it('GX3-2966 | TC4: Validar NO enviar el formulario si el campo Email no contiene un carácter alfanumérico antes del "@"', ()=> {
		const validEmailTc4 = datosFixture.email.values.valisTc4;
		
		//ENTRADA DE DATOS
		cy.get(datosFixture.fullName.input).type(validName);
		cy.get(datosFixture.email.input).type(validEmailTc4);
		cy.get(datosFixture.currentAddress.input).type(validCurrentAddress);
		cy.get(datosFixture.permanentAddress.input).type(validPermanentAddress);
		
		cy.get('#submit').click();

		//VERIFICACIÓN DE RESULTADOS
		cy.get('.mr-sm-2.field-error.form-control').should('have.css', 'border-color', 'rgb(255, 0, 0)');
		cy.get('#name.mb-1').should('not.exist');
		cy.get('#email.mb-1').should('not.exist');
		cy.get('#currentAddress.mb-1').should('not.exist');
		cy.get('#permanentAddress.mb-1').should('not.exist');
	});

	it('GX3-2966 | TC5: Validar NO enviar el formulario si el campo Email no contiene un carácter alfanumérico después del "@"', ()=> {
		const validEmailTc5 = datosFixture.email.values.valisTc5;

		//ENTRADA DE DATOS
		cy.get(datosFixture.fullName.input).type(validName);
		cy.get(datosFixture.email.input).type(validEmailTc5);
		cy.get(datosFixture.currentAddress.input).type(validCurrentAddress);
		cy.get(datosFixture.permanentAddress.input).type(validPermanentAddress);
		
		cy.get('#submit').click();

		//VERIFICACIÓN DE RESULTADOS
		cy.get('.mr-sm-2.field-error.form-control').should('have.css', 'border-color', 'rgb(255, 0, 0)');
		cy.get('#name.mb-1').should('not.exist');
		cy.get('#email.mb-1').should('not.exist');
		cy.get('#currentAddress.mb-1').should('not.exist');
		cy.get('#permanentAddress.mb-1').should('not.exist');
	});

	it('GX3-2966 | TC6: Validar NO enviar el formulario si el campo Email no contiene un "." después de 1 carácter alfanumérico después "@"', ()=> {
		const validEmailTc6 = datosFixture.email.values.valisTc6;

		//ENTRADA DE DATOS
		cy.get(datosFixture.fullName.input).type(validName);
		cy.get(datosFixture.email.input).type(validEmailTc6);
		cy.get(datosFixture.currentAddress.input).type(validCurrentAddress);
		cy.get(datosFixture.permanentAddress.input).type(validPermanentAddress);
		
		cy.get('#submit').click();

		//VERIFICACIÓN DE RESULTADOS
		cy.get('.mr-sm-2.field-error.form-control').should('have.css', 'border-color', 'rgb(255, 0, 0)');
		cy.get('#name.mb-1').should('not.exist');
		cy.get('#email.mb-1').should('not.exist');
		cy.get('#currentAddress.mb-1').should('not.exist');
		cy.get('#permanentAddress.mb-1').should('not.exist');
	});

	it('GX3-2966 | TC7: Validar NO enviar el formulario si el campo Email no contiene al menos 2 caracteres después del "."', ()=> {
		const validEmailTc7 = datosFixture.email.values.valisTc7;

		//ENTRADA DE DATOS
		cy.get(datosFixture.fullName.input).type(validName);
		cy.get(datosFixture.email.input).type(validEmailTc7);
		cy.get(datosFixture.currentAddress.input).type(validCurrentAddress);
		cy.get(datosFixture.permanentAddress.input).type(validPermanentAddress);
		
		cy.get('#submit').click();

		//VERIFICACIÓN DE RESULTADOS
		cy.get('.mr-sm-2.field-error.form-control').should('have.css', 'border-color', 'rgb(255, 0, 0)');
		cy.get('#name.mb-1').should('not.exist');
		cy.get('#email.mb-1').should('not.exist');
		cy.get('#currentAddress.mb-1').should('not.exist');
		cy.get('#permanentAddress.mb-1').should('not.exist');
	});

	it('GX3-2966 | TC8: Validar enviar el formulario cuando se llene al menos un campo con un dato válido', ()=> {
		const randomNumber = Math.floor(Math.random() * 4);
		const randomInput  = datosFixture.dataInput[randomNumber];
		const randomValue = datosFixture.dataField[randomNumber];		
		const randomLabel = datosFixture.dataLabel[randomNumber];

		cy.get(randomInput).type(randomValue);	
		cy.get('#submit').click();

		cy.get(randomLabel).should('contain.text', randomValue);
	});	
});
