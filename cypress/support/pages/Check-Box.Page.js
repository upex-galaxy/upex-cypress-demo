class CheckBox {
	elements = {
		buttonExpandAll: () => cy.get('button[title="Expand all"]'),
		buttonCollapseAll: () => cy.get('button[title="Collapse all"]'),

		toggleMain: () => cy.get('button[title="Toggle"]'),
		checkboxHome: () => cy.get('#tree-node-home'),
		checkboxDesktop: () => cy.get('#tree-node-desktop'),
		checkboxNotes: () => cy.get('#tree-node-notes'),
		checkboxCommands:() => cy.get('#tree-node-commands'),
		checkboxDocuments: () => cy.get('#tree-node-documents'),
		checkboxWorkspace: () => cy.get('#tree-node-workspace'),
		checkboxReact: () => cy.get('#tree-node-react'),
		checkboxAngular: () => cy.get('#tree-node-angular'),
		checkboxVeu: () => cy.get('#tree-node-veu'),
		checkboxOffice: () => cy.get('#tree-node-office'),
		checkboxPublic: () => cy.get('#tree-node-public'),
		checkboxPrivate: () => cy.get('#tree-node-private'),
		checkboxClassified: () => cy.get('#tree-node-classified'),
		checkboxGeneral: () => cy.get('#tree-node-general'),
		checkboxDownloads: () => cy.get('#tree-node-downloads'),
		checkboxWordFile: () => cy.get('#tree-node-word-file'),
		checkboxExcelFile: () => cy.get('#tree-node-excel-file'),
		successMessage: () => cy.get('#result'),

		toggleChildren: () => cy.get('#tree-node > ol > li > ol'),
		//checkboxParent: () => cy.get('#tree-node-home > .rct-checkbox'),
		labelTitle: () => cy.get('span[class="rct-title"]'),
		labelAll: () => cy.get('label[for*="tree-node"]'),
		buttonOnlyCollapsed: () => cy.get('.rct-node-collapsed button'),
		inputOnlyCollapsed: () => cy.get('.rct-node-collapsed input'),
		checkAllButton: () => cy.get('.rct-node-expanded input'),
		AllCheckbox: () => cy.get('input[type="checkbox"]'),
		liOnlyExpanded: () => cy.get('li.rct-node-expanded'),
		textSuccess: () => cy.get('.text-success'),
	};

	clickButtonExpandAll() {
		this.elements.buttonExpandAll().click();
	}
    
	clickButtonCollapsedAll() {
		this.elements.buttonCollapseAll().click();
	}
    
	clickExpandToggle() {
		this.elements.toggleMain().click();
	}
	clickChildrenToggle() {
		const toggle = Cypress._.random(0, 2);
		this.elements.toggleChildren().click()
			.find('li').eq(toggle) 
			.find('button[title="Toggle"]').click();
	}

	checkParentCheckbox() {
		this.elements.checkboxHome().check({ force: true });
		// const toggle = Cypress._.random(0, 2);
		// cy.wrap(toggle).then((toggleIndex) => {
		// 	this.elements.toggleChildren().click()
		// 		.find('li').eq(toggleIndex) 
		// 		.find('button[title="Toggle"]').click()
		// 		.end()
		// 		.find('.rct-checkbox').check();
		// });			
	}

	verifyAllCheckboxesChecked() {
		cy.get('#tree-node').within(() => {
			cy.get('input[type="checkbox"]').each(($el) => {
				cy.wrap($el).should('be.checked');
			});
		});
	}

	uncheckParentCheckbox() {
		this.elements.checkboxDocuments().check({ force: true });
		this.elements.checkboxDocuments().uncheck({ force: true });
	
	}

}

export const checkBox = new CheckBox();
