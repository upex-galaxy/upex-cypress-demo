class SelectablePage {
	get={
		tabList: () => cy.get('#demo-tab-list'),
		tabGrid: () => cy.get('#demo-ta-grid'),
		verticalListContainer: () => cy.get('#verticalListCOntainer li')
	};
	clickOnLIstTab(value) {
		this.get.verticalListContainer().eq(value).click();
	}
}

export const SelectablePage = new SelectablePage();