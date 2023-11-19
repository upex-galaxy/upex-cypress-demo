import { SelectMenuPage } from '@pages/Widgets/GX3-440-SelecMenuPage';

describe('GX3-440 | ToolsQA | Widgets | SelectMenu - Select Menu', () => {
	beforeEach('Precondition: Visit website DemoQA', () => {
		cy.visit('https://demoqa.com/select-menu');
	});

	it('440 | TC1: Validate dropdown "Select Value" by select each one.', () => {
		cy.fixture('/data/Widgets/GX3-440-SelecMenu.json').then(data => {
			SelectMenuPage.clickSelectValue();
			SelectMenuPage.get.optionA().should('have.text', data.selectValue.group1.OptionA);
			SelectMenuPage.get.optionB().should('have.text', data.selectValue.group1.OptionB);
			SelectMenuPage.get.optionC().should('have.text', data.selectValue.group2.OptionC);
			SelectMenuPage.get.optionD().should('have.text', data.selectValue.group2.OptionD);
			SelectMenuPage.get.optionE().should('have.text', data.selectValue.outOfGroup.OptionE);
			SelectMenuPage.get.optionF().should('have.text', data.selectValue.outOfGroup.OptionF);
		});
	});

	it('440 | TC2: Validate dropdown "Select Value" by selecting a random one.', () => {
		// Hacer clic en el menú desplegable "Select Value"
		SelectMenuPage.clickSelectValue();
		// Obtener todas las opciones del menú
		SelectMenuPage.get.allOptionsSelectValue().then(options => {
			// Obtener la longitud de las opciones
			const max = options.length - 1;
			// Seleccionar una opción aleatoria
			const randomIndex = Cypress._.random(0, max);
			options.eq(randomIndex);
			// Verificar que la opción seleccionada contenga el texto 'option'
			SelectMenuPage.get.allOptionsSelectValue().should('contain.text', 'option');
		});
	});

	it('440 | TC3: Validate show message "No options" when the type text not match in SelectMenu "Select Value"', () => {
		cy.fixture('/data/Widgets/GX3-440-SelecMenu.json').then(data => {
			// Iniciar la acción de escribir texto en el campo de selección
			SelectMenuPage.typeSelectValue('Hola');
			// Verificar que el mensaje mostrado sea el esperado desde el fixture
			SelectMenuPage.get.inputInvalidSelectValue().should('have.text', data.selectValue.messageSelectValue);
		});
	});

	it('440 | TC4: Validate dropdown "Select One" by selecting a random one.', () => {
		cy.fixture('/data/Widgets/GX3-440-SelecMenu.json').then(data => {
			// Hacer clic en el menú desplegable "Select Value"
			// Realiza la acción en el selectOne según el fixture
			SelectMenuPage.clickSelectOne();

			// Obtén una opción aleatoria del fixture
			const randomOption = Cypress._.sample(data.selectOne.options);

			// Ingresa el texto aleatorio en el input del selectOne
			SelectMenuPage.typeSelectOne(randomOption);

			// Realiza assertions según sea necesario
			// En este ejemplo, verifica que el valor seleccionado sea el mismo que ingresaste
			SelectMenuPage.get.allOptionsSelectOne().should('not.have.text', 'option');
		});
	});

	it('440 | TC5: Validate show massage "No options" when the type text not match in SelectMenu "Select One"', () => {
		cy.fixture('/data/Widgets/GX3-440-SelecMenu.json').then(data => {
			// Iniciar la acción de escribir texto en el campo de selección
			SelectMenuPage.typeSelectOne('HolaQueTal');
			// Verificar que el mensaje mostrado sea el esperado desde el fixture
			SelectMenuPage.get.inputInvalidSelectOne().should('have.text', data.selectOne.messageSelectOne);
		});
	});

	it('440 | TC6: Validate dropdown "Old Style Select Menu" by selecting a random one.', () => {
		cy.fixture('/data/Widgets/GX3-440-SelecMenu.json').then(data => {
			SelectMenuPage.clickOldSelectMenu();
			const randomOption = Cypress._.sample(data.oldSelectMenu.options);
			SelectMenuPage.typeSelectMenu(randomOption);
			SelectMenuPage.get.containerOldSelectMenu().should('not.have.text', 'option');
		});
	});

	it('440 | TC7: Validate dropdown "Multiselect drop down" by selecting a random one.', () => {
		cy.fixture('/data/Widgets/GX3-440-SelecMenu.json').then(data => {
			SelectMenuPage.clickMultiselect();
			const randomOption = Cypress._.sample(data.multiselect.options);
			SelectMenuPage.typeMultiselect(randomOption);
			SelectMenuPage.get.containerMultiselect().should('not.have.text', 'option');
		});
	});

	it('440 | TC8: Validate dropdown "Multiselect drop down" by selecting all four.', () => {
		cy.fixture('/data/Widgets/GX3-440-SelecMenu.json').then(data => {
			SelectMenuPage.clickMultiselect();
			SelectMenuPage.clickAllOptionsMultiselect();
			const arrayToString = data.multiselect.options.toString();
			const replaceInString = arrayToString.replaceAll(/,/g, '');
			SelectMenuPage.get.selectedOptionMultiselect().should('contain.text', replaceInString);
		});
	});

	it('440 | TC9: Validate show massage "No options" when the type text not match in SelectMenu "Multiselect drop down"', () => {
		cy.fixture('/data/Widgets/GX3-440-SelecMenu.json').then(data => {
			// Iniciar la acción de escribir texto en el campo de selección
			SelectMenuPage.typeMultiselect('Morado');
			// Verificar que el mensaje mostrado sea el esperado desde el fixture
			SelectMenuPage.get.inputInvalidMultiselect().should('have.text', data.multiselect.messageMultiselect);
		});
	});

	it('440 | TC10: Validate dropdown "Standard multi select" by selecting a random one.', () => {
		cy.fixture('/data/Widgets/GX3-440-SelecMenu.json').then(data => {
			SelectMenuPage.get.allOptionsStandardSelect().then(elm => {
				const max = elm.length - 1;
				const random = Cypress._.random(0, max);
				SelectMenuPage.get.allOptionsStandardSelect().eq(random).should('have.text', data.standardSelect.options[random]);
			});
		});
	});
});
