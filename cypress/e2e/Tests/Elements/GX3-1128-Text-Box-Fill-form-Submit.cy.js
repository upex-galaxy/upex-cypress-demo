describe('⚡️ToolsQA | Elements | Text Box: Fill form and Submit', () => {
	//Precondition:
	beforeEach('PRC: Usuario debe estar situado en la página DemoQA en el módulo Text Box', () => {
		cy.visit('https://demoqa.com/text-box');
		cy.url().should('contain', 'text-box');
	});
	//Diseño de Test Cases:
	//it('GX3-1129 | TC1: Validar mostrar cadena de texto (mensaje) después de enviar los campos válidos “Full Name”, “Current Address” and “Permanent Address”.', () => {});
});
