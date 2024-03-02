class Droppable{
	get={
		
		dragMeBox: ()=> cy.get('#draggable'),
		dropHereBoxSimple: ()=> cy.get ('#droppable').eq(0),


		
		acceptTab:()=> cy.get('[id*="tab-accept"]'),
		notAcceptBox:()=> cy.get('#notAcceptable'),
		acceptableBox:()=> cy.get('#acceptable'),
		dropHereBoxAccept:() => cy.get('[id="acceptDropContainer"] [class*="drop-box"]'),

		
		prevPropTab:()=> cy.get('[id*="tab-preventPropogation"]'),
		dragMe:()=> cy.get('#dragBox'),
		textOuterDroppable:()=> cy.get('#notGreedyDropBox p').contains('Outer droppable'),
		outerNotGreedy:()=> cy.get('#notGreedyDropBox'),
		innerNotGreedy:()=> cy.get('[id="notGreedyDropBox"] [id="notGreedyInnerDropBox"]'),
		textOuterDroppableGreedy:()=> cy.get('#greedyDropBox p').contains('Outer droppable'),
		outerGreedy:()=> cy.get('#greedyDropBox'),
		innerGreedy:()=> cy.get('[id="greedyDropBox"] [id="greedyDropBoxInner"]'),

		revertDragTab:()=> cy.get('[id*="tab-revertable"]'),
		revertBox:()=> cy.get('#revertable'),
		norRevertBox: ()=> cy.get('#notRevertable'),
		dropHereBox:()=> cy.get('[id="revertableDropContainer"] [class*="drop-box"]')

	}

	clickOnAcceptTab(){
		this.get.acceptTab().click()
	}

	clickOnProptab(){
		this.get.prevPropTab().click()
	}

	clickOnDragTab(){
		this.get.revertDragTab().click()
	}

	

}

export const droppablePage = new Droppable();