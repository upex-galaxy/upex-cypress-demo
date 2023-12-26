class Dinamic {
	get = {
		dinamictext: () => cy.get('p'),
		disabledElementAfter: () => cy.get('#enableAfter'),
		enabledButtonAfter: () => cy.get('#enableAfter'),
		buttonColor: () => cy.get('#colorChange'),
		elementVisibleAfter: () => cy.get('#visibleAfter'),
	};
	Randomtext() {
		return this.get.dinamictext();
	}
	buttomDisabled() {
		return this.get.disabledElementAfter();
	}
	buttomEnabled() {
		return this.get.enabledButtonAfter();
	}
	buttonColorChange() {
		return this.get.buttonColor();
	}
	buttonVisible() {
		return this.get.elementVisibleAfter();
	}
}
export const Dinamico = new Dinamic();
