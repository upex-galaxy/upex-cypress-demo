class dragabble {
	get = {
		dragMe: () => cy.get('#dragBox'),
		tabAxisRestricted: () => cy.get('#draggableExample-tab-axisRestriction'),
		onlyX: () => cy.get('#restrictedX'),
		onlyY: () => cy.get('#restrictedY'),
		tabContainerRestricted: () => cy.get('#draggableExample-tab-containerRestriction'),
		theBox: () => cy.get('.draggable.ui-widget-content.ui-draggable.ui-draggable-handle'),
		theParents: () => cy.get('.draggable.ui-widget-content.m-3'),
		tabCursorStyle: () => cy.get('#draggableExample-tab-cursorStyle'),
		cursorCenter: () => cy.get('#cursorCenter'),
		cursorTopLeft: () => cy.get('#cursorTopLeft'),
		cursorBotton: () => cy.get('#cursorBottom')
	};
	
	dragToRandomPosition() {
		const dragMe = this.get.dragMe();
		dragMe.then(($el) => {//se utiliza una funcion "then() para acceder al elemento "Drag Me". se utiliza el elemento "$el" como parametro, para obtener las coordenadas para realizarse de manera asíncrona.
			const currentX = $el[ 0 ].getBoundingClientRect().left;//(obtienen las coordenadas actuales (posición izquierda y superior) del elemento "Drag me" en la página utilizando la función getBoundingClientRect(). 
			const currentY = $el[ 0 ].getBoundingClientRect().top;//Estas coordenadas se utilizan como punto de partida para el arrastre.)
			const maxX = Cypress.config().viewportWidth - $el.width();//(calculan las coordenadas máximas permitidas para el arrastre dentro del área visible de la ventana del navegador
			const maxY = Cypress.config().viewportHeight - $el.height();//Se restan las dimensiones del elemento para asegurarse de que el elemento no se arrastre fuera de la ventana.)
			const randomX = Math.floor(Math.random() * maxX);//Esto determina la posición final a la que se arrastrará el elemento "Drag me".
			const randomY = Math.floor(Math.random() * maxY);
			dragMe.trigger('mousedown', { which: 1, pageX: currentX, pageY: currentY });//simula el evento "mousedown" en el elemento "Drag me" en las coordenadas actuales para iniciar el arrastre.
			dragMe.trigger('mousemove', { which: 1, pageX: randomX, pageY: randomY });//Esto simula el movimiento del elemento durante el arrastre.
			dragMe.trigger('mouseup', { which: 1, pageX: randomX, pageY: randomY, force: true });// simula el evento "mouseup" en el elemento "Drag me" en las coordenadas aleatorias calculadas.
			cy.wait(1000);
		});
	}
	clickAxisRestricted(){
		this.get.tabAxisRestricted().click();
	}
}

export const Dragabble = new dragabble();