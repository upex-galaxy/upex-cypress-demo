describe('Login Feature', () => {
	const us = 'US 2'
	const ts = 'TS 123'
    it(`${us} | ${ts} | TC1: Validar iniciar sesión con parámetros correctos`, () => {
        //Precondición: Usuario debe tener acceso y estar en la pag de Login
        cy.visit('https://www.saucedemo.com/')

        //Ingresar nombre y contraseña de usuario correctamente
        cy.get('#user-name').type('standard_user').should('have.value', 'standard_user')
        cy.get('#password').type('secret_sauce').should('have.value', 'secret_sauce')

        //Hacer click en el botón LOGIN
        cy.contains('Login').click()

        //Debería cargar la página de PLP como usuario ingresado
        cy.url().should('include', 'inventory')
        cy.get('.inventory_list').should('be.visible')
    })
})
