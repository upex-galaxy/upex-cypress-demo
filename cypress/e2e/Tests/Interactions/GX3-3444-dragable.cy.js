import { pageDragable } from "../../../support/pages/GX3-3444-Dragable.page"

describe('GX3-3444 | ToolsQA | Interactions | Dragabble (Drag and Drop)',()=>{
	beforeEach('',()=>{
		cy.visit('https://demoqa.com/dragabble')
		cy.url().should('contain','dragabble')
	})

	it('GX3443 | TC01 Validate move dragme box',()=>{
		const deltaX = Cypress._.random(0, 200)
		const deltaY = Cypress._.random(-20, 100)
		pageDragable.moveDragMe(deltaX, deltaY)
		pageDragable.get.dragMeBtn().should('have.css', 'left' , `${deltaX}px`)
		pageDragable.get.dragMeBtn().should('have.css', 'top' , `${deltaY}px`)
	})

	it('GX3443 | TC02 validate move Axis Restricted only x',()=>{
		const deltaX = Cypress._.random(-30 ,150)
		const deltaY= 0
		pageDragable.clickAxisTab();
		pageDragable.moveOnlyX(deltaX,deltaY)
		pageDragable.get.onlyXBtn().should('have.css','left', `${deltaX}px`)
		
	})

	it('GX3443 | TC03 Validate move Axis Restricted only y',()=>{
		const deltaY = Cypress._.random(-30 ,150)
		const deltaX=0
		pageDragable.clickAxisTab();
		pageDragable.moveOnlyY(deltaX, deltaY)
		pageDragable.get.onlyYBtn().should('have.css','top', `${deltaY}px`)
	})

	it('GX3443 | TC04 Validate move Container Restricted move within box',()=>{
		const deltaX=Cypress._.random(0,403)
		const deltaY=Cypress._.random(0,105)
		pageDragable.clickOncontainerTab()
		pageDragable.moveWBox(deltaX, deltaY)
		pageDragable.get.withinBox().then(($el)=>{
			const newLeft=$el.css('left').replace(/'/g, '')
			const newTop=$el.css('top').replace(/'/g, '')
			expect(newLeft).to.equal(`${deltaX}px`)
			expect(newTop).to.equal(`${deltaY}px`)
		})
	})

	it('GX3443 | TC05 Validate move contained within my parent',()=>{
		const deltaX = Cypress._.random(0,13)
		const deltaY= Cypress._.random(-1,85)
		pageDragable.clickOncontainerTab()
		pageDragable.moveParent(deltaX, deltaY)
		pageDragable.get.withinParent().should('have.css','left', `${deltaX}px`)
		pageDragable.get.withinParent().should('have.css','top', `${deltaY}px`)	
	})
})