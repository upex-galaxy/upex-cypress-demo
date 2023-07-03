class DropdownPage {
	get = {
		mainTitle: () => cy.get('.playgound-header'),
		selectMenuOne: () => cy.get('.col-sm-12').eq(1),
	};

	selectMenuOne() {
		this.get.selectMenuOne.click();
	}
}
export const drop = new DropdownPage();
