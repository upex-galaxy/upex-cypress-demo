class DropDownSelector {
	get = {
		SelectValueDropDown: () => cy.get('[id="withOptGroup"]'),
		SelectOneDropDown: () => cy.get('#selectOne'),
		OldSelectMenuDropDown: () => cy.get('#oldSelectMenu'),
		MultiselectDropDown: () => cy.get('[class=" css-yk16xz-control"]').eq(2),
		StandardMultiSelect: () => cy.get('#cars'),
		dropdownMenu: () => cy.get('[class$=menu]'),
		optionMenu: () => cy.get('[id*=react-select][id*=option]'),
		selectOption: () => cy.get('[class$="singleValue"]'),
		selectMultiOption: () => cy.get('[class="css-1rhbuit-multiValue"]'),
		closeMultiOption: () => cy.get('[class=" css-1wy0on6"]').eq(2),
		positionMenu: () => cy.get('#cars > option:nth-child(' + Cypress.env('position') + ')'), // STandarMultiSelect Aleatorio
		positionMenu2: () => cy.get('#cars>option'),
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

	MultiselectDropDownInput(type) {
		this.get.MultiselectDropDown().type(type);
	}

	MultiselectDropDownOptions() {
		const option = Math.floor(Math.random() * 3);
		this.get.MultiselectDropDown().click();
		const x = this.get.optionMenu().eq(option).click();
		this.get.closeMultiOption().click();
		return x;
	}

	SelectAllMultiselectDropDown() {
		this.get.MultiselectDropDown().click();
		for (let step = 0; step < 4; step++) {
			this.get.dropdownMenu().click();
		}
	}

	StandardMultiSelectOptions() {
		const option = Math.floor(Math.random() * 3);
		Cypress.env('position', option + 1);
		this.get.StandardMultiSelect().select(option);
	}

	StandardMultiSelectPosition() {
		return this.get.positionMenu();
	}

	SelectAllStandardMultiSelectOptions() {
		this.get.StandardMultiSelect().select([0, 1, 2, 3]);
	}
}

export const dropDownSelector = new DropDownSelector();
