class DropdownPage {
	get={
		valueSelectValue: () => cy.get('#withOptGroup'),
		valueSelectValueOpen: () => cy.get('[id*="react-select-2-option-"]'),
		valueSelectOne: () => cy.get('#selectOne'),
		valueOldStyleMenu: () => cy.get('#oldSelectMenu'),
		valueMultiselectMenu: () => cy.get('.css-2b097c-container').eq(2),
		valueStandarmultiselect: () => cy.get('#cars')
	};
	clickValueMenu() {
		this.get.valueSelectValue().click();
	}
	clickValueMenuOpen() {
		this.get.valueSelectValueOpen().then(arrayElements => {
			const randomElement = Cypress._.random(0, arrayElements.length -1);
			const textValue = arrayElements[randomElement].innerText;
			Cypress.env('textValue', textValue);
			cy.wrap(arrayElements).eq(randomElement).click();
		});
	}

	clickValueMenuOpen2() {
		this.get.valueSelectValueOpen(2).then(arrayElements => {
			const randomElement = Cypress._.random(0, arrayElements.length -1);
			const textValue = arrayValues[num].innerText;
			Cypress.env('textValue', textValue);
			cy.wrap(arrayElements).eq(randomElement).click();
		});
	}
	clickOneMenu() {
		this.get.valueSelectOne().click();
	}
	clickOldStyleMenu() {
		this.get.valueOldStyleMenu().click();
	}
	clickMultiselectMenu() {
		this.get.valueMultiselectMenu().click();
	}
	clickStandarmultiselect() {
		this.get.valueStandarmultiselect().click();
	}
}

export const dropdownPage = new DropdownPage();