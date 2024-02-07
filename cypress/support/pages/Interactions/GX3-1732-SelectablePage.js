class Selectable {
	get = {
		getTabId: idTab => cy.get(`#${idTab}`),
		getContainTabId: idContainTab => cy.get(`#${idContainTab} li`),
	};

	getElement(idElement, elementType) {
		return elementType === 'TAB' ? this.get.getTabId(idElement) : this.get.getContainTabId(idElement);
	}

	clickTab(idElement) {
		this.get.getTabId(idElement).click();
	}

	getRamdonItem(list) {
		return list[Math.floor(Math.random() * list.length)];
	}

	selectOneItemTab(idElement, randomItem) {
		this.get.getContainTabId(idElement).each($li => {
			cy.wrap($li)
				.invoke('text')
				.then(text => {
					if (text === randomItem) {
						cy.wrap($li).click();
					}
				});
		});
	}

	selectMultipleItemTab(idElement) {
		this.get.getContainTabId(idElement).each($li => {
			cy.wrap($li).click();
		});
	}
}

export const selectable = new Selectable();
