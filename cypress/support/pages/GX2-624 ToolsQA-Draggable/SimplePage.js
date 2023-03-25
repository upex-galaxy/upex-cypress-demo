class SimplePage{
    
	elements= {
		simpletag:() => cy.get('[id="draggableExample-tab-simple"]'),
		dragbox:()=> cy.get('[id="dragBox"]')
	};
        
	CheckSimpletab(){
		return this.elements.simpletag();
	}
	DragBox(){
		return this.elements.dragbox();
	}
}

export const simplepage = new SimplePage();