describe('GX-41418 | TS: 🪶ToolsQA | Elements | Text Box: Fill form and Submit', () => {
	beforeEach('Estar ubicado en la pagina de DemoQA', () => {
		cy.visit('/text-box'); // Esto es un Comando de Acción directa
	});
	it('41426| TC1: Validar  ingresar al formulario con datos validos', () => {
		cy.fixture('data/Elements/GX-41418-TextBox').then(the => {
			cy.get('#userName').type(the.fullName.data.valido);
			cy.get('#userName').should('have.value', the.fullName.data.valido);
		});
	});
	it.skip('US # | TC#2: Aquí puedes escribir otro Caso de Prueba', () => {
		cy.get('[href="/commands/querying"]').eq(2).click();
		cy.get('#query-btn') // Sintaxis Comando Get de Selector de IDs
			.click(); // Esto es un método de Interacción (Acción)
	});
	it.skip('US # | TC#3: Aquí puedes escribir otro Caso de Prueba', () => {
		cy.get('[href="/commands/querying"]').eq(2).click();
		cy.get('#query-btn').click();
		cy.get('.query-btn') // Sintaxis Comando Get de Selector de Clases
			.should('contain.text', 'Button'); // Assertion BDD para validar resultado esperado (de muchas formas)
	});
});
import { removeLogs } from '@helper/RemoveLogs';
removeLogs();
