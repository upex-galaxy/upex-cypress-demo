class dropdown {
	get = {
		selectValue: () => cy.get("div[id^='selectMenuContainer'] .col-md-6").eq(0),
		selectGroup2: () => cy.get("div[id^='withOptGroup'] div> .css-1uccc91-singleValue"),
		selectOne: () => cy.get("div[id^='selectMenuContainer'] .col-md-6").eq(2),
		selectTitle: () => cy.get('.css-1wa3eu0-placeholder').eq(0),
		selectTitleChoice: () => cy.get('.css-1uccc91-singleValue'),
		oldStyle: () => cy.get("div[id^='selectMenuContainer'] .col-md-6").eq(4),
		oldSelectMenu: () => cy.get('select#oldSelectMenu>option'),
		multiselect: () => cy.get('.css-1wa3eu0-placeholder').eq(1),
		standardMultiselect: () => cy.get('.col-md-6.col-sm-12>p>b').eq(1),
		itemMultiselect: () => cy.get('select[id^=cars] option'),
	};

	clickSelectValue() {
		this.get.selectValue().click();
	}
	clickSelectGroup() {
		this.get.selectGroup2().click();
	}
	clickSelectOne() {
		this.get.selectOne().click();
	}
	itemSelectOption() {
		this.get.selectOption().each(item => {
			cy.wrap(item).should('be.visible').click();
		});
	}
}

const menuDropdown = new dropdown();
