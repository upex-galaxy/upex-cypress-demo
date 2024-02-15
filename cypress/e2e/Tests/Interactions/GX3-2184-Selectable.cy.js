import { selectablePage } from "../../../support/pages/GX3-2184-Selectable.Page";

describe("ToolsQA | Interactions | Selectable", () =>{

const baseUrl = "https://demoqa.com/selectable";

	beforeEach(() =>{
		cy.visit(baseUrl)
		cy.url().should("include", "selectable")


	})
	it("2185 | TC1: Validar seleccionar los elementos de List", ()=>{
		selectablePage.clickList()
		selectablePage.get.buttonlist().should("have.class", "active")
		const numberOfElements = 1;
		for (let i = 0; i < numberOfElements; i++){
			selectablePage.selectAllList(i);
			selectablePage.get.listOne().should("have.class", "active");
			cy.wait(1000);
		}
	});
	it("2185 | TC2: Validar deseleccionar los elementos de List", ()=>{
	selectablePage.clickList()
		
		const numberOfElements = 2;
		for (let i = 0; i < numberOfElements; i++){
			selectablePage.selectAllList(i);
			cy.wait(1000);

		}
	});
	it("2185 | TC3: Validar seleccionar los elementos de Grid.", ()=>{
		selectablePage.clickGrid()
		selectablePage.get.buttongrid().should("have.class", "active")
		const numberOfElements = 1;
		for (let i = 0; i < numberOfElements; i++) {
      	selectablePage.selectAllGrid(i);
		selectablePage.get.gridOne().should("have.class", "active");
        cy.wait(1000);
    }		
	});		
	it("2185 | TC4: Validar deseleccionar los elementos de Grid.", ()=>{
		selectablePage.clickGrid()
		const numberOfElements = 2;
		for (let i = 0; i < numberOfElements; i++) {
      	selectablePage.selectAllGrid(i);
		cy.wait(1000);
      
    }
		
	});	
	
	

})