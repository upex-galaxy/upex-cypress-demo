class Dropdown {
	get = {
		selectValueDropdown : () => cy.get('#withOptGroup'),
		options: () => cy.get('[id*=react-select][id*=option]'),
		inputSelectValue: () => cy.get('[class$="singleValue"]'),
		inputMultiselect: () => cy.get('[class$="multiValue"]'),
		selectOneDropdown : () => cy.get('#selectOne'),
		selectOldStyleDropdown : () => cy.get('#oldSelectMenu'),
		multiselectDropdown : () => cy.get('[class$="placeholder"]').contains('Select...'),
		closeMultiSelectOption : () => cy.get('.css-xb97g8'),
		standartMultiSelect : () => cy.get('#cars')
	};
	getRandomValue() {
		return this.get.options().its('length').then(optionsCount => {
			const randomOption = Math.floor(Math.random() * optionsCount);
			return this.get.options().eq(randomOption).click().invoke('text');
		});
	}
	getRandomSelect(dropdown) {
		return dropdown().then($select => {
			const optionsCount = $select.find('option').length;
			const randomOption = Math.floor(Math.random() * optionsCount);
			cy.log(randomOption);
			return cy.wrap($select).select(randomOption).invoke('val');
		});
	}
	getSelectValue() {
		this.get.selectValueDropdown().click();
		return this.getRandomValue();
	}
	getSelectOne() {
		this.get.selectOneDropdown().click();
		return this.getRandomValue();
	}
	getOneMultiSelect() {
		this.get.multiselectDropdown().click();
		const option = this.getRandomValue();
		this.get.closeMultiSelectOption().click();
		return option;
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
	getAllStandardSelect() {
		let texts = [];
		return this.get.standartMultiSelect().then($select => {
			$select.find('option').each((index,element) => {
				const text = Cypress.$(element).text();
            	texts.push(text);
			});
			return cy.wrap($select).select(texts);
		});
	}
}
export const dropdownPage = new Dropdown();