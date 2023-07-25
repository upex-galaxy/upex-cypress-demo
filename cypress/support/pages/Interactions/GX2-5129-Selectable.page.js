class Selectable{
	get={
		bttnList: () => cy.get('demo-tab-list'),
		bttnGrid: () => cy.get('demo-tab-grid'),
		listContainer:()=>('verticalListContainer li'),

	};
	clickBttnGrid() {
		this.get.bttnGrid().click();
	}
	clickBttnList() {
		this.get.bttnList().click();
	}
}
export const selectable = new Selectable();