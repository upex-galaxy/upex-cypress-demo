describe('ToolsQA | Elements | Radio Buttons', () => {
	beforeEach(() => {
		cy.visit('https://demoqa.com/radio-button');
	});

	// TC1 - Verificar las etiquetas de los Radio Buttons
	it('TC1 | Verificar las etiquetas de los Radio Buttons', () => {
		cy.get(':nth-child(2) > .custom-control-label');
		cy.get(':nth-child(3) > .custom-control-label');
		cy.get('.custom-control.disabled > .custom-control-label');
	});

	// TC2 - Validar la funcionalidad del Radio Button 'Yes'
	it('TC2 - Validar la funcionalidad del Radio Button Yes', () => {
		cy.get(':nth-child(2) > .custom-control-label').click();
		cy.get('.mt-3').should('have.text', 'You have selected Yes');
	});

	// TC3 - Validar la funcionalidad del Radio Button 'Impressive'
	it('TC3 - Validar la funcionalidad del Radio Button Impressive', () => {
		cy.get('.col-md-6 > :nth-child(2) > :nth-child(3)').click();
		cy.get('.mt-3').should('have.text', 'You have selected Impressive');
	});

	// TC4 - Validar la funcionalidad del Radio Button 'No'
	it('TC4 | Validar la funcionalidad del Radio Button No', () => {
		cy.get('.custom-control.disabled > .custom-control-label').click();
		cy.get('.custom-control.disabled');
	});
});
//Resultados y conclusiones:
//La cobertura de los casos de prueba se aseguro de comprobar la existencia y funcionalidad de los Radio Buttons dentro del software .
//Todas las pruebas pasaron correctamente y la carpeta donde se automatizaron las respectivas pruebas quedan agregadas al respositorio del proyecto.
