export class SelectMenu {
	getSelectMenu() {
		return cy.get('#withOptGroup');
	}

	clickSelectValueMenu() {
		this.getSelectMenu().click();
	}

	get selectValueMenu() {
		return cy.get('[id^="react-select-2-option-"]');
	}

	getSelectValueMenuCount() {
		return this.selectValueMenu.then($items => $items.length);
	}

	getMenuItemByIndex(index) {
		return this.selectValueMenu.eq(index);
	}

	getMenuItemByText(index) {
		return this.selectValueMenu.eq(index).invoke('text');
	}

	get selectTextMenu() {
		return cy.get('.css-1uccc91-singleValue');
	}

	getSelectedMenuItemText() {
		return this.selectTextMenu.invoke('text');
	}
}
export const selectMenuPage = new SelectMenu();
