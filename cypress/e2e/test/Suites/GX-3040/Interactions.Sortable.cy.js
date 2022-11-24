import {SelectablePage} from "../../../../support/Pages/GX-3040/SelectablePage"

describe('ToolsQA | Interactions | Sortable', () => {
	const selectablepage = new SelectablePage();
	
	beforeEach('Precondition: Go to the page', () => {
		cy.visit('https://demoqa.com/sortable')
		cy.url().should('contain', 'sortable')
	})
	
	xit('3040|TC1:Validar que se visualice correctamente las pestañas “Lista” y “Grid”',()=> {
        //visualizar las pestañas losa y grid
		selectablepage.validarContenidoLista().contains("List")
		selectablepage.validarContenidoGrid().contains("Grid")
		
		//verificar que la pestaña Lista esta por defecto 
		selectablepage.validarContenidoLista().should('have.class', 'active')
		selectablepage.validarContenidoGrid().should('not.have.class', 'active')
		
		//Validar que la aplicación muestre una pestaña a la vez.
        selectablepage.validarContenidoGrid().click().should('be.visible');
		selectablepage.validarContenidoGrid().should('have.class', 'active')
		selectablepage.validarContenidoLista().should('not.have.class', 'active')
       
		selectablepage.validarContenidoLista().click().should('be.visible');
		selectablepage.validarContenidoLista().should('have.class', 'active')
		selectablepage.validarContenidoGrid().should('not.have.class', 'active')
	}) 

    it('3040|TC2:Validar el comportamiento al arrastar un elemento en la lista de items', ()=> {
	//	const dataTransfer = new DataTransfer();

		//validar la cantidad de elementos 
	cy.get(".vertical-list-container>.list-group-item").should('have.length',6)
	//Validar la pestaña “lista“ muestre por default  los items del 1 al 9.	selectablepage.
	selectablepage.validarItemsLista().contains("One")
	selectablepage.validarItemsLista().contains("Two")
	selectablepage.validarItemsLista().contains("Three")
	selectablepage.validarItemsLista().contains("Four")
	selectablepage.validarItemsLista().contains("Five")
	selectablepage.validarItemsLista().contains("Six")
	//Validar la pestaña “lista “ cuando se arraste un elemento entre otros elementos de la lista debe permanecer en el orden seleccionado y debe permitir colocar el elemento en cualquier orden
		
	cy.get('.vertical-list-container>.list-group-item').first()
	   .trigger('mousedown',  { button: 0 }, { force: true })
	cy.get(".vertical-list-container>.list-group-item").first().next().click()
	   .trigger("mouseup", { force: true });

		cy.get('.vertical-list-container>.list-group-item').contains("Three")
		.trigger('mousedown',  { button: 0 }, { force: true })
		cy.get(".vertical-list-container>.list-group-item").contains("Three").next().click()
		.trigger("mouseup", { force: true });  

	//	Validar el orden
	selectablepage.validarItemsLista().contains("Two")
	selectablepage.validarItemsLista().contains("One")
	selectablepage.validarItemsLista().contains("Four")
	selectablepage.validarItemsLista().contains("Three")
	selectablepage.validarItemsLista().contains("Six")
	selectablepage.validarItemsLista().contains("Five")
	})
})
  

    xit('3040|TC3:Validar el comportamiento al arrastar un elemento en el grid de items',()=> {
   
	//GX-3040|TC6:Validar la pestaña “grid“ muestre por default  los items del 1 al 9 ordenado de arriba hacia abajo.

	//Validar la pestaña “grid“ muestre por defaul una cuadricula del 1 al 9 ordenado de izquierda a derecha.
	
	})      
      

//})



//________________________________________________________________________
// Comando predeterminado para que no ocurran errores de excepciones:
Cypress.on('uncaught:exception', (err, runnable) => {
	//returning false here prevents Cypress from
	// failing the test
	return false
})
// Comando predeterminado para que no aparezcan los Fetch en el log del Test Runner:
const origLog = Cypress.log
Cypress.log = function (opts, ...other) {
	if (opts.displayName === 'xhr' || (opts.displayName === 'fetch' && opts.url.startsWith('https://'))) {
		return
	}
	return origLog(opts, ...other)
}
