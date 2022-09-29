/// <reference types = "Cypress"/>

/*Como QA aprendiz,

Quiero testear la cantidad de elementos visibles en la sección POPULAR y BEST SELLERS

Para practicar hacer este tipo de Escenario de Testing

1- US 524 | TS 586 | TC1: Validar que al hacer click en la sección ‘POPULAR’ deberán cargarse en pantalla 7 artículos (prendas del store)

2- US 524 | TS 586 | TC2: Validar que al hacer click en la sección ‘BEST SELLER’ deberán cargarse en pantalla 7 artículos (prendas del store)

*/

describe("MyStore: Home-ListaProductosVisibles", () => {

    beforeEach(() =>{
        //ingresar a la página
        cy.visit("http://automationpractice.com/index.php")

    })

    //caso 1
    it('TC1: Validar cantidad de elementos de la sección "POPULAR"', () => {
        cy.get("a.homefeatured").click()
       
        cy.get('#homefeatured .product-container').should('have.length', 7)
      
    })

      //caso 2
      it('TC2: Validar cantidad de elementos de la sección "BEST SELLERS"' , () => {
        cy.get("a.blockbestsellers").click()
        
        cy.get('#blockbestsellers .product-container').should('have.length', 7)
      
    })


})


//________________________________________________________________________
// Comando predeterminado para que no ocurran errores de excepciones:
Cypress.on('uncaught:exception', (err, runnable) => {
	// returning false here prevents Cypress from
	// failing the test
	return false
})
// Comando predeterminado para que no aparezcan los Fetch en el log del Test Runner:
const origLog = Cypress.log
Cypress.log = function (opts, ...other) {
	if (opts.displayName === 'xhr'|| opts.displayName === 'fetch' && opts.url.startsWith('https://')) {
		return
	}
	return origLog(opts, ...other)
}