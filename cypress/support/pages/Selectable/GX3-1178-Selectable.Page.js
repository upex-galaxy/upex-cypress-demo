class Selectores {
	get = {
		TabList: () => cy.get('#demo-tab-list'),
		TabGrid: () => cy.get('#demo-tab-grid'),
		ListIcon: () => cy.get('#verticalListContainer li'),
		GridIcon: () => cy.get('#gridContainer li'),
	};
	OneClickList() {
		this.get.ListIcon().eq(0).click();
	}
	UnselectOneClickList() {
		this.get.ListIcon().eq(0).click();
	}
	MultipleSelectList() {
		this.get.ListIcon().eq(0).click();
		this.get.ListIcon().eq(1).click();
		this.get.ListIcon().eq(2).click();
		this.get.ListIcon().eq(3).click();
	}
	MultipleUnselectList() {
		this.get.ListIcon().eq(0).click();
		this.get.ListIcon().eq(1).click();
		this.get.ListIcon().eq(2).click();
		this.get.ListIcon().eq(3).click();
	}
	OneClickGrid() {
		this.get.GridIcon().eq(0).click();
	}
	UnselectOneClickGrip() {
		this.get.GridIcon().eq(0).click();
	}
	MultipleSelectGrid() {
		this.get.GridIcon().eq(0).click();
		this.get.GridIcon().eq(2).click();
		this.get.GridIcon().eq(4).click();
		this.get.GridIcon().eq(6).click();
		this.get.GridIcon().eq(8).click();
	}
	MultipleUnselectGrid() {
		this.get.GridIcon().eq(0).click();
		this.get.GridIcon().eq(2).click();
		this.get.GridIcon().eq(4).click();
		this.get.GridIcon().eq(6).click();
		this.get.GridIcon().eq(8).click();
	}
	ClickList() {
		this.get.TabList().click();
	}
	ClickGrid() {
		this.get.TabGrid().click();
	}
}

export const PageSelect = new Selectores();
