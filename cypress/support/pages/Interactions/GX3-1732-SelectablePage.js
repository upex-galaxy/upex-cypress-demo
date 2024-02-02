class Selectable {
	get = {
		getTabId: idTab => cy.get(`#${idTab}`),
		getContainTabId: idContainTab => cy.get(`#${idContainTab} li`),
	};

	getElement(idElement, elementType) {
		return elementType === 'TAB' ? this.get.getTabId(idElement) : this.get.getContainTabId(idElement);
	}

	clickTab(idElement, elementType) {
		return elementType === 'TAB' ? this.get.getTabId(idElement).click() : this.get.getContainTabId(idElement).click();
	}

	selectOneItemTab(idElement, randomLi) {
		this.get.getContainTabId(idElement).each($li => {
			if ($li.someMethod() === randomLi) {
				cy.wrap($li).click();
			}
		});
	}

	selectMultipleItemTab(idElement) {
		this.get.getContainTabId(idElement).each($li => {
			cy.wrap($li).click();
		});
	}
}

export const selectable = new Selectable();
