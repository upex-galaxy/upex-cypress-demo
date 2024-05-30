import { TIMEOUT } from "dns"

class PageDragable{
	get={
		simpleTab:()=>cy.get('[id$="tab-simple"]'),
		dragMeBtn:()=> cy.get('#dragBox'), 

		axisRestrictedTab:()=> cy.get('id$="tab-axisRestriction"]'),
		onlyXBtn:()=> cy.get('#restrictedX'),
		onlyYBtn:()=> cy.get('#restrictedY'),

		containerTab:()=> cy.get('[id$="tab-containerRestriction"]'),
		
		styleTab:()=> cy.get('[id$="tab-cursorStyle"]')

	}


	moveDragMe(X, Y){
		this.get.dragMeBtn().move({X, Y, force:true})
	}
}

export const pageDragable = new PageDragable