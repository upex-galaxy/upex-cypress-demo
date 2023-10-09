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
		dragContainer: () => cy.get('[id=containmentWrapper] div'),
		dragText: () => cy.get('[id^=draggable] span').eq(0),
		dragCenter: () => cy.get('[id=cursorCenter]'),
		dragTopLeft: () => cy.get('[id=cursorTopLeft]'),
		dragBottom: () => cy.get('[id=cursorBottom]'),
	};

	drag({ X: x, Y: y }) {
		this.get.simpleDrag().move({
			deltaX: x,
			deltaY: y,
		});
	}

	axisDrag({ X = '', Y = '' }) {
		if (X !== '') {
			this.get.axisTab().click();
			this.get.xDrag().move({
				deltaX: X,
				deltaY: 0,
			});
		} else {
			this.get.axisTab().click();
			this.get.yDrag().move({
				deltaX: 0,
				deltaY: Y,
			});
		}
	}

	containerDrag({ x: x, Y: y }) {
		this.get.containerTab().click();
		this.get.dragContainer().move({
			deltaX: x,
			deltaY: y,
		});
	}
	textDrag({ x: x, Y: y }) {
		this.get.containerTab().click();
		this.get.dragText().move({
			deltaX: x,
			deltaY: y,
		});
	}

	dragStickCenter({ X: x, Y: y }) {
		this.get.cursorTab().click();
		this.get.dragCenter().move({
			deltaX: x,
			deltaY: y,
		});
	}
	dragTop({ X: x, Y: y }) {
		this.get.cursorTab().click();
		this.get.dragTopLeft().move({
			deltaX: x,
			deltaY: y,
		});
	}
	dragBottom({ X: x, Y: y }) {
		this.get.cursorTab().click();
		this.get.dragBottom().move({
			deltaX: x,
			deltaY: y,
		});
	}
}

export const drag = new Drag();
