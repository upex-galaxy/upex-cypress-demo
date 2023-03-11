class CursorStyle{
	elements={
		cstab:()=> cy.get('[id="draggableExample-tab-cursorStyle"]'),
		middlebox:()=> cy.get('[id="cursorCenter"]'),
		topleftbox:()=> cy.get('[id="cursorTopLeft"]'),
		bottombox:()=> cy.get('[id="cursorBottom"]')
	};

	CStab(){
		return this.elements.cstab();
	}
	MiddleBox(){
		return this.elements.middlebox();
	}
	TopleftBox(){
		return this.elements.topleftbox();
	}
	BottomBox(){
		return this.elements.bottombox();
	}
}
export const cursorstyle = new CursorStyle();