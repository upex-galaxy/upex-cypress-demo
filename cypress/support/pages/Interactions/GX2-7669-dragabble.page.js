class Drag {
	get = {
		//tab panel
		simpleTab: () => cy.get('[id=draggableExample-tab-simple]'),
		axisTab: () => cy.get('[id=draggableExample-tab-axisRestriction]'),
		containerTab: () => cy.get('[id=draggableExample-tab-containerRestriction]'),
		cursorTab: () => cy.get('[id=draggableExample-tab-cursorStyle]'),
		containerPanel: () => cy.get('[id=containmentWrapper]'),

		//Drags
		simpleDrag: () => cy.get('[id=dragBox]'),
		xDrag: () => cy.get('[id=restrictedX]'),
		yDrag: () => cy.get('[id=restrictedY]'),
		dragContainer: () => cy.get('[id=containmentWrapper] div'),
		dragText: () => cy.get('[id^=draggable] span').eq(0),
		dragCenter: () => cy.get('[id=cursorCenter]'),
		dragTopLeft: () => cy.get('[id=cursorTopLeft]'),
		dragBottomContainer: () => cy.get('[id=cursorBottom]'),
	};

	drag({ X: x, Y: y }) {
		this.get.simpleDrag().should('be.visible');
		this.get.simpleDrag().move({
			deltaX: x,
			deltaY: y,
		});
	}

	axisDrag({ X = '', Y = '' }) {
		if (X !== '') {
			this.get.axisTab().click();
			this.get.xDrag().should('be.visible');
			this.get.xDrag().move({
				deltaX: X,
				deltaY: 0,
			});
		} else {
			this.get.axisTab().click();
			this.get.yDrag().should('be.visible');
			this.get.yDrag().move({
				deltaX: 0,
				deltaY: Y,
			});
		}
	}

	containerDrag({ X, Y }) {
		this.get.containerTab().click();
		this.get.dragContainer().should('be.visible');
		this.get.dragContainer().move({
			deltaX: X,
			deltaY: Y,
			force: true,
		});
		// let yCoordinateCss, xCoordinateCss;
		// this.get.containerTab().click();
		// this.get.dragContainer().should('be.visible');
		// this.get
		// 	.dragContainer()
		// 	.trigger('mousedown', { which: 1 })
		// 	.trigger('mousemove', { which: 1, pageX: 53, pageY: 0 })
		// 	.trigger('mouseup', { force: true });
		// return this.get
		// 	.containerPanel()
		// 	.then(() => {
		// 		this.get.dragContainer().then(data => {
		// 			//Se tomaron los valores de las coordenadas X y Y de la etiqueta HTML, se lo redondeo al valor entero y se lo convirtió a un valor Number
		// 			console.log(data);
		// 			yCoordinateCss = Math.floor(parseInt(data[0].style.top));
		// 			xCoordinateCss = Math.floor(parseInt(data[0].style.left));
		// 			cy.log('data', data[0].style.left);
		// 		});
		// 	})
		// 	.then(() => {
		// 		return [xCoordinateCss, yCoordinateCss];
		// 	});
	}
	textDrag({ X, Y }) {
		this.get.containerTab().click();
		this.get.dragText().should('be.visible');
		this.get.dragText().move({
			deltaX: X,
			deltaY: Y,
		});
	}

	dragFromCenter({ X, Y }) {
		let yCoordinateCss, xCoordinateCss;
		this.get.cursorTab().click();
		this.get.dragCenter().should('be.visible');
		this.get
			.dragCenter()
			.trigger('mousedown', { which: 1 })
			.trigger('mousemove', { which: 1, pageX: X, pageY: Y })
			.trigger('mouseup', { force: true });
		return this.get
			.dragCenter()
			.then(() => {
				this.get.dragCenter().then(data => {
					//Se tomaron los valores de las coordenadas X y Y de la etiqueta HTML, se lo redondeo al valor entero y se lo convirtió a un valor Number
					yCoordinateCss = Math.floor(parseInt(data[0].style.top));
					xCoordinateCss = Math.floor(parseInt(data[0].style.left));
					cy.log('data', data[0].style.left);
				});
			})
			.then(() => {
				return [xCoordinateCss, yCoordinateCss];
			});
	}

	dragFromTopLeft({ X, Y }) {
		let yCoordinateCss, xCoordinateCss;
		this.get.cursorTab().click();
		this.get.dragTopLeft().should('be.visible');
		this.get
			.dragTopLeft()
			.trigger('mousedown', 'topLeft', { which: 1 })
			.trigger('mousemove', 'topLeft', { which: 1, pageX: X, pageY: Y })
			.trigger('mouseup', 'topLeft', { force: true });
		return this.get
			.dragTopLeft()
			.then(() => {
				this.get.dragTopLeft().then(data => {
					//Se tomaron los valores de las coordenadas X y Y de la etiqueta HTML, se lo redondeo al valor entero y se lo convirtió a un valor Number
					yCoordinateCss = Math.floor(parseInt(data[0].style.top));
					xCoordinateCss = Math.floor(parseInt(data[0].style.left));
				});
			})
			.then(() => {
				return [xCoordinateCss, yCoordinateCss];
			});
	}

	dragFromBottom({ X, Y }) {
		let yCoordinateCss, xCoordinateCss;
		this.get.cursorTab().click();
		this.get.dragBottomContainer().should('be.visible');
		this.get
			.dragBottomContainer()
			.trigger('mousedown', 'bottom', { which: 1 })
			.trigger('mousemove', 'bottom', { which: 1, pageX: X, pageY: Y })
			.trigger('mouseup', 'bottom', { force: true });
		return this.get
			.dragBottomContainer()
			.then(() => {
				this.get.dragBottomContainer().then(data => {
					//Se tomaron los valores de las coordenadas X y Y de la etiqueta HTML, se lo redondeo al valor entero y se lo convirtió a un valor Number
					yCoordinateCss = Math.floor(parseInt(data[0].style.top));
					xCoordinateCss = Math.floor(parseInt(data[0].style.left));
				});
			})
			.then(() => {
				return [xCoordinateCss, yCoordinateCss];
			});
	}
}

export const dragPage = new Drag();
