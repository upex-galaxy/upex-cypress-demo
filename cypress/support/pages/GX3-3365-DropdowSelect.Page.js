class DropdownPage {
	get={
		valueSelectValue: () => cy.get('#withOptGroup'),
		valueSelectValueOpen: () => cy.get('[id*="react-select-2-option-"]'),
		valueSelectOne: () => cy.get('#selectOne'),
		valueSelectOneOpenTab: () => cy.get('[tabindex="-1"]'),
		valueSelectOneOpenId: () => cy.get('[id*="react-select-3-option-0-"]'),
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
			//const randomElementSelected = cy.wrap(arrayElements).eq(randomElement).should('eq',randomElementSelected);
			//const randomElementSelected = cy.wrap(arrayElements).invoke('text').should('eq',randomElementSelected);
		});
	}
	validateMenuOpen() {
		this.clickValueMenuOpen().then(randomEleSelected => {
			const randomElement = Cypress._.random(0, arrayElements.length -1);
			const textValue = arrayElements[randomElement].innerText;
			Cypress.env('textValue', textValue);
			const randomElementSltd = cy.wrap(arrayElements).eq(randomElement).should('eq',randomEleSelected);
		});
	}

	clickOneMenu() {
		this.get.valueSelectOne().click();
	}
	clickOneMenuOpen() {
		this.get.valueSelectOneOpenTabe().click();
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