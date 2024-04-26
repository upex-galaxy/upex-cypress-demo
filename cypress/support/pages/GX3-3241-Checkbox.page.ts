class Checkbox {
	get: {
        expandAll: () => Cypress.Chainable<JQuery<HTMLElement>>;
        folders: () => Cypress.Chainable<JQuery<HTMLElement>>;
    } = {
			expandAll: () => cy.get('[aria-label="Expand all"]'),
			folders: () => cy.get('.rct-title')
		};
	 clickExpandAll(): void {
		this.get.expandAll().click();
	}
	fetchAndStoreFolderNames(): void {
		this.get.folders().then(folders => {
			const names = folders.map((index: number, folder: HTMLElement) => Cypress.$(folder).text()).get();
			cy.wrap(names).as('folderNames');
		});
	}
}
export const checkbox = new Checkbox;