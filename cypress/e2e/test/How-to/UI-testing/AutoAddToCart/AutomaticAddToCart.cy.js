describe('add new item to cart', () => {
	let item
	let expectedTotal
	let clicks = 5 // Parametros para agregar al Commands
	let product = 'Margarita' // Parametros para agregar al Commands
	beforeEach(() => {
		cy.getUrl('https://amazing-bubblegum-4c0f5c.netlify.app/', 'netlify')
	})
	it('add one item to cart', () => {
		cy.contains(product)
			.parentsUntil('.producto')
			.last()
			.within(() => {
				for (i = 0; i < clicks; i++) {
					cy.get('button')
						.eq(2) // Botón SUMAR ITEM
						.click({force: true}) // SUMAR INPUT DE CANTIDAD
				}
				cy.get('button')
					.eq(1)
					.then((number) => {
						item = number.text()
						added = clicks.toString()
						expect(item).to.eq(added)
						expect(number).to.have.text(item)
					})
				cy.get('button')
					.eq(3) // Botón PEDIR
					.click({force: true}) // AGREGAR ITEMS AL CART

				cy.contains('$').then((price) => {
					// Guardar el precio del producto en una Variable, y Multiplicarlo por la cantidad de items sumado
					expectedTotal = '$' + parseInt(price.text().replace('$', '')) * parseInt(item)
					cy.log(`Precio esperado: ${expectedTotal}`)
				})
			})
		// IR AL SHOPPING CART:
		cy.get("[href='#/cart'] span").should('have.text', clicks)
		cy.get("[href='#/cart']").click()

		cy.get('.carrito__priceTrash h2').then((subtotal) => {
			expect(subtotal).to.have.text(expectedTotal)
			cy.log(`EL PRECIO TOTAL DEL PRODUCTO "${expectedTotal}" ES EL PRECIO ESPERADO ✅`)
		})
	})
})
