class Selectable {
	get = {
		url: () => cy.visit('/selectable'),
		btnList: () => cy.get('#demo-tab-list'),
		btnGrid: () => cy.get('#demo-tab-grid'),
		elementsList: () => cy.get('#verticalListContainer li'),
		elementsGrid: () => cy.get('#gridContainer li'),
	};

	urlVisit() {
		this.get.url();
	}
	btnListClick() {
		this.get.btnList().click();
	}

	btnGridClick() {
		this.get.btnGrid().click();
	}

	elementsListClick() {
		this.get.elementsList().click({ multiple: true });
	}
	elementsGridClick() {
		this.get.elementsGrid().click({ multiple: true });
	}
}

export const selectable = new Selectable();
