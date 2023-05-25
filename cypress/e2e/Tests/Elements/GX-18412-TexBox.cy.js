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
	});

	it('18413 | TC2: Validar completar formulario con todos los campos vacíos', () => {
		cy.get('#submit').click();
	});

	it('18413 | TC3: Validar completar formulario con Full Name vacio, Email: maqueta correcta, Current Address: vacío, Permanent Address: vacío', () => {
		cy.get('#userEmail').type('bar@gmail.com');
		cy.get('#submit').click();
	});

	it('18413 | TC4: Validar completar formulario con Full Name vacio, Email: maqueta incorrecta , Current Address: vacío, Permanent Address: vacío.', () => {
		cy.get('#userName').type('Barby');
		cy.get('#userEmail').type('bar@gmail.+');

		cy.get('#submit').click();
	});
	it('18413 | TC5: Validar completar formulario con Full Name vacio, Email: maqueta correcta, Current Address: vacío, Permanent Address: vacío', () => {
		cy.get('#userEmail').type('bar@gmail.com');
		cy.get('#submit').click();
	});
	it('18413 | TC6: Validar completar formulario con Full Name completo, Email: maqueta correcta, Current Address: vacío, Permanent Address: vacío.', () => {
		cy.get('#userName').type('Barby');
		cy.get('#userEmail').type('bar@gmail.com');
		cy.get('#submit').click();
	});
	it('18413 | TC7: Validar completar formulario con Full Name completo, Email: maqueta correcta, Current Address: completo, Permanent Address: vacío.', () => {
		cy.get('#userName').type('Barby');
		cy.get('#userEmail').type('bar@gmail.com');
		cy.get('#currentAddress').type('Av Congreso');
		cy.get('#submit').click();
	});
});
