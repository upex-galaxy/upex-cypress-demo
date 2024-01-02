class Dropdown {
	get = {
		selectorValue: () => cy.get('#withOptGroup'),
		selectorValueList: () => cy.get('[id*="react-select-2-option"]'),
		selectorValueOption1: () => cy.get('#react-select-2-option-0-0'),
		selectorOne: () => cy.get('#selectOne'),
		selectorOneList: () => cy.get('[id*="react-select-3-option"]'),
		selectorOneOption0: () => cy.get('#react-select-3-option-0-0'),
		selectorOldMenu: () => cy.get('#oldSelectMenu'),
		indicadorMultiMenu: () => cy.get('.css-tlfecz-indicatorContainer'),
		selectorMultiMenuList: () => cy.get('.css-26l3qy-menu'),
		selectorMultiMenu1: () => cy.get('#react-select-4-option-1'),
		selectorMultimenu2: () => cy.get('#react-select-4-option-2'),
		selectorMultiMenu: () => cy.get('.css-1hwfws3'),
		selectorStandard: () => cy.get('#cars'),
	};
	ClickSelectorValueDropDown() {
		this.get.selectorValue().click();
	}
	SelectValueListRandom(num) {
		this.get.selectorValueList().eq(num).click();
	}
	ClickSelectOne() {
		this.get.selectorOne().click();
	}
	SelectOneOptionRandom(num) {
		this.get.selectorOneList().eq(num).click();
	}
	SelectOldMenu() {
		return this.get.selectorOldMenu().select('Green');
	}
	IndicadorMultiMenu() {
		this.get.indicadorMultiMenu().eq(2).click();
		return this.get.selectorMultiMenuList();
	}
	SelectMultiMenu() {
		this.get.selectorMultiMenu1().click();
		this.get.selectorMultimenu2().click();
		return this.get.selectorMultiMenu().eq(2);
	}
	SelectMenuStandard() {
		return this.get.selectorStandard().select(['Volvo', 'Saab', 'Opel']);
	}
}
export const DropDownPage = new Dropdown();
