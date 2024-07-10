class CheckBox {
	get = {
		expandButton: () => cy.get('.rct-icon.rct-icon-expand-all'),
		expandReaction: () => cy.get('.rct-node.rct-node-parent'),
		collapseButton: () => cy.get('[title="Collapse all"]'),
		collapseReaction: () => cy.get('.rct-node.rct-node-parent'),

		// TC2
		homeToggle: () => cy.get('[title="Toggle"]'),
		desktopLabel: () => cy.get('[for="tree-node-desktop"]'),
		verifyNoteChecked: () => cy.get('[for="tree-node-notes"]'),
		verifyCommandChecked: () => cy.get('[for="tree-node-commands"]'),
		verifyResultMessage:() => cy.get('.text-success'),
		//TC3
		documentsLabel:() => cy.get('[for="tree-node-documents"]'),
		verifyWorkspaceChecked:() => cy.get('[for="tree-node-workspace"]'),
		verifyOfficeChecked: () => cy.get('[for="tree-node-office"]'),
		//TC4
		downloadsLabel: () => cy.get('[for="tree-node-downloads"]'),
		verifyWordFileChecked:() => cy.get('[for="tree-node-wordFile"]'),
		verifyExcelFileChecked: () => cy.get('[for="tree-node-excelFile"]'),
	};

	clickExpandButton() {
		this.get.expandButton().click();
	}

	clickCollapseButton() {
		this.get.collapseButton().click();
	}

	clickDesktopToggle() {
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

	clickDocToggle() {
		this.get.homeToggle().click();
		this.get.homeToggle().children().eq(2).click();
		this.get.documentsLabel().click();

		this.get.documentsLabel().within(() => {
			cy.get('.rct-icon-check').as('documentsCheckboxIcon');
		});

		this.get.verifyWorkspaceChecked().within(() => {
			cy.get('.rct-icon-check').as('workspaceCheckboxIcon');
		});

		this.get.verifyOfficeChecked().within(() => {
			cy.get('.rct-icon-check').as('officeCheckboxIcon');
		});
	}

	clickDownloadsToggle() {
		this.get.homeToggle().click();
		this.get.homeToggle().children().eq(3).click();
		this.get.downloadsLabel().click();

		this.get.downloadsLabel().within(() => {
			cy.get('.rct-icon-check').as('downloadsCheckboxIcon');
		});

		this.get.verifyWordFileChecked().within(() => {
			cy.get('.rct-icon-check').as('wordFileCheckboxIcon');
		});

		this.get.verifyExcelFileChecked().within(() => {
			cy.get('.rct-icon-check').as('excelFileCheckboxIcon');
		});
	}

}

export const checkBoxPage = new CheckBox();
