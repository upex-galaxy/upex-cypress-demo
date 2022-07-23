describe('US # | TS # | TC#: aquí se escribe el escenario de prueba', () =>
{
	it('Aquí empiezas escribiendo una Precondición o más', () =>
	{
		cy.visit('https://example.cypress.io') // Esto es un Comando de Acción directa
	})
	it('Aquí puedes escribir un Paso de Acción', () =>
	{
		cy.get('[href="/commands/querying"]') // Sintaxis Comando Get de Selector de Atributos
			.eq(2) // Esto es un método opcional
			.click() // Esto es un método de Interacción
	})
	it('Aquí puedes escribir otro Paso de Acción', () =>
	{
		cy.get("#query-btn") // Sintaxis Comando Get de Selector de IDs
			.click() // Esto es un método de Interacción
	})
	it("Aquí puedes escribir un Resultado Esperado de este Caso", () =>
	{
		cy.get('.query-btn') // Sintaxis Comando Get de Selector de Clases
			.should('contain', 'Button') // Assertion BDD para validar resultado esperado (de muchas formas)
	})
})
