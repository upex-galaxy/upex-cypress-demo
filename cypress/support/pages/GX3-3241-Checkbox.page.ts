class Checkbox {
	get: {
        expandAll: () => Cypress.Chainable<JQuery<HTMLElement>>;
		collapseAll: () => Cypress.Chainable<JQuery<HTMLElement>>;
		checkedElement: () => Cypress.Chainable<JQuery<HTMLElement>>;
        folders: () => Cypress.Chainable<JQuery<HTMLElement>>;
		result: () => Cypress.Chainable<JQuery<HTMLElement>>;
		getAlias: (alias: string) => Cypress.Chainable<string[]>;
    } = {
			expandAll: () => cy.get('svg.rct-icon-expand-all'),
			collapseAll: () => cy.get('svg.rct-icon-collapse-all'),
			checkedElement: () => cy.get('[for^="tree-node"]:has(.rct-icon-check)'),
			folders: () => cy.get('[for^="tree-node"]'),
			result: () => cy.get('#result > .text-success'),
			getAlias: (alias : string) => cy.get<string[]>(alias)
		};
	clickExpandAll(): void {
		this.get.expandAll().click();
	}
	clickCollapseAll(): void {
		this.get.collapseAll().click();
	}
	fetchFoldersNames = (allSelected: boolean = true) => {
		const names: string[] = [];
		const selectorToFetch = allSelected ? this.get.folders() : this.get.checkedElement();

		selectorToFetch.each((element) => {
			cy.wrap(element).invoke('text').then((text: string) => {
				let trimmedName = text.trim().toLowerCase().replace(/\s+/g, '').replace(/\.doc$/, '');
				trimmedName = trimmedName.replace(/(?<=\w)(file)/i, 'File');
				names.push(trimmedName);
			});
		}).then(() => {
			const aliasName = allSelected ? 'allFoldersNames' : 'randomFolderNames';
			cy.wrap(names).as(aliasName);
		});
	};
	getResultsNames(): void {
		this.get.result().then(result => {
			const names = result.map((index: number, folder: HTMLElement) => Cypress.$(folder).text()).get();
			cy.wrap(names).as('resultNames');
		});
	}
	selectRandomCheckbox() : void {
		this.get.folders().its('length').then(count => {
			const randomCheckbox = Cypress._.random(count);
			this.get.folders().eq(randomCheckbox).click();
		});
	}
}
export const checkboxPage = new Checkbox;