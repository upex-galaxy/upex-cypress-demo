class DropDownSelector {
	get = {
		SelectValueDropDown: () => cy.get('[id="withOptGroup"]'),
		SelectOneDropDown: () => cy.get('#selectOne'),
		OldSelectMenuDropDown: () => cy.get('#oldSelectMenu'),
		MultiselectDropDown: () => cy.get('[class=" css-yk16xz-control"]').eq(2),
		StandarMultiSelect: () => cy.get('#cars').eq(0),
		dropdownMenu: () => cy.get('[class$=menu]'),
		optionMenu: () => cy.get('[id*=react-select][id*=option]'),
		selectOption: () => cy.get('[class$="singleValue"]'),
	};

	SelectValueDropDownInput(type) {
		this.get.SelectValueDropDown().type(type);
	}

	SelectValueDropDownOptions() {
		const option = Math.floor(Math.random() * 6);
		dropDownSelector.get.SelectValueDropDown().click();
		dropDownSelector.get.dropdownMenu().should('be.visible');
		return this.get.optionMenu().eq(option).click();
	}

	SelectOneDropDownOptions() {
		const option = Math.floor(Math.random() * 6);
		dropDownSelector.get.SelectOneDropDown().click();
		dropDownSelector.get.dropdownMenu().should('be.visible');
		return this.get.optionMenu().eq(option).click();
	}
}

export const dropDownSelector = new DropDownSelector();
