import { droppablePage } from "@pages/GX3-4979-droppable.Page"
const {endpoint} = Cypress.env("endpoints")

describe("ToolsQA | Interactions | Droppable", () => {
	beforeEach('El usuario debe visitar el endpoint mencionado debajo', ()=>{
		cy.visit(endpoint);
		cy.url().should('contain', '/droppable');
		cy.wait(2000);
	});  

	it("4979 | TC1: Validar hacer Drag and Drop en el Tab 'Simple'", () => {
		droppablePage.dragAndDrop("#draggable + div", {
			source: {x: 110, y: 30},
			target: {position: "right"},
			force: true,
		})
		droppablePage.droppableParagraph().should('have.text', 'Dropped!');
	})
})
