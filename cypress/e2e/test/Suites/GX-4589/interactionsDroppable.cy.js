const { Given } = require("@badeball/cypress-cucumber-preprocessor");

describe('GX-4589 | ToolsQA | Interactions | Droppable',()=>{

    beforeEach('User must be in Droppable page',()=>{
        cy.viewport(1440,900)
        cy.visit('/droppable');
        cy.url().should('contain','droppable');
    });
    
    it('4590 | TC1: Validate “simple” tab behavior',()=>{

        cy.get('#draggable').drag('#droppable',{force:true})
        cy.get('#droppable').should("have.text","Dropped!")
    })

    it('4590 | TC2: Validate “Accept” tab behavior when “Acceptable” item is dropped in the “Drop here” area.',()=>{
        
        cy.get("[id=droppable]").eq(1).as("droppable")
        cy.get("[class*=nav-item]").eq(1).click().should("have.focus")
        cy.get('#acceptable').drag("@droppable",{force:true})
        cy.get("@droppable").should("have.text","Dropped!")
    })

    it('4590 | TC3: Validate “Accept” tab behavior when “Not Acceptable” item is dropped in the “Drop here” area.',()=>{

        cy.get("[id=droppable]").eq(1).as("droppable")
        cy.get('#notAcceptable').drag('#droppable',{force:true})
        cy.get('#droppable').should("have.text","Drop here")
    })

    it('4590 | TC4: Validate “Prevent Propogation” tab behavior when “Drag me” item is dropped in the “Outer Droppable (Not Greddy)”.',()=>{
        
        cy.get("[class*=nav-item]").eq(2).click().should("have.focus")
        cy.get("#notGreedyDropBox").as("dropBox1")
        cy.get("#dragBox").drag("@dropBox1",{
            target:{position:'topRight'},
            force:true})
        cy.get("@dropBox1").should("have.text","Dropped!Inner droppable (not greedy)")
    })
    
    it('4590 | TC5: Validate “Prevent Propogation” tab behavior when “Drag me” item is dropped in the “Inner Droppable (Not Greddy)”.',()=>{

        cy.get("[class*=nav-item]").eq(2).click().should("have.focus")
        cy.get("#notGreedyInnerDropBox").as("innerBox1")
        cy.get("#dragBox").drag("@innerBox1", {force:true})
        cy.get("@innerBox1").should("have.text","Dropped!")
        cy.get("#notGreedyDropBox").as("dropBox1")
        cy.get("@dropBox1").should("have.text","Dropped!Dropped!")
    })

    it('4590 | TC6: Validate “Prevent Propogation” tab behavior when “Drag me” item is dropped in the “Outer Droppable (Greddy)”.',()=>{

        cy.get("[class*=nav-item]").eq(2).click().should("have.focus")
        cy.get("#greedyDropBox").as("dropBox2")
        cy.get("#dragBox").drag("@dropBox2",{
            target:{position:'topRight'},
            force:true})
        cy.get("@dropBox2").should("have.text","Dropped!Inner droppable (greedy)")
    })

    it('4590 | TC7: Validate “Prevent Propogation” tab behavior when “Drag me” item is dropped in the “Inner Droppable (Greddy)”.',()=>{

        cy.get("[class*=nav-item]").eq(2).click().should("have.focus")
        cy.get("#greedyDropBoxInner").as("innerBox2")
        cy.get("#greedyDropBox").as("dropBox2")
        cy.get("#dragBox").drag("@innerBox2",{force:true})
        cy.get("@innerBox2").should("have.text","Dropped!")
        cy.get("@dropBox2").should("have.text","Outer droppableDropped!")
    })

    it('4590 | TC8: Validate “Revert Draggable” tab behavior when “Will revert” item is dropped in the “Drop here” area.',()=>{

        cy.get("[class*=nav-item]").eq(3).click().should("have.focus")
        cy.get("[id=droppable]").eq(2).as("droppable")
        cy.get("#revertable").drag("@droppable",{force:true})
        cy.get("@droppable").should("have.text","Dropped!")
        cy.get("#revertable").trigger('position', 0, 0)
    })

    it('4590 | TC9: Validate “Revert Draggable” tab behavior when “Not revert” item is dropped in the “Drop here” area.',()=>{

        cy.get("[class*=nav-item]").eq(3).click().should("have.focus")
        cy.get("[id=droppable]").eq(2).as("droppable")
        cy.get("#notRevertable").drag("@droppable",{force:true})
        cy.get("@droppable").should("have.text","Dropped!")
        cy.get("#notRevertable").trigger('position', 170, -10, {force:true})
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