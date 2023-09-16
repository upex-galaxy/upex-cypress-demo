class dropdown {
	get = {
		selectValue: () => cy.get("div[id^='selectMenuContainer'] .col-md-6").eq(0),
		selectGroup1: () => cy.get('.css-1uccc91-singleValue'),
		selectOne: () => cy.get("div[id^='selectMenuContainer'] .col-md-6").eq(1),
		selectOption: () => cy.get('.css-1wa3eu0-placeholder').eq(0),
		selectTitle: () => cy.get('.css-1wa3eu0-placeholder').eq(1),
		selectTitleChoice: () => cy.get('.css-1uccc91-singleValue').eq(1),
		oldStyle: () => cy.get("div[id^='selectMenuContainer'] .col-md-6").eq(4),
		oldSelectMenu: () => cy.get('select#oldSelectMenu>option'),
		multiselect: () => cy.get('.css-1wa3eu0-placeholder').eq(2),
		standardMultiselect: () => cy.get('.col-md-6.col-sm-12>p>b').eq(1),
		itemMultiselect: () => cy.get('select[id^=cars] option'),
	};
}

const menuDropdown = new dropdown();
