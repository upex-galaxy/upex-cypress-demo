class SelecMenu {
	get = {
		//selectMenuSelectValue
		containerSelectValue: () => cy.get('#withOptGroup'),
		optionA: () => cy.get('#react-select-2-option-0-0'),
		optionB: () => cy.get('#react-select-2-option-0-1'),
		optionC: () => cy.get('#react-select-2-option-1-0'),
		optionD: () => cy.get('#react-select-2-option-1-1'),
		optionE: () => cy.get('#react-select-2-option-2'),
		optionF: () => cy.get('#react-select-2-option-3'),
		allOptionsSelectValue: () => cy.get('[id^=react-select-2-option]'),
		inputInvalidSelectValue: () => cy.get('.css-1gl4k7y'),
		//selectMenuSelectOne
		containerSelectOne: () => cy.get('#selectOne'),
		allOptionsSelectOne: () => cy.get('[id^=react-select-3-input]'),
		valueSelectedSelectOne: () => cy.get('[class^=" css-1uccc91-singleValue"]').eq(0),
		inputInvalidSelectOne: () => cy.get('.css-1gl4k7y'),
		//selectMenuOldStyleSelectMenu
		containerOldSelectMenu: () => cy.get('#oldSelectMenu'),
		optionsOldSelectMenu: () => cy.get('[id^=react-select-4-input]'),
		//Multiselect drop down
		containerMultiselect: () => cy.get('p+[class=" css-2b097c-container"]'),
		inputInvalidMultiselect: () => cy.get('.css-1gl4k7y'),
		noMatchMultiselect: () => cy.get('[class=" css-1gl4k7y"]'),
		greenOptionMultiselect: () => cy.get('#react-select-4-option-0'),
		blueOptionMultiselect: () => cy.get('#react-select-4-option-1'),
		blackOptionMultiselect: () => cy.get('#react-select-4-option-2'),
		redOptionMultiselect: () => cy.get('#react-select-4-option-3'),
		selectedOptionMultiselect: () => cy.get('.css-1rhbuit-multiValue'),
		//Standard multi select
		containerStandardSelect: () => cy.get('#cars'),
		allOptionsStandardSelect: () => cy.get('#cars>option'),
	};

	clickSelectValue() {
		this.get.containerSelectValue().click();
	}
	clickSelectOne() {
		this.get.containerSelectOne().click();
	}
	typeSelectValue(text) {
		this.get.containerSelectValue().type(text);
	}
	typeSelectOne(text) {
		this.get.containerSelectOne().type(text);
	}
	typeSelectMenu(text) {
		this.get.containerOldSelectMenu().type(text);
	}
	clickOldSelectMenu() {
		this.get.containerOldSelectMenu().trigger('click');
	}
	typeMultiselect(text) {
		this.get.containerMultiselect().type(text);
	}
	clickMultiselect() {
		this.get.containerMultiselect().click();
	}
	clickAllOptionsMultiselect() {
		this.get.greenOptionMultiselect().click();
		this.get.blueOptionMultiselect().click();
		this.get.blackOptionMultiselect().click();
		this.get.redOptionMultiselect().click();
	}
	clickStandardMultiSelect() {
		this.get.containerStandardSelect().click();
	}
	typeStandar(text) {
		this.get.containerStandardSelect().type(text);
	}
}
export const SelectMenuPage = new SelecMenu();
