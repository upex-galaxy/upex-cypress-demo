class Checkbox {
	get: {
        expandAll: () => Cypress.Chainable<JQuery<HTMLElement>>;
		collapseAll: () => Cypress.Chainable<JQuery<HTMLElement>>;
		checkedElement: () => Cypress.Chainable<JQuery<HTMLElement>>;
        folders: () => Cypress.Chainable<JQuery<HTMLElement>>;
		result: () => Cypress.Chainable<JQuery<HTMLElement>>
    } = {
			expandAll: () => cy.get('svg.rct-icon-expand-all'),
			collapseAll: () => cy.get('svg.rct-icon-collapse-all'),
			checkedElement: () => cy.get('.rct-icon-check'),
			folders: () => cy.get('.rct-title'),
			result: () => cy.get('#result > .text-success')
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
	getResultsNames(): void {
		this.get.result().then(result => {
			const names = result.map((index: number, folder: HTMLElement) => Cypress.$(folder).text()).get();
			cy.wrap(names).as('resultNames');
		});
	}
}
export const checkbox = new Checkbox;