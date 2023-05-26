describe('GX 18412 : ToolsQA | Elements | Text Box: Fill form and Submit', () => {
	beforeEach('Precondición: estar situados en toolQA text box', () => {
		cy.visit('https://demoqa.com/text-box');
	});
	it('18413 | TC1: Validar completar formulario con todos los campos completos', () => {
		cy.get('#userName').type('Barby');
		cy.get('#userEmail').type('bar@gmail.com');
		cy.get('#currentAddress').type('Av Congreso');
		cy.get('#permanentAddress').type('Villa Urquiza 5234');
		cy.get('#submit').click();
		//verificaciones
		cy.get('p#name.mb-1').should('contain', 'Barby');
		cy.get('p#email.mb-1').should('contain', 'bar@gmail.com');
		cy.get('p#currentAddress.mb-1').should('contain', 'Av Congreso');
		cy.get('p#permanentAddress.mb-1').should('contain', 'Villa Urquiza 5234');
	});
	it('18413 | TC2: Validar completar formulario con todos los campos vacíos', () => {
		cy.get('#submit').click();
		//verificaciones
		cy.get('#output').should('contain', '');
	});
	it('18413 | TC3: Validar completar formulario con Full Name vacio, Email: maqueta correcta, Current Address: vacío, Permanent Address: vacío', () => {
		cy.get('#userEmail').type('bar@gmail.com');
		cy.get('#submit').click();
		//verificaciones
		cy.get('#output').should('contain', 'bar@gmail.com');
		cy.get('#output').should('not.contain', 'Barby Av Congreso Villa Urquiza 5234');
	});
	it('18413 | TC4: Validar completar formulario con Full Name vacio, Email: maqueta incorrecta , Current Address: vacío, Permanent Address: vacío.', () => {
		cy.get('#userEmail').type('bar@gmail.+');
		cy.get('#submit').click();
		//verificaciones
		cy.get('#userEmail').should('have.class', 'field-error');
		cy.get('#output').should('not.contain', 'bar@gmail.+');
	});

	it('18413 | TC5: Validar completar formulario con Full Name completo, Email: maqueta correcta, Current Address: vacío, Permanent Address: vacío.', () => {
		cy.get('#userName').type('Barby');
		cy.get('#userEmail').type('bar@gmail.com');
		cy.get('#submit').click();
	});
	it('18413 | TC6: Validar completar formulario con Full Name completo, Email: maqueta correcta, Current Address: completo, Permanent Address: vacío.', () => {
		cy.get('#userName').type('Barby');
		cy.get('#userEmail').type('bar@gmail.com');
		cy.get('#currentAddress').type('Av Congreso');
		cy.get('#submit').click();
	});
	it('18413 | TC7:Validar completar formulario con Full Name completo, Email: maqueta correcta, Current Address: vacio, Permanent Address: completo.', () => {
		cy.get('#userName').type('Barby');
		cy.get('#userEmail').type('bar@gmail.com');
		cy.get('#permanentAddress').type('Villa Urquiza 5234');
		cy.get('#submit').click();
	});
	it('18413 | TC8: Validar completar formulario con Full Name completo, Email: maqueta incorrecta, Current Address: vacío, Permanent Address: vacío.', () => {
		cy.get('#userName').type('Barby');
		cy.get('#userEmail').type('bar@gmail...');
		cy.get('#submit').click();
	});
	it('18413 | TC9: Validar completar formulario con Full Name completo, Email: maqueta incorrecta, Current Address: completo, Permanent Address: vacío.', () => {
		cy.get('#userName').type('Barby');
		cy.get('#userEmail').type('bar@@gmail.com');
		cy.get('#currentAddress').type('Av Congreso');
		cy.get('#submit').click();
	});
	it('18413 | TC10: Validar completar formulario con Full Name completo, Email: maqueta incorrecta, Current Address: vacio, Permanent Address: completo.', () => {
		cy.get('#userName').type('Barby');
		cy.get('#userEmail').type('bar@@@ail.com');
		cy.get('#permanentAddress').type('Villa Urquiza 5234');
		cy.get('#submit').click();
	});
	it('18413 | TC11: Validar completar formulario con Full Name completo, Email: maqueta incorrecta, Current Address: completo, Permanent Address: completo.', () => {
		cy.get('#userName').type('Barby');
		cy.get('#userEmail').type('bar@gmail111');
		cy.get('#currentAddress').type('Av Congreso');
		cy.get('#permanentAddress').type('Villa Urquiza 5234');
		cy.get('#submit').click();
	});
});
