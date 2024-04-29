class Checkbox {
	get: {
        expandAll: () => Cypress.Chainable<JQuery<HTMLElement>>;
		collapseAll: () => Cypress.Chainable<JQuery<HTMLElement>>;
		checkedElement: () => Cypress.Chainable<JQuery<HTMLElement>>;
        folders: () => Cypress.Chainable<JQuery<HTMLElement>>;
		result: () => Cypress.Chainable<JQuery<HTMLElement>>;
		toggleButton: () => Cypress.Chainable<JQuery<HTMLElement>>
    } = {
			expandAll: () => cy.get('svg.rct-icon-expand-all'),
			collapseAll: () => cy.get('svg.rct-icon-collapse-all'),
			checkedElement: () => cy.get('[for^="tree-node"]:has(.rct-icon-check)'),
			folders: () => cy.get('.rct-title'),
			result: () => cy.get('#result > .text-success'),
			toggleButton: () => cy.get('[aria-label="Toggle"]')
		};
	clickExpandAll(): void {
		this.get.expandAll().click();
	}
	clickCollapseAll(): void {
		this.get.collapseAll().click();
	}
	fetchAndStoreFolderNames(): void {
		const names: string[] = [];

		this.get.folders().each((folder) => {
			cy.wrap(folder).invoke('text').then((text: string) => {
				let trimmedName = text.trim().toLowerCase().replace(/\s+/g, '').replace(/\.doc$/, '');
				trimmedName = trimmedName.replace(/(?<=\w)(file)/i, 'File');
				names.push(trimmedName);
			});
		}).then(() => {
			cy.wrap(names).as('folderNames');
		});
	}
	getResultsNames(): void {
		this.get.result().then(result => {
			const names = result.map((index: number, folder: HTMLElement) => Cypress.$(folder).text()).get();
			cy.wrap(names).as('resultNames');
		});
	}
	clickToggleButton(): void {
		this.get.toggleButton().click();
	}
}
export const checkbox = new Checkbox;