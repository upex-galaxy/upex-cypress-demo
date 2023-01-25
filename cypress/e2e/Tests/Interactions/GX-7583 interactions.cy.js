describe('✅ToolsQA | Interactions | Droppable', () => {
	beforeEach('precondicion: visitar sitio ToolsQA', () => {
		cy.session('init', () => {
			cy.visit('https://demoqa.com/droppable')
            cy.url().should('contain', 'droppable')
		})
	})

	it('For the “Simple” tab', () => {
       cy.visit('https://demoqa.com/droppable')
        cy.get('#draggable').drag('#droppable', {force: true})
		
	})

	it("For the “Accept” tab", () => {
		cy.visit('https://demoqa.com/droppable')
		cy.get('[role="tablist"] [aria-controls*="droppableExample-"]').eq(1).click()
		cy.get('[id="droppable"]').eq(1).as('Dropabble1')
		cy.get('#acceptable').drag('@Dropabble1', {force:true})
		cy.get('@Dropabble1').should("contain","Dropped!").and("have.css", "color", "rgb(33, 37, 41)")

	})

	it("For the 'Prevent Propogation' tab arriba", () => {
		cy.visit('https://demoqa.com/droppable')
	    cy.get('[role="tablist"] [aria-controls*="droppableExample-tabpane"]').eq(2).click()
		cy.get('[id="notGreedyDropBox"]').as('cajaExterna1')
		cy.get('[id="notGreedyDropBox"] [id="notGreedyInnerDropBox"]').as('cajaInterna1')//guarda en una variable, parece push
		cy.get('#dragBox').drag('@cajaExterna1', {force:true})
		cy.get('#dragBox').drag('@cajaInterna1',  {force:true})
		cy.get('@cajaExterna1').should("contain","Dropped!").and("have.css", "color", "rgb(33, 37, 41)")

	})

	it("For the 'Prevent Propogation' tab abajo", () => {
		cy.visit('https://demoqa.com/droppable')
	    cy.get('[role="tablist"] [aria-controls*="droppableExample-tabpane"]').eq(2).click() //abre pestaña
		cy.get('[id="greedyDropBox"]').as('cajaExternaa1')
		cy.get('[id="greedyDropBox"] [id="greedyDropBoxInner"]').as('cajaInternaa1')
		cy.get('#dragBox').drag('@cajaInternaa1',  {force:true})
		cy.get('@cajaInternaa1').should("contain","Dropped!").and("have.css", "color", "rgb(33, 37, 41)")
		cy.get('#greedyDropBox').as('cajaExternaa1')
		cy.get('@cajaExternaa1').should("contain","Dropped!").and("have.css", "color", "rgb(33, 37, 41)")
	})
	it("For the 'Revert Draggable' tab", () => {
		cy.visit('https://demoqa.com/droppable')
	    cy.get('[role="tablist"] [aria-controls*="droppableExample-tabpane"]').eq(3).click()
		cy.get('[id="droppableExample-tabpane-revertable"] [id="droppable"]').as('Dropables')
		cy.get('#revertable').drag('@Dropables',  {force:true})
		cy.get('@Dropables').should("contain","Dropped!").and("have.css", "color", "rgb(33, 37, 41)")
		cy.get('#notRevertable').drag('@Dropables',  {force:true})
		cy.get('@Dropables').should("contain","Dropped!").and("have.css", "color", "rgb(33, 37, 41)")
	})

})

// Comando predeterminado para que no aparezcan los Fetch en el log del Test Runner:
Cypress.on('uncaught:exception', (err, runnable) => {
	// returning false here prevents Cypress from
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

// ** COPIA Y PEGA EN CADA SUITE QUE SE REALICE CON UN SUT DE MUCHO FETCH Y XHR O PROBLEMAS DE EXCEPCIÓN