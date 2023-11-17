import selectMenu from '@pages/Widgets/GX3-440-SelecMenu.page.js';

describe('GX3-440 | ToolsQA | Widgets | selectMenu - Select Menu', () => {
	beforeEach('Precondition: Visit website DemoQA', () => {
		cy.visit('https://demoqa.com/select-menu');
	});

	it.only('440 | TC1: Validate dropdown "Select Value" by select each one.', () => {
		cy.fixture('/data/Widgets/GX3-440-SelecMenu.json').then(data => {
			selectMenu.clickSelectValue();
			selectMenu.get.optionA().should('have.text', data.selectValue.group1.OptionA);
			selectMenu.get.optionB().should('have.text', data.selectValue.group1.OptionB);
			selectMenu.get.optionC().should('have.text', data.selectValue.group2.OptionC);
			selectMenu.get.optionD().should('have.text', data.selectValue.group2.OptionD);
			selectMenu.get.optionF().should('have.text', data.selectValue.outOfGroup.OptionF);
			selectMenu.get.optionE().should('have.text', data.selectValue.outOfGroup.optionE);
		});
	});

	it('440 | TC2: Validate dropdown "Select Value" by selecting a random one.', () => {
		// Hacer clic en el menú desplegable "Select Value"
		selectMenu.clickSelectValue();
		// Obtener todas las opciones del menú
		selectMenu.get.allOptionsSelectValue().then(options => {
			// Obtener la longitud de las opciones
			const max = options.length - 1;
			// Seleccionar una opción aleatoria
			const randomIndex = Cypress._.random(0, max);
			options.eq(randomIndex).click();
			// Verificar que la opción seleccionada contenga el texto 'option'
			selectMenu.get.valueSelectedSelectValue().should('contain.text', 'option');
		});
	});

	it('440 | TC3: Validate show message "No options" when the type text not match in selectMenu "Select Value"', () => {
		cy.fixture('ruta/a/tu/fixture.json').then(data => {
			// Iniciar la acción de escribir texto en el campo de selección
			selectMenu.typeSelectValue('Hola');
			// Verificar que el mensaje mostrado sea el esperado desde el fixture
			selectMenu.get.inputInvalidSelectValue().should('have.text', data.selectValue.messageSelectValue);
		});
	});

	it('440 | TC4: Validate dropdown "Select One" by selecting each option.', () => {
		// Acceder al menú desplegable "Select One"
		selectMenu.containerSelectOne().click();
		// Obtener todas las opciones del menú "Select One" desde el fixture
		cy.fixture('/data/Widgets/GX3-440-SelecMenu.json').then(data => {
			const options = data.selectOne.options;
			// Iterar sobre cada opción
			options.forEach(optionText => {
				// Seleccionar la opción por su texto
				selectMenu.containerSelectOne().select(optionText);
				// Verificar que la opción seleccionada tenga el texto correcto
				selectMenu.valueSelectedSelectOne().should('have.text', optionText);
			});
		});
	});
});
import { removeLogs } from '@helper/RemoveLogs';
import { any } from 'cypress/types/bluebird';
removeLogs();
/*
440 | TC1: Validate dropdown "Select Value" by select each one.
440 | TC2: Validate dropdown "Select Value" by selecting a random one.
440 | TC3: Validate show massage "No options" when the type text not match in selectMenu "Select Value"
440 | TC4: Validate dropdown "Select One" by selecting a random one
440 | TC5: Validate show massage "No options" when the type text not match in selectMenu "Select One"
440 | TC6: Validate dropdown "Old Style Select Menu" by selecting a random one.
440 | TC7: Validate dropdown "Multiselect drop down" by selecting a random one.
440 | TC8: Validate dropdown "Multiselect drop down" by selecting a random two.
440 | TC9: Validate dropdown "Multiselect drop down" by selecting a random three.
440 | TC10: Validate dropdown "Multiselect drop down" by selecting all four.
440 | TC11: Validate show massage "No options" when the type text not match in selectMenu "Multiselect drop down"
440 | TC12: Validate dropdown "Standard multi select" by selecting a random one.
*/
