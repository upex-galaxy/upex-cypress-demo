describe('TS#27520 : ✅ToolsQA | Elements | Text Box: Fill form and Submit', () =>
{
	beforeEach('Precondición: user should be stay in register page', () =>
	{
		cy.visit('https://demoqa.com/text-box') // Esto es un Comando de Acción directa
	})
	it('US # | TC#1: 27520 | Validate submit fill form with empty data', () =>
	{
		cy.get('[href="/commands/querying"]') // Sintaxis Comando Get de Selector de Atributos
			.eq(2) // Esto es un método opcional
			.click() // Esto es un método de Interacción
	})
	it('US # | TC#2: Aquí puedes escribir otro Caso de Prueba', () =>
	{
		cy.get('[href="/commands/querying"]')
			.eq(2) 
			.click() 
		cy.get("#query-btn") // Sintaxis Comando Get de Selector de IDs
			.click() // Esto es un método de Interacción (Acción)
	})
	it('US # | TC#3: Aquí puedes escribir otro Caso de Prueba', () =>
	{
		cy.get('[href="/commands/querying"]')
			.eq(2) 
			.click() 
		cy.get("#query-btn")
			.click()
		cy.get('.query-btn') // Sintaxis Comando Get de Selector de Clases
			.should('contain.text', 'Button') // Assertion BDD para validar resultado esperado (de muchas formas)
	})
})