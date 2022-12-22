context('Test Drag and Drop', () => {

    beforeEach(() => {
		cy.visit("https://demoqa.com/sortable")
        cy.get('[role="tablist"] a').contains('Grid').click()
	})
	// -- Start: Cypress Tests --
	it('TC1: Probar hacer un Drag and Drop hacia abajo con un item específico', () => {
		cy.get('#demo-tabpane-grid').within((grid)=>{
            cy.contains('Five').move({ 
                deltaX: 0, deltaY: 100, 
                force: true
             })
        })
	})
	it('TC2: Validar hacer un Drag and Drop hacia abajo con un item aleatorio', () => {
		cy.get('#demo-tabpane-grid').within((grid)=>{

            const initialGrid = []
            const finalGrid = []

            cy.get('.create-grid>div').then(($grids)=>{

                // Convertir todos los elementos en un Array de Strings:
                cy.wrap($grids).each((item)=>{
                    initialGrid.push(item.text())
                    // arr.pop()
                })
                cy.log(initialGrid)

                // Seleccionar un Grid Random y Moverlo hacia abajo:
                const randomGrid = Math.floor(Math.random() * initialGrid.length - 1) +1
                cy.wrap($grids).eq(randomGrid).then((TheGrid)=>{
                    cy.log(`El grid elegido para el Drag es ${TheGrid.text()}`)
                    cy.contains(TheGrid.text()).move({ 
                        deltaX: 0, deltaY: 100, 
                        force: true
                    })
                })

                // Chequear cómo quedó la nueva Array:
                cy.wrap($grids).each((item)=>{
                    finalGrid.push(item.text())
                    // arr.pop()
                })
                cy.log(finalGrid)
                
            }).then(()=>{

                expect(finalGrid).to.not.eq(initialGrid)

            })
        })
	})
})




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
