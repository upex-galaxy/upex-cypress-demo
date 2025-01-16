describe('GX3-5976 ToolsQA | Elements | Text Box: Fill form and Submit', () => {
	beforeEach('PRC Abrir la url de Tex Box de Tools QA', () => {
		cy.visit('https://demoqa.com/text-box');
		cy.url().should('contain', 'text-box');
	});

	it('TC01 Validar el registro de usuario ingresando data valida', () => {
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
			cy.get('p#currentAddress.mb-1').should('contain.text', carpeta.currentAddress.currentAddressValido);
			cy.get('p#permanentAddress.mb-1').should('contain.text', carpeta.permanentAddress.permanentAddressValido);
		});
	});
	it('TC02 Validar NO registro de usuario dejando campos vacios', () => {
		cy.fixture('data/Elements/GX3-5976-texBox.json').then(carpeta => {
			cy.get('#userName').should('not.have.value');
			cy.get('#userEmail').should('not.have.value');
			cy.get('#currentAddress').should('not.have.value');
			cy.get('#permanentAddress').should('not.have.value');

			cy.get('button#submit').click();
			cy.get('#output').should('not.be.visible');
		});
	});

	it('TC03 Validar que se muestre mensaje en rojo cuando ingresa data con formato invalido en capo Email (@)', () => {
		cy.fixture('data/Elements/GX3-5976-texBox.json').then(carpeta => {
			cy.get('#userName').type(carpeta.userName.userNameValido2);
			cy.get('#userName').should('have.value', carpeta.userName.userNameValido2);
			cy.get('#userEmail').type(carpeta.userEmail.userEmailAtSign);
			cy.get('#userEmail').should('have.value', carpeta.userEmail.userEmailAtSign);
			cy.get('#currentAddress').type(carpeta.currentAddress.currentAddressValido2);
			cy.get('#currentAddress').should('have.value', carpeta.currentAddress.currentAddressValido2);
			cy.get('#permanentAddress').type(carpeta.permanentAddress.permanentAddressValido2);
			cy.get('#permanentAddress').should('have.value', carpeta.permanentAddress.permanentAddressValido2);

			cy.get('button#submit').click();
			cy.get('#userEmail').should('have.class', 'field-error');
			cy.get('#output').should('not.be.visible');
		});
	});

	it('TC04 Validar que se muestre mensaje en rojo cuando ingresa data con formato invalido en capo Email (.)', () => {
		cy.fixture('data/Elements/GX3-5976-texBox.json').then(carpeta => {
			cy.get('#userName').type(carpeta.userName.userNameValido3);
			cy.get('#userName').should('have.value', carpeta.userName.userNameValido3);
			cy.get('#userEmail').type(carpeta.userEmail.userEmailSinPunto);
			cy.get('#userEmail').should('have.value', carpeta.userEmail.userEmailSinPunto);
			cy.get('#currentAddress').type(carpeta.currentAddress.currentAddressValido3);
			cy.get('#currentAddress').should('have.value', carpeta.currentAddress.currentAddressValido3);
			cy.get('#permanentAddress').type(carpeta.permanentAddress.permanentAddressValido3);
			cy.get('#permanentAddress').should('have.value', carpeta.permanentAddress.permanentAddressValido3);

			cy.get('button#submit').click();
			cy.get('#userEmail').should('have.class', 'field-error');
			cy.get('#output').should('not.be.visible');
		});
	});

	it.only('TC05 Validar que se muestre mensaje en rojo cuando ingresa data con formato invalido en capo Email (com)', () => {
		cy.fixture('data/Elements/GX3-5976-texBox.json').then(carpeta => {
			cy.get('#userName').type(carpeta.userName.userNameValido4);
			cy.get('#userName').should('have.value', carpeta.userName.userNameValido4);
			cy.get('#userEmail').type(carpeta.userEmail.userEmailSinCom);
			cy.get('#userEmail').should('have.value', carpeta.userEmail.userEmailSinCom);
			cy.get('#currentAddress').type(carpeta.currentAddress.currentAddressValido4);
			cy.get('#currentAddress').should('have.value', carpeta.currentAddress.currentAddressValido4);
			cy.get('#permanentAddress').type(carpeta.permanentAddress.permanentAddressValido4);
			cy.get('#permanentAddress').should('have.value', carpeta.permanentAddress.permanentAddressValido4);

			cy.get('button#submit').click();
			cy.get('#userEmail').should('have.class', 'field-error');
			cy.get('#output').should('not.be.visible');
		});
	});
});
