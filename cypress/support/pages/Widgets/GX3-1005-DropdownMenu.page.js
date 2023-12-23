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
		this.get.selectorValue.click();
		this.get.selectorValueList();
	}
}
