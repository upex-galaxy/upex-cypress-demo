class CheckBox {
	get = {
		expandButton: () => cy.get ('.rct-icon.rct-icon-expand-all'),
		expandReaction: () => cy.get ('.rct-node.rct-node-parent'),
		collapseButton: () => cy.get('[title="Collapse all"]'),
		collapseReaction: () => cy.get('.rct-node.rct-node-parent')
	};

	clickExpandButton() {
		this.get.expandButton().click();
	}
	clickCollapseButton() {
		this .get.collapseButton().click();
	}
}

export const checkBoxPage = new CheckBox();