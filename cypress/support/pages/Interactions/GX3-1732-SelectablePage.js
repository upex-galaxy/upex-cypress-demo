class Selectable {
	get = {
		getTabId: idTab => cy.get(`#${idTab}`),
		getContainTabId: idContainTab => cy.get(`#${idContainTab} li`),
	};

	clickTab(idElement) {
		this.get.getTabId(idElement).click();
	}
}

export const selectable = new Selectable();
