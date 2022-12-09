const { Given } = require("@badeball/cypress-cucumber-preprocessor");

describe('GX-4589 | ToolsQA | Interactions | Droppable',()=>{

    beforeEach('User must be in Droppable page',()=>{
        cy.visit('/droppable');
        cy.url().should('contain','droppable');
    });
    
    it('4590 | TC1: Validate “simple” tab behavior',()=>{

        cy.get('#draggable').drag('#droppable',{force:true})
        cy.get('#droppable').should("have.text","Dropped!")

    })

    it.only('4590 | TC2: Validate “Accept” tab behavior when “Acceptable” item is dropped in the “Drop here” area.',()=>{
        
        cy.get('#droppableExample-tab-accept').click()
        cy.get('#acceptable').drag(`{[id="droppable"].eq(1)}`,{force:true})
        cy.get('#droppable').should("have.text","Dropped!")
    })

    it('4590 | TC3: Validate “Accept” tab behavior when “Not Acceptable” item is dropped in the “Drop here” area.',()=>{
        
        cy.get('#notAcceptable').drag('#droppable',{force:true})
        cy.get('#droppable').should("have.text","Drop here")
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
	return origLog(opts, ...other)}