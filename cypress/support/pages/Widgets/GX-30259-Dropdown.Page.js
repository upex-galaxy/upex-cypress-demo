class dropDownPage {
	get = {
		containerSelectValue: () => cy.get('#withOptGroup'),
		titleGroup1SelectValue: () => cy.get('#react-select-2-group-0-heading'),
		option1Group1SelectValue: () => cy.get('#react-select-2-option-0-0'),
		option2Group1SelectValue: () => cy.get('#react-select-2-option-0-1'),
		titleGroup2SelectValue: () => cy.get('#react-select-2-group-1-heading'),
		option1Group2SelectValue: () => cy.get('#react-select-2-option-1-0'),
		option2Group2SelectValue: () => cy.get('#react-select-2-option-1-1'),
		rootOptionSelectValue: () => cy.get('#react-select-2-option-2'),
		anotherOptionSelectValue: () => cy.get('#react-select-2-option-3'),
		allOptionsSelectValue: () => cy.get('[id^="react-select-2-option"]'),
		valueSelectedSelectValue: () => cy.get('[class^=" css-1uccc91-singleValue"]'),
		containerSelectOne: () => cy.get('#selectOne'),
	};

	clickSelectValue() {
		this.get.containerSelectValue().click();
	}
	clickSelectOne() {
		this.get.containerSelectOne().click();
	}
}
export const dropDown = new dropDownPage();
