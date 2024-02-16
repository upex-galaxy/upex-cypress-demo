class selectableJJ {
	//constructor
	get = {
		BloqueList: () => cy.get('#demo-tab-list'),
		BloqueGrid: () => cy.get('#demo-tab-grid'),
		itemsList: () => cy.get('#verticalListContainer li'),
		itemsGrid: () => cy.get('.list-group-item.list-group-item-action'),
	};

	ClickBloqueList() {
		this.get.BloqueList().click;
	}

	ClickItemList() {
		this.get.itemsList().eq(1).click();
	}

	UnClickItemList() {
		this.get.itemsList().eq(3).click();
	}

	SeleccionarMultipleItemsList() {
		this.get.itemsList().eq(1).click();
		this.get.itemsList().eq(3).click();
	}

	DestidarMultipleItemsList() {
		this.get.itemsList().eq(1).click();
		this.get.itemsList().eq(3).click();
	}
	clickBloqueGrid() {
		this.get.BloqueGrid().click();
	}

	clickItemGrid() {
		this.get.itemsGrid().eq(9).click();
	}

	destidarItemGrid() {
		this.get.itemsGrid().eq(4).click();
	}

	selecMultiplesItemsGrid() {
		this.get.itemsGrid().eq(5).click();
		this.get.itemsGrid().eq(6).click();
	}
	destildarMultiplesItemsgrid() {
		this.get.itemsGrid().eq(5).click();
		this.get.itemsGrid().eq(6).click();
	}
}

export const selectableNew = new selectableJJ();