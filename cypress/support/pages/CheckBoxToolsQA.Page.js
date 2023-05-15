class CheckBox {
	elements = {
		buttonExpandAll: () => cy.get('button[title="Expand all"]'),
		buttonCollapseAll: () => cy.get('button[title="Collapse all"]'),
		toggleMain: () => cy.get('button[title="Toggle"]'),
		checkboxHome: () => cy.get('#tree-node-home'),
		foldersParents: () => cy.get('[class*="rct-node-parent"]'),
		successMessage: () => cy.get('#result'),
		buttonOnlyCollapsed: () => cy.get('.rct-node-collapsed button'),
		inputOnlyCollapsed: () => cy.get('.rct-node-collapsed input'),
		checkboxes: () => cy.get('input[type="checkbox"]'),
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
	
	checkChildCheckbox() {
		//Filtrar los checkboxes que son subdirectorio
		const checkboxes = this.elements.checkboxes().filter(':not(#tree-node-home)');
		checkboxes.then(($elements) => {
			const randomIndex = Cypress._.random(0, $elements.length - 1);
			cy.log(randomIndex);
			const randomCheckbox = $elements.eq(randomIndex);
			cy.wrap(randomCheckbox).should('exist').check({ force: true });
		});
	}

	checkParentCheckbox() {
		this.elements.buttonOnlyCollapsed()
			.its('length')
			.then(n => Cypress._.random(0, n - 1))
			.then(randomFolder => {
				this.elements.inputOnlyCollapsed().eq(randomFolder).check({ force: true });
				this.elements.buttonOnlyCollapsed().eq(randomFolder).click();
				cy.get('.rct-node-parent').not(':first').eq(randomFolder).find('input[type="checkbox"]').each(($el) => {
					cy.wrap($el).should('be.checked');
				});
			});
	}	
	
	uncheckParentCheckbox() {
		this.elements.checkboxHome().check({ force: true });
		this.elements.buttonExpandAll().click({ force: true });
		this.elements.checkboxHome().uncheck({ force: true });
	}
}

export const checkBox = new CheckBox();
