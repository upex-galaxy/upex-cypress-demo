class DropDown {
	get = {
		selectValue: () => cy.get('[class*="indicatorContainer"]').eq(0),
		valueOptions: () => cy.get('[id^=react-select-2-option]'),
		selectOne: () => cy.get('[class*="indicatorContainer"]').second(),
		oldStyle: () => cy.get('#oldSelectMenu'),
		multipleSelect: () => cy.get('[class*="indicatorContainer"]').third(),
		standardSelect: () => cy.get('#cars'),
	};
	clickValue() {
		this.get.selectValue().click();
	}
	selectValueOption() {
		const options = this.get.valueOptions();
		const optionslength = options.length();
		cy.log(optionslength);
		const randomIndex = Cypress._.random(0, options.length - 1);
		cy.log(randomIndex);
		//this.get.options.eq(randomIndex).click();
	}
}

export const DropDownPage = new DropDown();
