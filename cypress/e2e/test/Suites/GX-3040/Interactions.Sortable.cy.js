import {SortablePage} from "../../../../support/Pages/GX-3040/SortablePage"

describe('ToolsQA | Interactions | Sortable', () => {
	const sortablepage = new SortablePage();
	
	beforeEach('Precondition: Go to the page', () => {
		cy.visit('https://demoqa.com/sortable')
		cy.url().should('contain', 'sortable')
	})
	
	xit('3040|TC1:Validar que se visualice correctamente las pestañas “Lista” y “Grid”',()=> {
        //visualizar las pestañas losa y grid
		sortablepage.validarContenidoLista().contains("List")
		sortablepage.validarContenidoGrid().contains("Grid")
		
		//verificar que la pestaña Lista esta por defecto 
		sortablepage.validarContenidoLista().should('have.class', 'active')
		sortablepage.validarContenidoGrid().should('not.have.class', 'active')
		
		//Validar que la aplicación muestre una pestaña a la vez.
        sortablepage.validarContenidoGrid().click().should('be.visible');
		sortablepage.validarContenidoGrid().should('have.class', 'active')
		sortablepage.validarContenidoLista().should('not.have.class', 'active')
       
		sortablepage.validarContenidoLista().click().should('be.visible');
		sortablepage.validarContenidoLista().should('have.class', 'active')
		sortablepage.validarContenidoGrid().should('not.have.class', 'active')
	}) 

    xit('3040|TC2:Validar el comportamiento al arrastar un elemento en la lista de items', ()=> {
	//	const dataTransfer = new DataTransfer();
		sortablepage.validarItemsLista1();
		sortablepage.validarItemsLista2();
		sortablepage.validarItemsLista3();
		sortablepage.validarItemsLista4();
		sortablepage.validarItemsLista5();
		sortablepage.validarItemsLista6();	
  //validar la cantidad de elementos 
	sortablepage.validarItems().should('have.length',6)
	//Validar la pestaña “lista “ cuando se arraste un elemento entre otros elementos de la lista debe permanecer en el orden seleccionado y debe permitir colocar el elemento en cualquier orden
	 sortablepage.moverItems();
})
    it('3040|TC3:Validar el comportamiento al arrastar un elemento en el grid de items',()=> { 
	//GX-3040|TC6:Validar la pestaña “grid“ muestre por default  los items del 1 al 9 ordenado de arriba hacia abajo.

		sortablepage.validarContenidoGrid().click().should('be.visible');	
		//sortablepage.validarListGrid().should('have.length',9)
		sortablepage.moverGrid();
    
	//Validar la pestaña “grid“ muestre por defaul una cuadricula del 1 al 9 ordenado de izquierda a derecha.
	
	})      
      

  // Comando predeterminado para que no ocurran errores de excepciones proporcionado por Upex-Galaxy:

  Cypress.on('uncaught:exception', (err, runnable) => {
	// returning false here prevents Cypress from
	// failing the test
	return false
})
// Comando predeterminado para que no aparezcan los Fetch en el log del Test Runner:
const origLog = Cypress.log
Cypress.log = function (opts, ...other) {
	if (opts.displayName === 'xhr' || opts.displayName === 'fetch' && opts.url.startsWith('https://')) {
		return
	}
	return origLog(opts, ...other)
}

})



