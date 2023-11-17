import SelectMenu from 'cypress/support/pages/Widgets/GX3-440-SelecMenu.page.js';

describe('GX3-440 | ToolsQA | Widgets | SelectMenu - Select Menu', () => {
	beforeEach('Precondition: Visit website DemoQA', () => {
		cy.visit('https://demoqa.com/select-menu');
	});

	it('440 | TC1: Validate dropdown "Select Value" by select each one.', () => {
		cy.fixture('/data/Widgets/GX3-440-SelecMenu.json').then(data => {
			SelectMenu.clickSelectValue();
			SelectMenu.get.optionA().should('have.text', data.selectValue.group1.OptionA);
			SelectMenu.get.optionB().should('have.text', data.selectValue.group1.OptionB);
			SelectMenu.get.optionC().should('have.text', data.selectValue.group2.OptionC);
			SelectMenu.get.optionD().should('have.text', data.selectValue.group2.OptionD);
			SelectMenu.get.optionF().should('have.text', data.selectValue.outOfGroup.OptionF);
			SelectMenu.get.optionE().should('have.text', data.selectValue.outOfGroup.optionE);
		});
	});

	it('440 | TC2: Validate dropdown "Select Value" by selecting a random one.', () => {
		// Hacer clic en el menú desplegable "Select Value"
		SelectMenu.clickSelectValue();
		// Obtener todas las opciones del menú
		SelectMenu.get.allOptionsSelectValue().then(options => {
			// Obtener la longitud de las opciones
			const max = options.length - 1;
			// Seleccionar una opción aleatoria
			const randomIndex = Cypress._.random(0, max);
			options.eq(randomIndex).click();
			// Verificar que la opción seleccionada contenga el texto 'option'
			SelectMenu.get.valueSelectedSelectValue().should('contain.text', 'option');
		});
	});

	it('440 | TC3: Validate show message "No options" when the type text not match in SelectMenu "Select Value"', () => {
		cy.fixture('ruta/a/tu/fixture.json').then(data => {
			// Iniciar la acción de escribir texto en el campo de selección
			SelectMenu.typeSelectValue('Hola');
			// Verificar que el mensaje mostrado sea el esperado desde el fixture
			SelectMenu.get.inputInvalidSelectValue().should('have.text', data.selectValue.messageSelectValue);
		});
	});

	it('440 | TC4: Validate dropdown "Select One" by selecting each option.', () => {
		// Acceder al menú desplegable "Select One"
		SelectMenu.containerSelectOne().click();
		// Obtener todas las opciones del menú "Select One" desde el fixture
		cy.fixture('/data/Widgets/GX3-440-SelecMenu.json').then(data => {
			const options = data.selectOne.options;
			// Iterar sobre cada opción
			options.forEach(optionText => {
				// Seleccionar la opción por su texto
				SelectMenu.containerSelectOne().select(optionText);
				// Verificar que la opción seleccionada tenga el texto correcto
				SelectMenu.valueSelectedSelectOne().should('have.text', optionText);
			});
		});
	});
});

/*
440 | TC1: Validate dropdown "Select Value" by select each one.
440 | TC2: Validate dropdown "Select Value" by selecting a random one.
440 | TC3: Validate show massage "No options" when the type text not match in SelectMenu "Select Value"
440 | TC4: Validate dropdown "Select One" by selecting a random one
440 | TC5: Validate show massage "No options" when the type text not match in SelectMenu "Select One"
440 | TC6: Validate dropdown "Old Style Select Menu" by selecting a random one.
440 | TC7: Validate dropdown "Multiselect drop down" by selecting a random one.
440 | TC8: Validate dropdown "Multiselect drop down" by selecting a random two.
440 | TC9: Validate dropdown "Multiselect drop down" by selecting a random three.
440 | TC10: Validate dropdown "Multiselect drop down" by selecting all four.
440 | TC11: Validate show massage "No options" when the type text not match in SelectMenu "Multiselect drop down"
440 | TC12: Validate dropdown "Standard multi select" by selecting a random one.
*/
