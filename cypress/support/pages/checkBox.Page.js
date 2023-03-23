class Checkbox {
	get = {
		buttonCheck: () => cy.get('input[type="checkbox"]'),
	};

	//Actions methods
	clickCheck() {
		this.get.buttonCheck().click({ force: true });
	}
}
export const checkBox = new Checkbox();
