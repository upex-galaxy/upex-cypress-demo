class draggable {
	get = {
		Tabs: () => cy.get('[class="nav nav-tabs"]'),
		TabSimple: () => cy.get('[id="draggableExample-tab-simple"]'),
		DragMe: () => cy.get('[id="dragBox"]'),
		TabAxisRestricted: () => cy.get('[id="draggableExample-tab-axisRestriction"]'),
		TabContainerRestricted: () => cy.get('[id="draggableExample-tab-containerRestriction"]'),
		TabCursorStyle: () => cy.get('[id="draggableExample-tab-cursorStyle"]'),
	};

	MoveDragMe() {
		const X = Cypress._.random(-500, 600);
		const Y = Cypress._.random(-500, 600);
		this.get.DragMe().move({ deltaX: X, deltaY: Y });
	}

	SelectTabSimple() {
		this.get.TabSimple().click();
	}

	SelectTabAxisRestricted() {
		this.get.TabAxisRestricted().click();
	}

	SelectTabContainerRestricted() {
		this.get.TabContainerRestricted().click();
	}

	SelectTabCursorStyle() {
		this.get.TabCursorStyle().click();
	}
}

export const Draggable = new draggable();
