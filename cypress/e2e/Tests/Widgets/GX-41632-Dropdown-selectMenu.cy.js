import { faker } from '@faker-js/faker';
import data from '@data/Widgets/GX-41632-Dropdown-SelectMenu.json';
import { selectMenuPage } from '@pages/Widgets/GX-41632-Dropdown-selectMenu.page';

describe('GX-41632|ToolsQA | Widgets | Dropdown - Select Menu', () => {
	beforeEach('PRC: visitar la pagina de ToolsQA-Select Menu', () => {
		cy.visit('/select-menu');
		cy.url().should('contain', 'select-menu');
	});

	it('41632 | TC1: validar la funcionalidad del dropdown Select Value.', () => {
		const randomSelectValue = faker.datatype.number({ min: 1, max: 4 });
		const randomValue = faker.datatype.number({ min: 1, max: 2 });
		selectMenuPage.clickSelectValue();
		if (randomSelectValue === 1) {
			if (randomValue == 1) {
				selectMenuPage.selectValueGroup1Option1();
				selectMenuPage.get.selectValue().should('contain', data.selectValue.group1Option1);
			} else {
				selectMenuPage.selectValueGroup1Option2();
				selectMenuPage.get.selectValue().should('contain', data.selectValue.group1Option2);
			}
		}
		if (randomSelectValue === 2) {
			if (randomValue == 1) {
				selectMenuPage.selectValueGroup2Option1();
				selectMenuPage.get.selectValue().should('contain', data.selectValue.group2Option1);
			} else {
				selectMenuPage.selectValueGroup2Option2();
				selectMenuPage.get.selectValue().should('contain', data.selectValue.group2Option2);
			}
		}
		if (randomSelectValue === 3) {
			selectMenuPage.selectValueRootOption();
			selectMenuPage.get.selectValue().should('contain', data.selectValue.rootOption);
		}
		if (randomSelectValue === 4) {
			selectMenuPage.selectValueAnotherRootOption();
			selectMenuPage.get.selectValue().should('contain', data.selectValue.anotherRootOption);
		}
	});
	it('41632 | TC2: validar la funcionalidad del dropdown Select One.', () => {
		const randomDropdownSelectOne = faker.datatype.number({ min: 0, max: 5 });
		selectMenuPage.clickSelectOne();
		if (randomDropdownSelectOne === 0) {
			selectMenuPage.selectOneDr();
			selectMenuPage.get.selectOne().should('contain', data.selectOne.Dr);
		}
		if (randomDropdownSelectOne === 1) {
			selectMenuPage.selectOneMr();
			selectMenuPage.get.selectOne().should('contain', data.selectOne.Mr);
		}
		if (randomDropdownSelectOne === 2) {
			selectMenuPage.selectOneMrs();
			selectMenuPage.get.selectOne().should('contain', data.selectOne.Mrs);
		}
		if (randomDropdownSelectOne === 3) {
			selectMenuPage.selectOneMs();
			selectMenuPage.get.selectOne().should('contain', data.selectOne.Ms);
		}
		if (randomDropdownSelectOne === 4) {
			selectMenuPage.selectOneProf();
			selectMenuPage.get.selectOne().should('contain', data.selectOne.Prof);
		}
		if (randomDropdownSelectOne === 5) {
			selectMenuPage.selectOneOther();
			selectMenuPage.get.selectOne().should('contain', data.selectOne.Other);
		}
	});
	it('41632 | TC3: validar la funcionalidad del dropdown Old Style Select Menu', () => {
		const randomOldSelectMenu = faker.datatype.number({ min: 0, max: 10 });
		selectMenuPage.clickOldSelectMenu(randomOldSelectMenu);
		selectMenuPage.get.selectOldMenu().should('contain', data.oldStyleMenu[randomOldSelectMenu]);
	});
	it('41632 | TC4: validar la funcionalidad del Multiselect dropdown', () => {
		const randomMultiSelect = faker.datatype.number({ min: 0, max: 12 });
		selectMenuPage.clickMultiSelectDropdown();
		if (randomMultiSelect === 0) {
			selectMenuPage.multiSelectGreen();
			cy.get('[class$="multiValue"]').eq(2).should('contain', data.multiSelectDropdown.green);
		}
		if (randomMultiSelect === 1) {
			selectMenuPage.multiSelectBlue();
			cy.get('[class$="multiValue"]').should('contain', data.multiSelectDropdown.blue);
		}
		if (randomMultiSelect === 2) {
			selectMenuPage.multiSelectBlack();
			cy.get('[class$="multiValue"]').should('contain', data.multiSelectDropdown.black);
		}
		if (randomMultiSelect === 3) {
			selectMenuPage.multiSelectRed();
			cy.get('[class$="multiValue"]').should('contain', data.multiSelectDropdown.red);
		}
		if (randomMultiSelect === 4) {
			selectMenuPage.multiSelectGreen();
			selectMenuPage.multiSelectBlue();
			cy.get('[class$="multiValue"]').should('contain', data.multiSelectDropdown.green) &&
				cy.get('[class$="multiValue"]').should('contain', data.multiSelectDropdown.blue);
		}
		if (randomMultiSelect === 5) {
			selectMenuPage.multiSelectGreen();
			selectMenuPage.multiSelectBlack();
			cy.get('[class$="multiValue"]').should('contain', data.multiSelectDropdown.green) &&
				cy.get('[class$="multiValue"]').should('contain', data.multiSelectDropdown.back);
		}
		if (randomMultiSelect === 6) {
			selectMenuPage.multiSelectGreen();
			selectMenuPage.multiSelectRed();
			cy.get('[class$="multiValue"]').should('contain', data.multiSelectDropdown.green) &&
				cy.get('[class$="multiValue"]').should('contain', data.multiSelectDropdown.red);
		}
		if (randomMultiSelect === 7) {
			selectMenuPage.multiSelectBlue();
			selectMenuPage.multiSelectBlack();
			cy.get('[class$="multiValue"]').should('contain', data.multiSelectDropdown.blue) &&
				cy.get('[class$="multiValue"]').should('contain', data.multiSelectDropdown.black);
		}
		if (randomMultiSelect === 8) {
			selectMenuPage.multiSelectBlue();
			selectMenuPage.multiSelectRed();
			cy.get('[class$="multiValue"]').should('contain', data.multiSelectDropdown.blue) &&
				cy.get('[class$="multiValue"]').should('contain', data.multiSelectDropdown.red);
		}
		if (randomMultiSelect === 9) {
			selectMenuPage.multiSelectGreen();
			selectMenuPage.multiSelectBlue();
			selectMenuPage.multiSelectBlack();
			cy.get('[class$="multiValue"]').should('contain', data.multiSelectDropdown.green) &&
				cy.get('[class$="multiValue"]').should('contain', data.multiSelectDropdown.blue) &&
				cy.get('[class$="multiValue"]').should('contain', data.multiSelectDropdown.black);
		}
		if (randomMultiSelect === 10) {
			selectMenuPage.multiSelectBlue();
			selectMenuPage.multiSelectBlack();
			selectMenuPage.multiSelectRed();
			cy.get('[class$="multiValue"]').should('contain', data.multiSelectDropdown.blue) &&
				cy.get('[class$="multiValue"]').should('contain', data.multiSelectDropdown.black) &&
				cy.get('[class$="multiValue"]').should('contain', data.multiSelectDropdown.red);
		}
		if (randomMultiSelect === 11) {
			selectMenuPage.multiSelectGreen();
			selectMenuPage.multiSelectRed();
			selectMenuPage.multiSelectBlack();
			cy.get('[class$="multiValue"]').should('contain', data.multiSelectDropdown.green) &&
				cy.get('[class$="multiValue"]').should('contain', data.multiSelectDropdown.red) &&
				cy.get('[class$="multiValue"]').should('contain', data.multiSelectDropdown.black);
		}
		if (randomMultiSelect === 12) {
			selectMenuPage.multiSelectGreen();
			selectMenuPage.multiSelectBlue();
			selectMenuPage.multiSelectBlack();
			selectMenuPage.multiSelectRed();
			cy.get('[class$="multiValue"]').should('contain', data.multiSelectDropdown.green) &&
				cy.get('[class$="multiValue"]').should('contain', data.multiSelectDropdown.blue) &&
				cy.get('[class$="multiValue"]').should('contain', data.multiSelectDropdown.black) &&
				cy.get('[class$="multiValue"]').should('contain', data.multiSelectDropdown.red);
		}
	});
	it('41632 | TC5: validar la funcionalidad de Standard multi select', () => {
		const randomStandarMultiSelect = faker.datatype.number({ min: 0, max: 3 });
		selectMenuPage.clickStandarMultiSelect(randomStandarMultiSelect);
		selectMenuPage.get.standarMultiSelect().should('contain', data.standarMultiSelect[randomStandarMultiSelect]);
	});
});
