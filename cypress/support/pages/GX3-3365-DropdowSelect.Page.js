class Dropdown {
get={
	valueSelectValue: () = > cy.get ('#withOptGroup'),
	valueSelectOne: () = > cy.get('#selectOne'),
	valueOldStyleMenu: () = > cy.get('#oldSelectMenu'),
	valueMultiselectMenu:".css-2b097c-container" eq(2),
	valueStandarmultiselect: () = > cy.get('#cars'),
}
clickValueMenu() {
	this.get.valueSelectValue().click();
}
clickOneMenu() {
	this.get.valueSelectOne().click();
}
clickOldStyleMenu() {
	this.get.valueOldStyleMenu().click();
}
clickMultiselectMenu () {
	this.get.valueMultiselectMenu().click();
}
clickStandarmultiselect () {
	this.get.valueStandarmultiselect().click();
}
}

export const dropdown = new Dropdown();