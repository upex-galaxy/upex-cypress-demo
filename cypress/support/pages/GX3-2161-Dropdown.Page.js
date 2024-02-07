class Dropdown {
	get = {
		selectValueDropdown : () => cy.get('#withOptGroup'),
		optionsSelectValue: () => cy.get('[id*=react-select][id*=option]'),
		inputSelectValue: () => cy.get('[class$="singleValue"]'),
		selectOneDropdown : () => cy.get('#selectOne'),
		selectOldStyleDropdown : () => cy.get('#oldSelectMenu'),
	};
	getRandomValue(){
		return this.get.optionsSelectValue().its('length').then(optionsCount => {
			const randomOption = Math.floor(Math.random() * optionsCount);
			return this.get.optionsSelectValue().eq(randomOption).click();
		});
	}
	getSelectValue(){
		this.get.selectValueDropdown().click();
		return this.getRandomValue();
	}
	getSelectOne(){
		this.get.selectOneDropdown().click();
		return this.getRandomValue();
	}
	getOldStyle(){
		return this.get.selectOldStyleDropdown().then($select => {
			const optionsCount = $select.find('option').length;
			const randomOption = Math.floor(Math.random() * optionsCount);

			return cy.wrap($select).select(randomOption).invoke('val');
		});
	}
}
export const dropdownPage = new Dropdown();