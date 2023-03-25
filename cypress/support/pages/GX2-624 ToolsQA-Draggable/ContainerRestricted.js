class ContainerRestricted{
	elements={
		CRtab:()=> cy.get('[id="draggableExample-tab-containerRestriction"]'),
		withinBox:()=> cy.get('[class="draggable ui-widget-content ui-draggable ui-draggable-handle"]'),
		withinParent:()=> cy.get('[class="draggable ui-widget-content m-3"]')
	};

	CRtab(){
		return this.elements.CRtab();
	}
	BoxWithin(){
		return this.elements.withinBox();
	}
	ParentWithin(){
		return this.elements.withinParent();
	}
}
export const containerrestricted = new ContainerRestricted();