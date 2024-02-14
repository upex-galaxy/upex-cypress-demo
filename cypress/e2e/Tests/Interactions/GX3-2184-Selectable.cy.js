import { selectable } from "../../../support/pages/GX3-2184-Selectable.Page";

describe("ToolsQA | Interactions | Selectable", () =>{

	beforeEach(() =>{
		cy.visit("https://demoqa.com/selectable")
		cy.url().should("contain", "selectable")


	})
	it("Validar poder hacer click en un elemento del grid", ()=>{
		selectable.clickGrid(),
		selectable.get.buttongrid().should("have.class", "active")
		selectable.selectGridthree()
		selectable.selectGridFour()
		selectable.selectGridOne()
		selectable.selectGridFive()
		selectable.selectGridSeven()
		selectable.selectGridTwo()
		selectable.selectGridNine()
		selectable.selectGridSix()
		selectable.selectGridHeight()
	})	

})