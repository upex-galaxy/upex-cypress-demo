import { droppablePage } from "@pages/GX3-4979-droppable.Page";

describe("ToolsQA | Interactions | Droppable", () => {
	beforeEach('El usuario debe visitar el endpoint mencionado debajo', () => {
		cy.visit("https://demoqa.com/droppable");
		cy.url().should('contain', '/droppable');
		cy.get("#droppableContainer > h1").should('be.visible')
	});  

	it("4979 | TC1: Validar hacer Drag and Drop en el Tab 'Simple'", () => {
		droppablePage.dragAndDrop("#draggable + div", {
			source: {x: 110, y: 30},
			target: {position: "right"},
			force: true,
		}).then((success) => {
			expect(success).to.be.true
		})
		droppablePage.droppableParagraph().should('have.text', 'Dropped!');
	})

	it("4979 | TC2: Validar hacer Drag and Drop en el Tab 'Accept' con el 'Acceptable' area", () => {
	 	droppablePage.tabAcceptElement().click();
		droppablePage.dragAndDropAccept("#acceptDropContainer > div:nth-child(2)", {
			source: {x: 100, y: 30},
			target: {position: "right"},
			force: true,
		}).then((success) => {
			expect(success).to.be.true
		})
		droppablePage.droppableElementTwo().contains("p", 'Dropped!').should('be.visible')	
	})


	it("4979 | TC3: Validar hacer Drag and Drop en el Tab 'Accept' con el 'Not Acceptable' area", () => {
		droppablePage.tabAcceptElement().click();
		droppablePage.dragAndDropNotAccept("#acceptDropContainer > div:nth-child(2)", {
			source: {x: 100, y: 30},
			target: {position: "right"},
			force: true,
		}).then((success) => {
		expect(success).to.be.true
		})
		droppablePage.droppableElementTwo().contains("p", 'Drop here').should('be.visible')
	})

	it("4979 | TC4: Validar hacer Drag and Drop en el Tab 'Propogation' hacia el 'First Outer Droppable'", () => {
        droppablePage.tabPropagation().click();
		droppablePage.dragAndDropPropagation("#notGreedyDropBox", {
			source: {x: 100, y: 110},
			target: {position: "right"},
			force: true,
		}).then((success) => {
			expect(success).to.be.true
		})
		droppablePage.droppableElementThree().contains("p", 'Dropped!').should('be.visible')
	})

   it("4979 | TC5: Validar hacer Drag and Drop en el Tab 'Propogation' hacia el área 'not greedy'", () => {
		droppablePage.tabPropagation().click();
		droppablePage.dragAndDropPropagation("#notGreedyInnerDropBox", {
			source: {x: 100, y: 20},
			target: {position: "right"},
			force: true,
		}).then((success) => {
			expect(success).to.be.true
		})
		droppablePage.InnerDropNotGreedyElement().contains("p", 'Dropped!').should('be.visible')
		droppablePage.droppableElementThree().contains("p", 'Dropped!').should('be.visible')
   })

   it("4979 | TC6: Validar hacer Drag and Drop en el Tab 'Propogation' hacia el área 'greedy'", () => {
		droppablePage.tabPropagation().click();
		droppablePage.dragAndDropPropagation("#greedyDropBoxInner", {
			source: {x: 100, y: 50},
			target: {position: "right"},
			force: true,
		}).then((success) => {
			expect(success).to.be.true
		})
		droppablePage.InnerDropGreedyElement().contains("p", 'Dropped!').should('be.visible')
		droppablePage.droppableGreedyParagraph().should('have.text', 'Outer droppable');
   })

    it("4979 | TC7: Validar hacer Drag and Drop en el Tab 'Revert' con el 'Will Revert' area hacia el 'Drop Here'", () => {
		droppablePage.tabRevert().click();
		droppablePage.dragAndDropRevertable("#revertableDropContainer > div:nth-child(2)", {
			source: {x: 100, y: 50},
			target: {position: "right"},
			force: true,
		}).then((success) => {
			expect(success).to.be.true
		})
		droppablePage.droppableElementFour().contains("p", 'Dropped!').should('be.visible')
   })


   it("4979 | TC8: Validar hacer Drag and Drop permanente en el Tab 'Revert' con el 'Not Revert' area hacia el 'Drop Here'", () => {
	droppablePage.tabRevert().click();
	droppablePage.dragAndDropNotRevertable("#revertableDropContainer > div:nth-child(2)", {
			source: {x: 100, y: 50},
			target: {position: "right"},
			force: true,
		}).then((success) => {
			expect(success).to.be.true
		})
		droppablePage.droppableElementFour().contains("p", 'Dropped!').should('be.visible')
   })

   it("4979 | TC9: Validar NO hacer Drag and Drop en el Tab 'Simple' al mover el 'Drag Me' area fuera del 'Drop here'", () => {
	 droppablePage.notDragAndDrop("#draggable + div", {
			source: {x: 250, y: 30},
			target: {position: "right"},
			force: true,
	 }).then((success) => {
		expect(success).to.be.false
	 })
	 	droppablePage.droppableParagraph().should('have.text', 'Drop here');
   })
})