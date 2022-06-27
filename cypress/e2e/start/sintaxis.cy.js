describe('US # | TS # | TC#: aquí se escribe el escenario de prueba', () =>
{
	it('Aquí empiezas escribiendo una Precondición o más', () =>
	{
		cy.visit('https://example.cypress.io')
	})
	it('Aquí puedes escribir un Paso de Acción', () =>
	{
		cy.get('.home-list a').first().click()
	})
	it('Aquí puedes escribir otro Paso de Acción', () =>
	{
		cy.get("#query-btn").click()
	})
	it("Aquí puedes escribir un Resultado Esperado de este Caso", () =>
	{
		cy.get('.query-btn').should('contain', 'Button')
	})
})
