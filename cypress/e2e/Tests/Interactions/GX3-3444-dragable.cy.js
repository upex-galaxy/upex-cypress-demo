import { pageDragable } from "../../../support/pages/GX3-3444-Dragable.page"

describe('',()=>{
	beforeEach('',()=>{
		cy.visit('https://demoqa.com/dragabble')
		cy.url().should('contain','dragabble')
	})

	it('',()=>{
		const deltaX = Cypress._.random(0, 200)
		const deltaY = Cypress._.random(-20, 100)
		pageDragable.moveDragMe(deltaX, deltaY)
		
		pageDragable.get.dragMeBtn().should('have.css', 'left' , `${deltaX}px`)
		pageDragable.get.dragMeBtn().should('have.css', 'top' , `${deltaY}px`)
	})

	it('Axis Restricted only x',()=>{
		const deltaX = Cypress._.random(-30 ,150)
		const deltaY= 0
		pageDragable.clickAxisTab();
		pageDragable.moveOnlyX(deltaX,deltaY)
		pageDragable.get.onlyXBtn().should('have.css','left', `${deltaX}px`)
		
	})

	it('Axis Restricted only y',()=>{
		const deltaY = Cypress._.random(-30 ,150)
		const deltaX=0
		pageDragable.clickAxisTab();
		pageDragable.moveOnlyY(deltaX, deltaY)
		pageDragable.get.onlyYBtn().should('have.css','top', `${deltaY}px`)
	})

	it('Container Restricted move within box',()=>{
		const deltaX=Cypress._.random(0,403)
		const deltaY=Cypress._.random(0,105)
		pageDragable.clickOncontainerTab()
		pageDragable.moveWBox(deltaX, deltaY)
		//tengo que tomar el valor de x pero sin las comillas solo el numero, guardarlo y compararlo con deltax
		pageDragable.get.withinBox().then(($el)=>{
			const newLeft=$el.css('left').replace(/'/g, '')
			const newTop=$el.css('top').replace(/'/g, '')
			expect(newLeft).to.equal(`${deltaX}px`)
			expect(newTop).to.equal(`${deltaY}px`)
		})
	})

	it.only('',()=>{
		const deltaX = Cypress._.random(0,13)
		const deltaY= Cypress._.random(-1,85)
		pageDragable.clickOncontainerTab()
		pageDragable.moveParent()
		pageDragable.get.withinParent().should('have.css','left', `${deltaX}px`)
		pageDragable.get.withinParent().should('have.css','top', `${deltaY}px`)
		
	})
})