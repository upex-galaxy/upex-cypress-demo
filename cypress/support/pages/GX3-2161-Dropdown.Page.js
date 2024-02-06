class Dropdown {
	get = {
		selectValueDropdown : () => cy.get('#withOptGroup'),
		optionsSelectValue: () => cy.get('[id*=react-select][id*=option]'),
		inputSelectValue: () => cy.get('[class$="singleValue"]')
	};
	getAnySelectValue(){
		this.get.selectValueDropdown().click();
		return this.get.optionsSelectValue().its('length').then(optionsCount => {
			const randomOption = Math.floor(Math.random() * optionsCount);
			return this.get.optionsSelectValue().eq(randomOption).click();
		});
	}

}
export const dropdownPage = new Dropdown();