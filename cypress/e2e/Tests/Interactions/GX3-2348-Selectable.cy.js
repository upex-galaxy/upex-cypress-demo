import {selectablePage} from '../../../support/pages/GX3-2348-Selectable.Page'

describe('ToolsQA | Interactions | Selectable',()=>{
	beforeEach('',()=>{
		cy.visit('https://demoqa.com/selectable')
		cy.url().should("include", "selectable")
	})

	it('23551 | TC01 validate desselect all element by List',()=>{
		selectablePage.clickListBtn()
		selectablePage.get.listLi().should("not.have.class", "active")
	})

	it('23551 | TC02 validate Select all element by List',()=>{
		selectablePage.clickListLi()
		selectablePage.get.listBtn().should("have.class", "active")
		selectablePage.get.listLi().should("have.class", "active")
	})

	it('23551 | TC03 validate desselect all element by GRID',()=>{
		selectablePage.clickGridBtn()
		selectablePage.get.gridLi().should("not.have.class", "active")
	})
	
	it('23551 | TC04 validate Select all element by GRID',()=>{
		selectablePage.clickGridBtn()
		selectablePage.get.gridBtn().should('have.class','active')
		selectablePage.clickGridLi()
		selectablePage.get.gridLi().should('have.class','active')
	})
})