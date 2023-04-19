class Dragabble {
	get = {
		//tabs:
		simpleTab: () => cy.get('#draggableExample-tab-simple'),
		axisTab: () => cy.get('#draggableExample-tab-axisRestriction'),

		//buttonSimple:
		dragMe: () => cy.get('[id="dragBox"]'),

		//Buttons Axis:
		OnlyX: () => cy.get('#restrictedX'),
		OnlyY: () => cy.get('#restrictedY'),
	};

	MoveDragMe(deltaX, deltaY) {
		this.get.dragMe().move({ deltaX, deltaY });
	}
	SelectAxisTab() {
		this.get.axisTab().click();
	}
	MoveOnlyX(onlyX, onlyY) {
		this.get.OnlyX().move({ onlyX, onlyY });
	}
}

export const simple = new Dragabble();
export const axis = new Dragabble();
export const container = new Dragabble();
