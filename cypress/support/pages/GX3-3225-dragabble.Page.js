class dragabble {

	constructor() {
		this.dragSimple = '#draggableExample-tab-simple';
		this.dragAxis = '#draggableExample-tab-axisRestriction';
		this.dragContainer = '#draggableExample-tab-containerRestriction';
		this.dragCursor = '#draggableExample-tab-cursorStyle';
   		this.dragBoxSelector = '#dragBox';		
		this.dragOnlyX = '#restrictedX';
		this.dragOnlyY = '#restrictedY';
  	}

	//TC1
  	getInitialPosition() {
		return cy.get(this.dragBoxSelector).then($dragBox => {
			const position = $dragBox.offset();
			return { x: position.left, y: position.top };
		});
  	}
	dragElement(){
		const xRandom = Math.floor(Math.random() * 500);
		const yRandom = Math.floor(Math.random() * 500);
		cy.get(this.dragBoxSelector).move({ deltaX: xRandom, deltaY: yRandom },{ force: true });	  
	}

	//TC2
	getInitialPositionAxis() {
		return cy.get(this.dragOnlyX).then($dragBox => {
			const position = $dragBox.offset();
			return { x: position.left, y: position.top };
		});
  	}
	dragElementAxisX(){
		let yInicial;
		cy.get(this.dragOnlyX).then($dragBox => {
			const position = $dragBox.offset();
			yInicial  = position.top;
			const xRandom = Math.floor(Math.random() * 500);
			cy.get(this.dragOnlyX).move({ deltaX: xRandom, deltaY: yInicial },{ force: true });
		});			  
	}

	//TC3
	getInitialPositionAxisY() {
		return cy.get(this.dragOnlyY).then($dragBox => {
			const position = $dragBox.offset();
			return { x: position.left, y: position.top };
		});
  	}
	dragElementAxisY(){
		let xInicial;
		cy.get(this.dragOnlyY).then($dragBox => {
			const position = $dragBox.offset();
			xInicial  = position.left;
			const yRandom = Math.floor(Math.random() * 500);
			cy.get(this.dragOnlyY).move({ deltaX: xInicial, deltaY: yRandom },{ force: true });
		});			  
	}
}
export const pageDragabble= new dragabble();