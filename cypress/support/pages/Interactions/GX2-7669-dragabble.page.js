class Drag {
	get = {
		//tab panel
		simpleTab: () => cy.get('[id=draggableExample-tab-simple]'),
		axisTab: () => cy.get('[id=draggableExample-tab-axisRestriction]'),
		containerTab: () => cy.get('[id=draggableExample-tab-containerRestriction]'),
		cursorTab: () => cy.get('[id=draggableExample-tab-cursorStyle]'),
		//Drags
		simpleDrag: () => cy.get('[id=dragBox]'),
		xDrag: () => cy.get('[id=restrictedX]'),
		yDrag: () => cy.get('[id=restrictedY]'),
	};

	drag({ X: x, Y: y }) {
		this.get.simpleDrag().move({
			deltaX: x,
			deltaY: y,
		});
	}

	axisDrag({ X = 0, Y = 0 }) {
		if (X == 0) {
			this.get.axisTab().click();
			this.get.yDrag().move({
				deltaX: X,
				deltaY: Y,
			});
		} else {
			this.get.axisTab().click();
			this.get.xDrag().move({
				deltaX: X,
				deltaY: Y,
			});
		}
	}
}

export const drag = new Drag();
