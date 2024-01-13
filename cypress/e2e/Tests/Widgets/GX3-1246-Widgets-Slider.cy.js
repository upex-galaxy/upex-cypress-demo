describe('TS 1247: ToolsQA | Widgets | Slider', () => {
	beforeEach('Precondición: El usuario debe estar ubicado en la página de slider', () => {
		cy.visit('https://demoqa.com/slider');
		cy.url().should('contain', 'slider');
	});

	it('1247 | TC1: Validar que el slider tenga un valor original de 25', () => {
		cy.get('input[type=range]').should('be.visible');
		cy.get('input[type=range]').should('have.value', '25');
	});

	it('1247 | TC2: Validar que el rango del slider empiece en 0', () => {
		const valorSlider = 0;
		const valorStep = 30; //Indicamos que tendremos un step de 30

		cy.get('input[type="range"]')
			.then($element => $element[0].stepDown(valorStep)) //El atributo stepDown indica que el step del slider disminuirá, ejecutando la siguiente operación "25-30" obteniendo "-5", tomamos 25 porque es el valor inicial del slider
			.trigger('change');
		cy.get('input[type=range]').should('not.have.value', -5); //Validamos que el valor final del slider no es -5
		cy.get('input[type=range]').should('have.value', valorSlider); //Validamos que el valor del slider es 0
	});

	it('1247 | TC3: Validar que el rango del slider termine en 100', () => {
		const valorSlider = 100;
		const valorStep = 90; //Indicamos que tendremos un step de 90

		cy.get('input[type="range"]')
			.then($element => $element[0].stepUp(valorStep)) //El atributo stepUp indica que el step del slider aumentará, ejecutando la siguiente operación "25+90" obteniendo "115", tomamos 25 porque es el valor inicial del slider
			.trigger('change');
		cy.get('input[type=range]').should('not.have.value', 115); //Validamos que el valor final del slider no es 115
		cy.get('input[type=range]').should('have.value', valorSlider); //Validamos que el valor del slider es 100
	});

	it('1247 | TC4: Validar cambiar el valor actual del slider a 77', () => {
		const valorSlider = 77;
		cy.get('input[type=range]').invoke('val', valorSlider).trigger('change');
		cy.get('input[type=range]').should('have.value', valorSlider);
	});

	it('1247 | TC5: Validar cambiar el valor actual del slider a 11', () => {
		const valorSlider = 11;
		cy.get('input[type=range]').invoke('val', valorSlider).trigger('change');
		cy.get('input[type=range]').should('have.value', valorSlider);
	});

	it('1247 | TC6: Validar visualizar el valor actual en el input al mover el slider', () => {
		const valorSlider = 95;
		const valorStep = 95 - 25;

		cy.get('input[type="range"]')
			.then($element => $element[0].stepUp(valorStep))
			.trigger('change');
		cy.get('#sliderValue').should('have.value', valorSlider);
	});

	/**it('TC7: Validar NO poder editar el valor del slider a través del input', () => {
		const valorSlider = 11;
		cy.get('input[type=range]').invoke('val', valorSlider).trigger('change');
		cy.get('input[type=range]').should('have.value', valorSlider);
	});*/
});
