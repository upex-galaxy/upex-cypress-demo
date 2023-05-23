class Checkbox {
	get = {
		buttonExpandAll: () => cy.get('button[title="Expand all"]'),
		buttonCollapseAll: () => cy.get('button[title="Collapse all"]'),
		rootCheckbox: () => cy.get('#tree-node-home'),
		expandToggle: () => cy.get('button[title="Toggle"]'),
		labelTitle: () => cy.get('span[class="rct-title"]'),
		labelAll: () => cy.get('label[for*="tree-node"]'),
		buttonOnlyCollapsed: () => cy.get('.rct-node-collapsed button'),
		inputOnlyCollapsed: () => cy.get('.rct-node-collapsed input'),
		checkAllButton: () => cy.get('.rct-node-expanded input'),
		AllCheckbox: () => cy.get('input[type="checkbox"]'),
		liOnlyExpanded: () => cy.get('li.rct-node-expanded'),
		textSuccess: () => cy.get('.text-success'),
	};

	checkFolderHome() {
		this.get.rootCheckbox().check({ force: true });
	}

	clickSelectedAll() {
		this.get.selectedAllButton().click();
	}

	clickExpandToggle() {
		this.get.expandToggle().click();
	}

	clickAllButtonCollapsed() {
		this.get.buttonOnlyCollapsed().each($button => {
			cy.wrap($button).click();
		});
	}

	clickExpandAll() {
		this.get.buttonExpandAll().click();
	}

	clickCollapsedAll() {
		this.get.buttonCollapseAll().click();
	}
}

export const checkbox = new Checkbox();
