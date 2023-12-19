class Dinamic {
	get = {
		dinamictext: () => cy.get('p'),
		disabled4: () => cy.get('#enableAfter'),
		enabled5: () => cy.get('#enableAfter'),
	};
	Randomtext() {
		return this.get.dinamictext();
	}
	buttomDisabled() {
		return this.get.disabled4();
	}
	buttomEnabled() {
		return this.get.enabled5();
	}
}
export const Dinamico = new Dinamic();
