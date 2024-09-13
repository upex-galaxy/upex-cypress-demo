import { droppablePage } from "../../../support/pages/GX3-4979-droppable.Page";

describe("ToolsQA | Interactions | Droppable", () => {
	beforeEach('El usuario debe visitar el endpoint mencionado debajo', ()=>{
		cy.visit("/droppable");
		cy.url().should('contain', '/droppable');
	});  

	it("4979 | TC1: Validar hacer Drag and Drop en el Tab 'Simple'", () => {
		droppablePage.dragAndDrop("#draggable + div", {
			source: {x: 110, y: 30},
			target: {position: "right"},
			force: true,
		})
		droppablePage.droppableParagraph().should('have.text', 'Dropped!');
	})
	/*	it("4979 | TC2: Validar hacer Drag and Drop en el Tab 'Accept' con el 'Acceptable' area", () => {

	})
	it("4979 | TC3: Validar hacer Drag and Drop en el Tab 'Accept' con el 'Not Acceptable' area", () => {

	})
	it("4979 | TC4: Validar hacer Drag and Drop en el Tab 'Propogation' hacia el 'First Outer Droppable'", () => {

	})
   it("4979 | TC5: Validar hacer Drag and Drop en el Tab 'Propogation' hacia el área 'not greedy'", () => {

   })
   it("4979 | TC6: Validar hacer Drag and Drop en el Tab 'Propogation' hacia el área 'greedy'", () => {

   })
    it("4979 | TC7: Validar hacer Drag and Drop en el Tab 'Revert' con el 'Will Revert' area hacia el 'Drop Here'", () => {

   })
   it("4979 | TC8: Validar hacer Drag and Drop permanente en el Tab 'Revert' con el 'Not Revert' area hacia el 'Drop Here'", () => {

   })
   it("4979 | TC9: Validar NO hacer Drag and Drop en el Tab 'Simple' al mover el 'Drag Me' area fuera del 'Drop here'", () => {
	
	})*/
})
