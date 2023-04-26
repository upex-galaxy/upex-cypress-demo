import { removeLogs } from '@helper/RemoveLogs';
removeLogs();

//import { e } from '@pages/ElementDynamicId.Page.js';

//const timeValue = 5000;
//selectors
const multiSelect = '#react-select-4-input';
const standardSelect = '#cars';
const selectValue = '#withOptGroup';
const selectOne = '#selectOne';
const oldStyle = '#oldSelectMenu';
//vars
//options
const selectValueOptions = '#react-select-2-option-0-0';
const multiOptions = 'Green';
const standardOptions = ['volvo', 'audi'];
const selectOneOptions = '#react-select-3-option-0-0';
const oldStyleOptions = 'red';
//defaults
const have = 'have.value';
const forced = { force: true };

const URL = 'https://demoqa.com/select-menu';

describe('✅ US GX-14236 | TS: ✅ToolsQA | Elements | Dynamic Properties', () => {
	beforeEach(() => {
		cy.visit(URL);
	});
	it('14245 | TC01: Validar seleccionar una opción correctamente al hacer hacer click en cada uno de los Dropdowns (Select Value, Select One, Old Style, Multiselect, Standard)', () => {
		cy.get(multiSelect).select(multiOptions, forced);
		cy.get(standardSelect); //.should(standardOptions);
		cy.get(selectValue); //.should(selectValueOptions);
		cy.get(selectOne); //.should(selectOneOptions);
		cy.get(oldStyle); //.should(oldStyleOptions).click();
	});

	it.only('14245 | TC02: Validar seleccionar todas las opciones correctamente al hacerles click en el dropdown de Multiselect drop down', () => {
		cy.log();
		cy.get('div[class*="indicatorContainer"] [class]').last().click();
		cy.get('[class$="menu"]').within(() => {
			cy.get('[id*="react-select-4"]').each($el => {
				cy.wrap($el).click();
			});
		});

		//cy.get(multiSelect).should(have, '2');
	});

	it('14245 | TC03: Validar seleccionar más de una opción correctamente al hacerles click en el dropdown de Stantdard multi select', () => {
		cy.get(standardSelect).select(standardOptions, forced);
		cy.get(standardSelect).should(have, standardOptions);
	});
});

//________________________________________________________________________
