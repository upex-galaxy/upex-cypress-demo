import { selectMenuPage } from '../../../support/pages/GX3-3030-SelectMenu.Page';

describe('ToolsQA | Widgets | Dropdown - Select Menu', () => {
	beforeEach('PRC: El usuario se encuentra en el endpoint /select-menu', () => {
		cy.visit('https://demoqa.com/select-menu');
		cy.url().should('contain', 'select-menu');
	});

	it('GX3-3031 | TC1: Validar que se pueda seleccionar un elemento del menú Select Value', () => {
		let selectedOptionText;
		selectMenuPage.clickSelectValueMenu();
		selectMenuPage.getSelectValueMenuCount().then(async count => {
			const randomIndex = Math.floor(Math.random() * count);
			const randomOption = selectMenuPage.getMenuItemByIndex(randomIndex);
			selectMenuPage.getMenuItemByText(randomIndex).then(randomText => {
				selectedOptionText = randomText;
			});
			randomOption.click();
			selectMenuPage.getSelectedMenuItemText().then(text => {
				expect(selectedOptionText).to.equal(text);
			});
		});
	});

	it('GX3-3031 | TC2: Validar que se pueda seleccionar un elemento del menú Select One', () => {
		let selectedOptionText;
		selectMenuPage.clickSelectOneMenu();
		selectMenuPage.getSelectOneMenuCount().then(async count => {
			const randomIndex = Math.floor(Math.random() * count);
			const randomOption = selectMenuPage.getOneMenuItemByIndex(randomIndex);
			selectMenuPage.getOneMenuItemByText(randomIndex).then(randomText => {
				selectedOptionText = randomText;
			});
			randomOption.click();
			selectMenuPage.getSelectedMenuItemText().then(text => {
				expect(selectedOptionText).to.equal(text);
			});
		});
	});

	it('GX3-3031 | TC3: Validar que se pueda seleccionar un elemento del menú Old Style Select Menu', () => {
		const randomIndex = Math.floor(Math.random() * 11);
		selectMenuPage.getOldMenuItemByIndex(randomIndex);
		selectMenuPage.getOldSelectedText().then(text => {
			cy.contains(text).should('exist');
		});
	});

	it('GX3-3031 | TC4: Validar que se pueda seleccionar un elemento del menú Multiselect Drop Down', () => {
		selectMenuPage.clickSelectMultiselect();
		selectMenuPage.containerDropdown(4).then(colors => {
			cy.wrap(colors).each(element => {
				cy.wrap(element).click();

			});
		});

		selectMenuPage.multiSelectColors().then(colors => {
			const totalElements = colors.length;
			expect(totalElements).to.equal(totalElements);
			selectMenuPage.messageOptions().should('be.visible').should('include.text', 'No options');

		});
	});

	it('GX3-3031 | TC5: Validar la selección de múltiples opciones del menú Standard Multi Select', () => {
		selectMenuPage.selectCars();
		selectMenuPage.multiSelectCars().invoke('val').should('deep.equal', ['volvo', 'opel']);

	});
});
