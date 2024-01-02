class dropDownPage {
	get = {
		//DropDownSelectValue
		containerSelectValue: () => cy.get('#withOptGroup'),
		//DropDownSelectOne
		//OldStyleSelectMenu
		//MultiselectDropDown
		//StandardMultiSelect
	};
	//Actions
	clickSelectValue() {
		this.get.containerSelectValue().click();
	}

	SelectValueDropDownOptions() {
		this.clickSelectValue();
		this.get.containerSelectValue().its('length').then(cy.log);
		// const option = Cypress._.random(0, length.length - 1);
		// this.get.SelectValueDropDown().click();
		// cy.select(this.get.containerSelectValue(), option).click();

		// this.get.dropdownMenu().should('be.visible');
		// return this.get.optionMenu().eq(option).click();
	}
}

export const dropDown = new dropDownPage();
