class List {
	tabs = {
		endpoint: () => cy.visit('https://demoqa.com/selectable'),
		listTab: () => cy.get('#demo-tab-list'),
		listItem: () => cy.get('#verticalListContainer li'),
		gridTab: () => cy.get('#demo-tab-grid'),
		gridItem: () => cy.get('#gridContainer li'),
	};

	selectListElement(element) {
		this.tabs.listItem().eq(element).click();
	}

	selectGridElement(element) {
		this.tabs.gridItem(element).click({ multiple: true });
	}
}

export const list = new List();
