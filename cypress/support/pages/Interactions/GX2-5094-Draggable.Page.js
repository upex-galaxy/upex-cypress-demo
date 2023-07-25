class draggable {
	get = {
		Tabs: () => cy.get('[class="nav nav-tabs"]'),
		TabSimple: () => cy.get('[id="draggableExample-tab-simple"]'),
		DragMe: () => cy.get('[id="dragBox"]'),
		TabAxisRestricted: () => cy.get('[id="draggableExample-tab-axisRestriction"]'),
		OnlyX: () => cy.get('[id="restrictedX"]'),
		TabContainerRestricted: () => cy.get('[id="draggableExample-tab-containerRestriction"]'),
		TabCursorStyle: () => cy.get('[id="draggableExample-tab-cursorStyle"]'),
	};

	SelectTabSimple() {
		this.get.TabSimple().click();
	}

	MoveDragMe(X, Y) {
		this.get.DragMe().move({ deltaX: X, deltaY: Y });
	}

	SelectTabAxisRestricted() {
		this.get.TabAxisRestricted().click();
	}

	MoveOnlyX(X) {
		this.get.OnlyX().move({ deltaX: X, deltaY: 0 });
	}

	SelectTabContainerRestricted() {
		this.get.TabContainerRestricted().click();
	}

	SelectTabCursorStyle() {
		this.get.TabCursorStyle().click();
	}
}

export const Draggable = new draggable();
