class Dropdown {
	get = {
		selectValueDropdown : () => cy.get('#withOptGroup'),
		options: () => cy.get('[id*=react-select][id*=option]'),
		inputSelectValue: () => cy.get('[class$="singleValue"]'),
		inputMultiselect: () => cy.get('[class$="multiValue"]'),
		selectOneDropdown : () => cy.get('#selectOne'),
		selectOldStyleDropdown : () => cy.get('#oldSelectMenu'),
		multiselectDropdown : () => cy.get('[class$="placeholder"]').contains('Select...')
	};
	getRandomValue(){
		return this.get.options().its('length').then(optionsCount => {
			const randomOption = Math.floor(Math.random() * optionsCount);
			return this.get.options().eq(randomOption).click();
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
	getOneMultiSelect(){
		this.get.multiselectDropdown().click();
		return this.getRandomValue();
	}
	getAllMultiSelect() {
		let texts = [];
		this.get.multiselectDropdown().click();
		return this.get.options().then($options => {
			$options.each((index,option) => {
				cy.wrap(option).click().invoke('text').then(text => {
					texts.push(text);
				});
			});
			return cy.wrap(texts);
		});
	}
}
export const dropdownPage = new Dropdown();