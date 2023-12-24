class Dropdown {
	get = {
		selectorValue: () => cy.get('#withOptGroup'),
		selectorValueList: () => cy.get('.css-11unzgr'),
		selectorValueOption1: () => cy.get('#react-select-2-option-0-0'),
		selectorOne: () => cy.get('#selectOne'),
		selectorOneList: () => cy.get('.css-1s9izoc'),
		selectorOneOption0: () => cy.get('#react-select-3-option-0-0'),
		selectorOldMenu: () => cy.get('#oldSelectMenu'),
		indicadorMultiMenu: () => cy.get('.css-tlfecz-indicatorContainer'),
		selectorMultiMenuList: () => cy.get('.css-26l3qy-menu'),
		selectorMultiMenu1: () => cy.get('#react-select-4-option-1'),
		selectorMultimenu2: () => cy.get('#react-select-4-option-2'),
		selectorMultiMenu: () => cy.get('.css-1hwfws3'),
		selectorStandard: () => cy.get('#cars'),
	};
	ClickSelectorValue() {
		this.get.selectorValue().click();
		return this.get.selectorValueList();
	}
	ClickSelectorValue1() {
		this.get.selectorValueOption1().click();
		return this.get.selectorValue();
	}
	ValidarSelectorList() {
		this.get.selectorOne().click();
		return this.get.selectorOneList();
	}
	SelectOneOption() {
		this.get.selectorOneOption0().click();
		return this.get.selectorOne();
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
export const DropDown = new Dropdown();
