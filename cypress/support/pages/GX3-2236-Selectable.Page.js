class selectableJj {
	//constructor
	get = {
		bloqueList: () => cy.get('#demo-tab-list'),
		bloqueGrid: () => cy.get('#demo-tab-grid'),
		itemsList: () => cy.get('#verticalListContainer li'),
		itemsGrid: () => cy.get('.list-group-item.list-group-item-action'),
	};

	seleccionarLista() {
		this.get.bloqueList().click();
	};

	seleccionarUnoLista() {
		this.get.itemsList().eq(1).click();
	};

	destildarUnoLista() {
		this.get.itemsList().eq(3).click();
	};

	seleccionarMultipleLista() {
		this.get.itemsList().eq(1).click();
		this.get.itemsList().eq(3).click();
	}

	destildarMultipleLista() {
		this.get.itemsList().eq(1).click();
		this.get.itemsList().eq(3).click();
	};

	seleccionarGrid() {
		this.get.bloqueGrid().click();
	};

	seleccionarUnoGrid() {
		this.get.itemsGrid().eq(9).click();
	};

	destidarUnoGrid() {
		this.get.itemsGrid().eq(4).click();
	};

	seleccionarMultiplesGrid() {
		this.get.itemsGrid().eq(5).click();
		this.get.itemsGrid().eq(6).click();
	};
	destildarMultiplesGrid() {
		this.get.itemsGrid().eq(5).click();
		this.get.itemsGrid().eq(6).click();
	};
}

export const selectableNew = new selectableJj();