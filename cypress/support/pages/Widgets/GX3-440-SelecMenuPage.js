class SelecMenu {
	get = {
		//selectMenuSelectValue
		containerSelectValue: () => cy.get('#withOptGroup'),
		optionA: () => cy.get('.div.css-1uccc91-singleValue').eq(0),
		optionB: () => cy.get('.div.css-1uccc91-singleValue').eq(0),
		optionC: () => cy.get('.div.css-1uccc91-singleValue').eq(0),
		optionD: () => cy.get('.div.css-1uccc91-singleValue').eq(0),
		optionE: () => cy.get('.div.css-1uccc91-singleValue').eq(0),
		optionF: () => cy.get('.div.css-1uccc91-singleValue').eq(0),
		allOptionsSelectValue: () => cy.get('.div.css-1uccc91-singleValue').eq(0),
		inputInvalidSelectValue: () => cy.get('#react-select-2-input').eq(0),
		//selectMenuSelectOne
		containerSelectOne: () => cy.get('#selectOne'),
		allOptionsSelectOne: () => cy.get('.css-1uccc91-singleValue').eq(1),
		valueSelectedSelectOne: () => cy.get('.css-1uccc91-singleValue"]').eq(1),
		inputInvalidSelectOne: () => cy.get('#react-select-3-input'),
		//selectMenuOldStyleSelectMenu
		containerOldSelectMenu: () => cy.get('#oldSelectMenu'),
		optionsOldSelectMenu: () => cy.get('#oldSelectMenu>option'),
		//Multiselect drop down
		containerMultiselect: () => cy.get('p+[class=" css-2b097c-container"]'),
		inputMultiselect: () => cy.get('#react-select-4-input'),
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
	typeSelectOne(text) {
		this.get.containerSelectOne().type(text);
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
}
export const SelectMenuPage = new SelecMenu();
