class CheckBox {
	get = {
		expandButton: () => cy.get('.rct-icon.rct-icon-expand-all'),
		expandReaction: () => cy.get('.rct-node.rct-node-parent'),
		collapseButton: () => cy.get('[title="Collapse all"]'),
		collapseReaction: () => cy.get('.rct-node.rct-node-parent'),

		// check clickButtons
		homeToggle: () => cy.get('[title="Toggle"]'),
		desktopLabel: () => cy.get('[for="tree-node-desktop"]'),
		verifyNoteChecked: () => cy.get('[for="tree-node-notes"]'),
		verifyCommandChecked: () => cy.get('[for="tree-node-commands"]'),
		verifyResultMessage:() => cy.get('.text-success')

		//desktopReaction:() => cy.get('.rct-icon-check'),
	};

	clickExpandButton() {
		this.get.expandButton().click();
	}

	clickCollapseButton() {
		this.get.collapseButton().click();
	}

	clickToggle() {
		this.get.homeToggle().click();
		this.get.homeToggle().children().eq(1).click();
		this.get.desktopLabel().click();

		this.get.desktopLabel().within(() => {
			cy.get('.rct-icon-check').as('desktopCheckboxIcon');
		});

		this.get.verifyNoteChecked().within(() => {
			cy.get('.rct-icon-check').as('noteCheckboxIcon');
		});

		this.get.verifyCommandChecked().within(() => {
			cy.get('.rct-icon-check').as('commandCheckboxIcon');
		});
	}
}

export const checkBoxPage = new CheckBox();
