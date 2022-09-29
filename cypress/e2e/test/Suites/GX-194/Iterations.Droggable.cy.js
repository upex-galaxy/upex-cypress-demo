describe("US 194 ToolsQA | Interactions | Dragabble", () =>
{
    function between(min, max) {  
        return Math.floor(Math.random() * (max - min + 1) + min)
    }
    const X = between(-300,400)
    const Y = between(-300, 300)
    
    beforeEach(() =>
    {
        cy.visit("https://demoqa.com/dragabble")
        cy.url().should("contain","dragabble")
    })
    it("US 194 | TS 200 | TC1: Check “Drag and Drop” successfully in any spot.", () =>
    {
        cy.fixture("DOM/toolsqa/Iterations/Draggable.Page")
            .then((the) =>
            {
                // Precondición: Debería estar la pestaña "Simple" abierta
                cy.get(the.Simple.tab)
                    .should("have.attr", the.Tab.isSelected, "true")
                
                //Acción: Hacer Drag and Drop a cualquier punto del DOM
                cy.DragDrop(the.Simple.box, X, Y)
            })
    })
    it("US 194 | TS 200 | TC2: Check “Drag and Drop” when it can only be moved horizontally.", () =>
    {
        cy.fixture("DOM/toolsqa/Iterations/Draggable.Page")
            .then((the) =>
            {
                // Precondición: Debería estar la pestaña "Axis Restricted" abierta:
                cy.get(the.AxisRestricted.tab)
                    .click()
                    .should("have.attr", the.Tab.isSelected, "true")
                
                //Acción: Hacer Drag and Drop intentando verticalmente (no debería):
                function between(min, max) {  
                    return Math.floor(Math.random() * (max - min + 1) + min)
                }
                const X = between(-300,400)
                const Y = between(-300,300)
                cy.DragDropX(the.AxisRestricted.box[ 0 ], X, Y, {force:true})
        })
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