class DropdownPage {
	get = {
		mainTitle: () => cy.get('.playgound-header'),
		clickOptionValue1: () => cy.get('.col-sm-12').eq(1),
		optionValue1Picked: () => cy.get('#react-select-2-group-1-heading'),
		clickOptionValue2: () => cy.get('#react-select-2-option-1-0'),
		optionValue2Picked: () => cy.get('.css-1uccc91-singleValue'),
		selectOptionOne: () => cy.get('.col-sm-12').eq(3),
		optionOnePicked: () => cy.get('#react-select-3-group-0-heading'),
		clickOptionOne: () => cy.get('#react-select-3-option-0-5'),
		clickOldMenu: () => cy.get('#oldSelectMenu'),
		multiSelectOption: () => cy.get('.css-1wa3eu0-placeholder').eq(2),
		clickMultiSelect: () => cy.get('#react-select-4-option-0'),
		standardSelectOption: () => cy.get('#cars'),
	};

	clickOptionValue1() {
		this.get.clickOptionValue1().click();
	}

	clickOptionValue2() {
		this.get.clickOptionValue2().click();
	}

	selectOptionOne() {
		this.get.selectOptionOne().click();
	}

	clickOptionOne() {
		this.get.clickOptionOne().click();
	}

	clickOldMenu() {
		this.get.clickOldMenu().select(5);
	}

	multiSelectOption() {
		this.get.multiSelectOption().click();
	}

	standardSelectOption() {
		this.get.standardSelectOption().children().first().click();
	}
}
export const dropPage = new DropdownPage();
