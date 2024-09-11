import { droppablePage } from "@pages/GX3-4979-droppable.Page"

describe("ToolsQA | Interactions | Droppable", () => {
	beforeEach('El usuario debe visitar el endpoint mencionado debajo', ()=>{
		cy.visit("/droppable")
		cy.url().should('contain', '/droppable')
	});  

	it("4979 | TC1: Validar hacer Drag and Drop en el Tab 'Simple'", () => {
		droppablePage.dragAndDrop("#draggable + div", {
			source: {x: 110, y: 30},
			target: {position: "right"},
			force: true,
		})
		droppablePage.droppableParagraph().should('have.text', 'Dropped!');
	
	/**Fórmula aquí Debajo**/
	/*	cy.get("#draggable").drag("#draggable", {
			source: {x: -280, y: -50},
			target: {position: "right"},
			force: true,
		})
	*/
	})
})
