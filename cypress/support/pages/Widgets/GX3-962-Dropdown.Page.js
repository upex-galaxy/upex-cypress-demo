class dropDownPage {
	get = {
		//DropDownSelectValue
		containerSelectValue: () => cy.get('#withOptGroup'),
		//DropDownSelectOne
		//OldStyleSelectMenu
		//MultiselectDropDown
		//StandardMultiSelect

		//Actions
		clickSelectValue() {
			this.containerSelectValue().click();
		},
	};
}
