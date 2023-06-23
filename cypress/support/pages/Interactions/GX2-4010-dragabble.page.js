class dragabble {
	get = {
		bttnSimple: () => cy.get('#draggableExample-tab-simple'),
		boxDragMe: () => cy.get('#dragBox'),
		bttnAxis: () => cy.get('#draggableExample-tab-axisRestriction'),
		boxX: () => cy.get('#restrictedX'),
		boxY: () => cy.get('#restrictedY'),
		bttnContainer: () => cy.get('#draggableExample-tab-containerRestriction'),
		boxContainer: () => cy.get('#containmentWrapper'), //caja
		boxInsideContainer: () => cy.contains(/I'm contained within the box/),
		cajaBContenedora: () => cy.get('.draggable.ui-widget-content.m-3'),
		elementoCajaB: () => cy.contains(/I'm contained within my parent/),
		bttnStyle: () => cy.get('#draggableExample-tab-cursorStyle'),
		boxCenter: () => cy.get('#cursorCenter'),
		boxTop: () => cy.get('#cursorTopLeft'),
		boxCursor: () => cy.get('#cursorBottom'),
	};
	move(deltaX, deltaY) {
		this.get.boxDragMe().move({ deltaX, deltaY, force: true });
	}
	moveOnlyX(deltaX, deltaY) {
		this.get.boxX().move({ deltaX, deltaY, force: true });
	}
	clickAxis() {
		this.get.bttnAxis().click();
	}
	moveOnlyY(deltaX, deltaY) {
		this.get.boxY().move({ deltaX, deltaY, force: true });
	}
	clickContainer() {
		this.get.bttnContainer().click();
	}
	//posición actual del objeto A.
	getObjectPosition() {
		return this.get
			.boxInsideContainer()
			.invoke('attr', 'style')
			.then(style => {
				return style;
			});
	}
	//posición actual de la caja.
	getBoxPosition() {
		return cy.get(this.boxSelector).then($box => {
			const rect = $box[0].getBoundingClientReact();
			return { x: rect.left, y: rect.top };
		});
	}
	//movimiento objeto A
	moveBox(ejeX, ejeY) {
		this.get.boxInsideContainer().move({ deltaX: ejeX, deltaY: ejeY, force: true });
	}
	//posición actual caja B
	getObjectPositionB() {
		return this.get
			.elementoCajaB()
			.invoke('attr', 'style')
			.then(style => {
				return style;
			});
	}
	//posición actual B
	getBoxPositionB(ejeX, ejeY) {
		return cy.get.elementoCajaB().move({ deltaX: ejeX, deltaY: ejeY, force: true });
	}
	//movimiento caja B
	moveBox2(ejeX, ejeY) {
		this.get.elementoCajaB().move({ deltaX: ejeX, deltaY: ejeY, force: true });
	}
	clickStyle() {
		this.get.bttnStyle().click();
	}
	//posición actual del objeto Center.
	getObjectCenter() {
		return this.get
			.boxCenter()
			.invoke('attr', 'style')
			.then(style => {
				return style;
			});
	}
	//movimiento boxCenter
	moveBoxCenter(ejeX, ejeY) {
		this.get.boxCenter().move({ deltaX: ejeX, deltaY: ejeY });
	}
	//posición actual del objeto left
	getObjectTop() {
		return this.get
			.boxTop()
			.invoke('attr', 'style')
			.then(style => {
				return style;
			});
	}
	//movimiento boxTop
	moveBoxTop(ejeX, ejeY) {
		this.get.boxTop().move({ deltaX: ejeX, deltaY: ejeY });
	}
	//posición actual del objeto cursor
	getObjectCursor() {
		return this.get
			.boxCursor()
			.invoke('attr', 'style')
			.then(style => {
				return style;
			});
	}
	//movimiento boxCursor
	moveBoxCursor(ejeX, ejeY) {
		this.get.boxCursor().move({ deltaX: ejeX, deltaY: ejeY });
	}
}
export const Dragabble = new dragabble();
