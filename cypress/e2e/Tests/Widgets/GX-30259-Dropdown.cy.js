import { dropDown } from '../../../support/pages/Widgets/GX-30259-Dropdown.Page';

describe('GX-30259 | TS: ✅ToolsQA | Widgets | Dropdown - Select Menu', () => {
	beforeEach('Precondition: Visit website DemoQA', () => {
		cy.visit('https://demoqa.com/select-menu');
	});
	it('30260 | TC01: Validate dropdown "Select Value" shows agrouped options', () => {
		cy.fixture('/data/GX-30259-Dropdown.json').then(data => {
			dropDown.clickSelectValue(); //click to active and show options
			dropDown.get.titleGroup1SelectValue().should('have.text', data.selectValue.group1.titleGroup1);
			dropDown.get.option1Group1SelectValue().should('have.text', data.selectValue.group1.option1);
			dropDown.get.option2Group1SelectValue().should('have.text', data.selectValue.group1.option2);
			dropDown.get.titleGroup2SelectValue().should('have.text', data.selectValue.group2.titleGroup2);
			dropDown.get.option1Group2SelectValue().should('have.text', data.selectValue.group2.option1);
			dropDown.get.option2Group2SelectValue().should('have.text', data.selectValue.group2.option2);
			dropDown.get.rootOptionSelectValue().should('have.text', data.selectValue.outOfGroup.value1);
			dropDown.get.anotherOptionSelectValue().should('have.text', data.selectValue.outOfGroup.value2);
		});
	});
	it('30260 | TC02: Validate choice random option in dropdown "Select Value"', () => {
		cy.fixture('/data/GX-30259-Dropdown.json').then(data => {
			dropDown.clickSelectValue(); //click to active and show options
			dropDown.get.allOptionsSelectValue().then(elm => {
				Cypress.env('longitud', elm.length);
				const max = Cypress.env('longitud') - 1;
				dropDown.get.allOptionsSelectValue().eq(Cypress._.random(0, max)).click();
				dropDown.get.valueSelectedSelectValue().should('contain.text', 'option');
			});
		});
	});
	it('30260 | TC03: Validate choice a random option in dropdown "Select One"', () => {
		cy.fixture('/data/GX-30259-Dropdown.json').then(data => {
			dropDown.clickSelectOne();
			dropDown.get.allOptionsSelectOne().then(elm => {
				Cypress.env('longitud', elm.length);
				const max = Cypress.env('longitud') - 1;
				const random = Cypress._.random(0, max);
				dropDown.get.allOptionsSelectOne().eq(random).click();
				dropDown.get.valueSelectedSelectOne().invoke('text').should('eq', data.selectOne.options[random]);
			});
		});
	});
	it('30260 | TC04: Validate show massage "No options" when the type text not match in dropdown "Select One"', () => {
		cy.fixture('/data/GX-30259-Dropdown.json').then(data => {
			dropDown.typeSelectOne('hola');
			dropDown.get.messageNoMatchSelectOne().should('have.text', data.selectOne.messageNoMatch);
		});
	});
	it('30260 | TC05: Validate choice a random option in dropdown "Old Style Select Menu"', () => {
		cy.fixture('/data/GX-30259-Dropdown.json').then(data => {
			dropDown.clickOldSelectMenu();
			dropDown.get.optionsOldSelectMenu().then(elm => {
				Cypress.env('longitud', elm.length);
				cy.log('longitud');
				const max = Cypress.env('longitud') - 1;
				cy.log(max);
				const random = Cypress._.random(0, max);
				cy.log(random);
				dropDown.get.containerOldSelectMenu().select(random);
				dropDown.get.containerOldSelectMenu().should('have.value', random);
			});
		});
	});
	it('30260 | TC06: Validate show "red" by default in "Old Style Select Menu"', () => {
		cy.fixture('/data/GX-30259-Dropdown.json').then(data => {
			dropDown.get.containerOldSelectMenu().should('have.value', data.oldSelectMenu.default);
		});
	});
	it('30260 | TC07: Validate no show a option when type incorrect value in dropdown "Multiselect drop down"', () => {
		cy.fixture('/data/GX-30259-Dropdown.json').then(data => {
			dropDown.typeMultiselect('Rojo');
			dropDown.get.noMatchMultiselect().should('have.text', data.multiselect.noMatch);
		});
	});
	it('30260 | TC08: Validate select all options in dropdown "Multiselect drop down"', () => {
		cy.fixture('/data/GX-30259-Dropdown.json').then(data => {
			dropDown.clickMultiselect();
			dropDown.clickAllOptionsMultiselect();
			const arrayToString = data.multiselect.options.toString();
			const replaceInString = arrayToString.replaceAll(/,/g, '');
			dropDown.get.selectedOptionMultiselect().should('contain.text', replaceInString);
		});
	});
	it('30260 | TC09: Validate select a random option in dropdown "Standard multi select"', () => {
		cy.fixture('/data/GX-30259-Dropdown.json').then(data => {
			dropDown.get.allOptionsStandardSelect().then(elm => {
				const max = elm.length - 1;
				const random = Cypress._.random(0, max);
				dropDown.get.allOptionsStandardSelect().eq(random).should('have.text', data.standardSelect.options[random]);
			});
		});
	});
	it('30260 | TC10: Validate select all option in dropdown "Standard multi select"', () => {
		cy.fixture('/data/GX-30259-Dropdown.json').then(data => {
			const arrayToString = data.standardSelect.options.toString();
			const replaceInString = arrayToString.replaceAll(/,/g, '');
			dropDown.get.containerStandardSelect().should('have.text', replaceInString);
		});
	});
});
import { removeLogs } from '@helper/RemoveLogs';
removeLogs();
