class SelectMenu {
	get = {
		selectValue: () => cy.get('#withOptGroup'),
		selectValueGroup1Option1: () => cy.get('#react-select-2-option-0-0'),
		selectValueGroup1Option2: () => cy.get('#react-select-2-option-0-1'),
		selectValueGroup2Option1: () => cy.get('#react-select-2-option-1-0'),
		selectValueGroup2Option2: () => cy.get('#react-select-2-option-1-1'),
		selectValueRootOption: () => cy.get('#react-select-2-option-2'),
		selectValueAnotherRootOption: () => cy.get('#react-select-2-option-2'),
		selectOne: () => cy.get('#selectOne'),
		selectOneDr: () => cy.get('#react-select-3-option-0-0'),
		selectOneMr: () => cy.get('#react-select-3-option-0-1'),
		selectOneMrs: () => cy.get('#react-select-3-option-0-2'),
		selectOneMs: () => cy.get('#react-select-3-option-0-3'),
		selectOneProf: () => cy.get('#react-select-3-option-0-4'),
		selectOneOther: () => cy.get('#react-select-3-option-0-5'),
		selectOldMenu: () => cy.get('#oldSelectMenu'),
		multiSelectDropdown: () => cy.get('[class$="indicatorContainer"]'),
		multiSelectGreen: () => cy.get('#react-select-4-option-0'),
		multiSelectBlue: () => cy.get('#react-select-4-option-1'),
		multiSelectBlack: () => cy.get('#react-select-4-option-2'),
		multiSelectRed: () => cy.get('#react-select-4-option-3'),
		standarMultiSelect: () => cy.get('#cars'),
	};
	clickSelectValue() {
		this.get.selectValue().click();
	}
	selectValueGroup1Option1() {
		this.get.selectValueGroup1Option1().click();
	}
	selectValueGroup1Option2() {
		this.get.selectValueGroup1Option2().click();
	}
	selectValueGroup2Option1() {
		this.get.selectValueGroup2Option1().click();
	}
	selectValueGroup2Option2() {
		this.get.selectValueGroup2Option2().click();
	}
	selectValueRootOption() {
		this.get.selectValueRootOption().click();
	}
	selectValueAnotherRootOption() {
		this.get.selectValueAnotherRootOption().click();
	}
	clickSelectOne() {
		this.get.selectOne().click();
	}
	selectOneDr() {
		this.get.selectOneDr().click();
	}
	selectOneMr() {
		this.get.selectOneMr().click();
	}
	selectOneMrs() {
		this.get.selectOneMrs().click();
	}
	selectOneMs() {
		this.get.selectOneMs().click();
	}
	selectOneProf() {
		this.get.selectOneProf().click();
	}
	selectOneOther() {
		this.get.selectOneOther().click();
	}
	clickOldSelectMenu(randomOldSelectMenu) {
		this.get.selectOldMenu().select(randomOldSelectMenu);
	}
	clickMultiSelectDropdown() {
		this.get.multiSelectDropdown().eq(2).click();
	}
	multiSelectGreen() {
		this.get.multiSelectGreen().click();
	}
	multiSelectBlue() {
		this.get.multiSelectBlue().click();
	}
	multiSelectBlack() {
		this.get.multiSelectBlack().click();
	}
	multiSelectRed() {
		this.get.multiSelectRed().click();
	}
	clickStandarMultiSelect(randomStandarMultiSelect) {
		this.get.selectOldMenu().select(randomStandarMultiSelect);
	}
}

export const selectMenuPage = new SelectMenu();
