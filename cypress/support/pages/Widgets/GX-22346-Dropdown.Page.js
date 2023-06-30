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
		this.get.SelectValueDropDown().click();
		this.get.dropdownMenu().should('be.visible');
		return this.get.optionMenu().eq(option).click();
	}

	SelectOneDropDownInput(type) {
		this.get.SelectOneDropDown().type(type);
	}

	SelectOneDropDownOptions() {
		const option = Math.floor(Math.random() * 6);
		this.get.SelectOneDropDown().click();
		this.get.dropdownMenu().should('be.visible');
		return this.get.optionMenu().eq(option).click();
	}

	OldSelectMenuDropDownOptions() {
		const option = Math.floor(Math.random() * 10);
		const color = ['Red', 'Blue', 'Green', 'Yellow', 'Purple', 'Black', 'White', 'Voilet', 'Indigo', 'Magenta', 'Aqua'];
		this.get.OldSelectMenuDropDown().select(option);
		Cypress.env('colorSelect', color[option]);
	}
}

export const dropDownSelector = new DropDownSelector();
