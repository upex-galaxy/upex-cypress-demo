

class PageDragable{
	get={
		simpleTab:()=>cy.get('[id$="tab-simple"]'),
		dragMeBtn:()=> cy.get('#dragBox'), 

		axisTab:()=> cy.get('[id$="tab-axisRestriction"]'),
		onlyXBtn:()=> cy.get('#restrictedX'),
		onlyYBtn:()=> cy.get('#restrictedY'),

		containerTab:()=> cy.get('[id$="tab-containerRestriction"]'),
		withinBox:()=> cy.get('[class^="draggable"]').eq(0),
		withinParent:()=> cy.get('[class^="draggable"]').eq(1),
		
		styleTab:()=> cy.get('[id$="tab-cursorStyle"]')

	}


	moveDragMe(X, Y){
		this.get.dragMeBtn().move({deltaX:X, deltaY:Y})
	}

	clickAxisTab(){
		this.get.axisTab().click()
	}

	moveOnlyX(X,Y){
		this.get.onlyXBtn().move({deltaX:X, deltaY:Y})
	}

	moveOnlyY(X,Y){
		this.get.onlyYBtn().move({deltaX:X,deltaY:Y})
	}

	clickOncontainerTab(){
		this.get.containerTab().click()
	}

	moveWBox(X,Y){
		this.get.withinBox().move({deltaX:X ,deltaY:Y ,force: true})
	}

	
	moveParent(X,Y){
		this.get.withinParent().move({deltaX:X ,deltaY:Y ,force: true})
	}
}

export const pageDragable = new PageDragable