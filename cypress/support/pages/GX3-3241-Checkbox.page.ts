class Checkbox {
	get: {
        expandAll: () => Cypress.Chainable<JQuery<HTMLElement>>;
		collapseAll: () => Cypress.Chainable<JQuery<HTMLElement>>;
        folders: () => Cypress.Chainable<JQuery<HTMLElement>>;
    } = {
			expandAll: () => cy.get('[aria-label="Expand all"]'),
			collapseAll: () => cy.get('[aria-label="Collapse all"]'),
			folders: () => cy.get('.rct-title')
		};
	clickExpandAll(): void {
		this.get.expandAll().click();
	}
	clickCollapseAll(): void {
		this.get.collapseAll().click();
	}
	fetchAndStoreFolderNames(): void {
		this.get.folders().then(folders => {
			const names = folders.map((index: number, folder: HTMLElement) => Cypress.$(folder).text()).get();
			cy.wrap(names).as('folderNames');
		});
	}
}
export const checkbox = new Checkbox;