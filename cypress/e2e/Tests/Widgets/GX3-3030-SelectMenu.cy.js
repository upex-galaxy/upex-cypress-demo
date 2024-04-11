import datosFixture from 'cypress/fixtures/data/Widgets/GX3-3030-SelectMenu.json';
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
});
