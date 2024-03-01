class Droppable{
	get={
		//simple
		dragMeBox: ()=> cy.get('#draggable'),
		dropHereBoxSimple: ()=> cy.get ('#droppable').eq(0),


		//Accept
		acceptTab:()=> cy.get('[id*="tab-accept"]'),
		notAcceptBox:()=> cy.get('#notAcceptable'),
		acceptableBox:()=> cy.get('#acceptable'),
		dropHereBoxAccept:() => cy.get('[id="acceptDropContainer"] [class*="drop-box"]'),

		//Prevent Propogation
		prevPropTab:()=> cy.get('[id*="tab-preventPropogation"]'),
		dragMe:()=> cy.get('#dragBox'),
		textOuterDroppable:()=> cy.get('#notGreedyDropBox p').contains('Outer droppable'),
		outerNotGreedy:()=> cy.get('#notGreedyDropBox'),
		innerNotGreedy:()=> cy.get('[id="notGreedyDropBox"] [id="notGreedyInnerDropBox"]'),
		textOuterDroppableGreedy:()=> cy.get('#greedyDropBox p').contains('Outer droppable'),
		outerGreedy:()=> cy.get('#greedyDropBox'),
		innerGreedy:()=> cy.get('[id="greedyDropBox"] [id="greedyDropBoxInner"]')

	}

	clickOnAcceptTab(){
		this.get.acceptTab().click()
	}

	clickOnProptab(){
		this.get.prevPropTab().click()
	}

	

}

export const droppablePage = new Droppable();