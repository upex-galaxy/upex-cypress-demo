describe('ToolsQA | Elements | Text Box: Fill form and Submit', () => {
	beforeEach('The user must navigate to the endpoint under test', () => {
		cy.visit('https://demoqa.com/text-box');
		cy.url().should('contain', 'text-box');
	});

	it('20683 | TC1: Validar que NO se muestra ningún mensaje cuando los campos ”Full Name”, “Current Address“ y “Permanent Address“ estén vacíos al enviar el formulario', () => {});
	it('20683 | TC2: Validar que el mensaje es mostrado cuando los campos ”Full Name”, “Current Address“ y “Permanent Address“ estén completados al enviar el formulario', () => {});
	it('20683 | TC3: Validar que el formulario NO pueda ser enviado si el campo  ”Email” es inválido', () => {});
	it('20683 | TC4: Validar que el formulario pueda ser enviado si el campo  ”Email” está vacío', () => {});
	it('20683 | TC5: Validar que el formulario pueda ser enviado cuando el campo  ”Email” es válido', () => {});
});
