class DropdownMenu {
	get = {
		menuGroupDropdown: () => cy.get('#withOptGroup'),
		menuGroupDropdownValue: () => this.get.menuGroupDropdown().find('[class$=singleValue]'),
		menuPickDropdown: () => cy.get('#selectOne'),
		menuPickDropdownValue: () => this.get.menuPickDropdown().find('[class$=singleValue]'),
		menuSelectDropdown: () => cy.get('select#oldSelectMenu'),
		menuMultiDropdown: () => cy.contains('Multiselect drop down').parent().next(),
		menuCarsDropdown: () => cy.get('select#cars'),
		dropdownMenu: () => cy.get('[class$=menu]'),
		dropdownOption: () => cy.get('[id*=react-select][id*=option]'),
		selectedValue: '',
	};

	selectMenuGroupDropdownOption(selectOption) {
		this.get.menuGroupDropdown().click();
		this.get.dropdownMenu().should('be.visible');
		return this.get.dropdownMenu().within(() => {
			this.get
				.dropdownOption()
				.eq(selectOption)
				.then(option => {
					cy.wrap(option)
						.click()
						.then(() => {
							return option.text();
						})
						.then(optionValue => (this.get.selectedValue = optionValue));
				});
		});
	}
	selectMenuPickDropdownOption(selectOption) {
		this.get.menuPickDropdown().click();
		this.get.dropdownMenu().should('be.visible');
		return this.get.dropdownMenu().within(() => {
			this.get
				.dropdownOption()
				.eq(selectOption)
				.then(option => {
					cy.wrap(option)
						.click()
						.then(() => {
							return option.text();
						})
						.then(optionValue => (this.get.selectedValue = optionValue));
				});
		});
	}

	openMenuPickDropdown() {
		this.get.menuPickDropdown().click();
	}
	openMenuSelectDropdown() {
		this.get.menuSelectDropdown().select(3);
	}
	openMenuMultiDropdown() {
		this.get.menuMultiDropdown().click();
	}
	openMenuCarsDropdown() {
		this.get.menuCarsDropdown().click();
	}
}

export const dropdownMenu = new DropdownMenu();
