class Dragabble {
	get = {
		simpleTab: () => cy.get('#draggableExample-tab-simple'),
		axisRestrictedTab: () => cy.get('#draggableExample-tab-simple'),
		containerRestrictedTab: () => cy.get('#draggableExample-tab-containerRestriction'),
		cursorStyleTab: () => cy.get('#draggableExample-tab-cursorStyle'),
		simpleTabVisible: () => cy.get('.nav-item.active'),
		buttonDragBox: () => cy.get('#dragBox'),
	};

	moveRandom(X, Y) {
		this.get.buttonDragBox().move({ X, Y, force: true });
	}
}
export const draggable = new Dragabble();
