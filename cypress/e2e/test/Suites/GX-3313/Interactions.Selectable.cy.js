describe('ToolsQA | Interactions | Selectable', () => {
	beforeEach('Debe estar situado en selectable', () => {
		cy.visit('https://demoqa.com/selectable')
		cy.url().should('include', 'selectable')
	})

	it('3314 | TC1: Validate that the Selectable list is displaying and working as expected', () => {
		//valida acciones al abrir pagina
		cy.get('#demo-tab-list')
		.should('have.text', 'List')
		.and('have.attr', 'aria-selected', 'true')
		.and('have.class', 'active')

		cy.get('#demo-tab-grid')
		.should('have.text', 'Grid')
		.and('have.attr', 'aria-selected', 'false')
		.and('not.have.class', 'active')

		//valida el length de la lista
		cy.get('[id="verticalListContainer"] [class*="group-item-action"]')
		.should('be.visible')
		.and('have.length', '4')
		
		//valida que cada list-item contenga su correspondiente texto
		const arr = ['Cras justo odio', 'Dapibus ac facilisis in', 'Morbi leo risus', 'Porta ac consectetur ac']
		cy.validateText('[id="verticalListContainer"] [class*="group-item-action"]', arr)

		//valida que cuando se selecciona un elemento de la list, cambie a blue background y cuando se unselect no tenga blue background
		cy.clickElementRandom('[id="verticalListContainer"] [class*="group-item-action"]')
	})

	it('3314 | TC2: Validate that the Selectable grid is displaying and working as expected', () => {
		//valida acciones al clickear la seccion Grid
		cy.get('#demo-tab-grid').click()
		cy.get('#demo-tab-grid')
		.should('have.text', 'Grid')
		.and('have.attr', 'aria-selected', 'true')
		.and('have.class', 'active')

		cy.get('#demo-tab-list')
		.should('have.text', 'List')
		.and('have.attr', 'aria-selected', 'false')
		.and('not.have.class', 'active')

		//valida que la grid sea 3X3
		cy.get('#gridContainer').children().should('have.length', '3')
		cy.get('#gridContainer').children().each(($el) => {
			expect($el.children('li')).to.have.lengthOf(3)
		})

		//valida que cada grid contenga su correspondiente texto
		const arr = ['One', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight', 'Nine']
		cy.validateText('[id="gridContainer"] [class*="group-item-action"]', arr)

		//valida que no haya ningun elemento seleccionado
		cy.get('[id="gridContainer"] [class*="group-item-action"]')
		.should('not.have.class', 'active')
		
		//valida que cuando se selecciona un elemento de la grid, cambie a blue background y cuando se unselect no tenga blue background
		cy.clickElementRandom('[id="gridContainer"] [class*="group-item-action"]')
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
	if (opts.displayName === 'xhr' || (opts.displayName === 'fetch' && opts.url.startsWith('https://'))) {
		return
	}
	return origLog(opts, ...other)
}
