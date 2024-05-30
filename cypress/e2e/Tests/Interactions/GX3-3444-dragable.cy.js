import { pageDragable } from "../../../support/pages/GX3-3444-Dragable.page"

describe('',()=>{
	beforeEach('',()=>{
		cy.visit('https://demoqa.com/dragabble')
		cy.url().should('contain','dragabble')
	})

	it('',()=>{
		const deltaX = Cypress._.random(0, 200)
		console.log(deltaX)
		const deltaY = Cypress._.random(-20, 100)
		console.log(deltaY)
		pageDragable.moveDragMe(deltaX, deltaY)
		cy.wait(6000)
		pageDragable.get.dragMeBtn().should('have.css', 'left' , `${deltaX}px`)
		pageDragable.get.dragMeBtn().should('have.css', 'top' , `${deltaY}px`)
		// pageDragable.get.dragMeBtn().should($el => {
        // 	const left = parseInt($el.css('left'));
        // 	const top = parseInt($el.css('top'));
        // 	expect(left).to.be.closeTo(deltaX, 1); 
        // 	expect(top).to.be.closeTo(deltaY, 1);  
		// })
	})

})