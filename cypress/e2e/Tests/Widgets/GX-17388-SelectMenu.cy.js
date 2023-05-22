describe('✅ToolsQA | Widgets | Dropdown - Select Menu', () => {
	beforeEach('Precondicion: Usuario se situa en la pagina select menu', () => {
		cy.fixture('data/SelectMenu.data').then(the => {
			cy.visit(the.url.MainUrl);
			cy.url().should('contain', 'select-menu');
		});
	});

	it('17389 | TC01 - Validar seleccionar una opción de “Group 1” de la lista “Select Value“', () => {
		cy.fixture('data/SelectMenu.data').then(the => {
			cy.get(the.input.SelectValue).click();
			cy.contains(the.selectValue.ValueGroup1).click();

			cy.get(the.assertions.SelectValue).should('contain', 'Group 1, option 2');
		});
	});

	it.only('17389 | TC02 - Validar seleccionar una opción de “Group 2” de la lista “Select Value“', () => {
		cy.fixture('data/SelectMenu.data').then(the => {
			cy.get(the.input.SelectValue).click();
			cy.contains(the.selectValue.ValueGroup2).click();

			cy.get(the.assertions.SelectValue).should('contain', 'Group 2, option 1');
		});
	});

	it('17389 | TC03 - Validar seleccionar una opción de la lista “Select One“', () => {
		cy.fixture('data/SelectMenu.data').then(the => {
			cy.get(the.input.SelectOne).click();
			cy.contains(the.selectOne.Value).click();

			cy.get(the.assertions.SelectOne).should('contain', 'Prof');
		});
	});

	it('17389 | TC04 - Validar seleccionar una opción de la lista “Old Style Select Menu“', () => {
		cy.fixture('data/SelectMenu.data').then(the => {
			cy.get(the.input.SelectMenu).find(the.selectMenu.ValueBlack).click({ force: true });

			cy.get(the.assertions.SelectMenu).should('contain', 'Black');
		});
	});

	it('17389 | TC05 - Validar seleccionar una opción de la lista “Multiselect drop down“', () => {
		cy.fixture('data/SelectMenu.data').then(the => {
			cy.get('.css-2b097c-container').eq(2).click();
			cy.get('.css-2b097c-container').eq(2).type(the.multiselectDropdown.ValueBlack);

			cy.get(the.assertions.MultiselectDropdown).should('contain', 'Black');
		});
	});

	it('17389 | TC06 - Validar seleccionar todas las opciones de la lista “Multiselect drop down“', () => {
		cy.fixture('data/SelectMenu.data').then(the => {
			cy.get('.css-2b097c-container').eq(2).click();
			cy.get('.css-2b097c-container')
				.eq(2)
				.type(the.multiselectDropdown.ValueBlack)
				.type(the.multiselectDropdown.ValueBlue)
				.type(the.multiselectDropdown.ValueGreen)
				.type(the.multiselectDropdown.ValueRed);

			cy.get('.css-2b097c-container').eq(2).should('contain', 'No options');
		});
	});

	it('17389 | TC07 - Validar seleccionar una opción de la lista “Standard multi select“', () => {
		cy.fixture('data/SelectMenu.data').then(the => {
			cy.get(the.input.MultiselectStandard).select(the.multiselectStandard.ValueVolvo);

			cy.contains(the.assertions.MultiselectStandard.ValueVolvo).should('be.selected');
		});
	});

	it('17389 | TC08 - Validar seleccionar todas las opciones de la lista “Standard multi select“', () => {
		cy.fixture('data/SelectMenu.data').then(the => {
			cy.get(the.input.MultiselectStandard)
				.select([
					the.multiselectStandard.ValueVolvo,
					the.multiselectStandard.ValueSaab,
					the.multiselectStandard.ValueOpel,
					the.multiselectStandard.ValueAudi,
				])
				.invoke('val');

			cy.contains(the.assertions.MultiselectStandard.ValueVolvo).should('be.selected');
			cy.contains(the.assertions.MultiselectStandard.ValueSaab).should('be.selected');
			cy.contains(the.assertions.MultiselectStandard.ValueOpel).should('be.selected');
			cy.contains(the.assertions.MultiselectStandard.ValueAudi).should('be.selected');
		});
	});
});
import { removeLogs } from '@helper/RemoveLogs';
removeLogs();
