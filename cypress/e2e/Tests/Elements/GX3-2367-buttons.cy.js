describe ('GX3-2367 | TS: ⚡️ToolsQA | Elements | Radio Buttons', ()=>
{	
	beforeEach('Precondición: Usuario debe estar situado en la página demoqa',()=>
	{
	cy.visit('https://demoqa.com/radio-button');

	})
	it('US2367 | TC1: Validar  poder presionar el botón YES', () =>
	{
		cy.get('[href="/commands/querying"]')
		.eq(2)
		.click()

	})
	it('US2367')
	
	})



	/*it('US # | TC#1: Aquí puedes escribir un Caso de Prueba', () =>
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
})*/


