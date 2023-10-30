import { faker } from '@faker-js/faker';

describe('GX-41632|ToolsQA | Widgets | Dropdown - Select Menu', () => {
	beforeEach('PRC: visitar la pagina de ToolsQA-Select Menu', () => {
		cy.visit('/select-menu');
		cy.url().should('contain', 'select-menu');
	});

	it('41632 | TC1: validar la funcionalidad del dropdown Select Value.', () => {
		const randomSelectValue = faker.datatype.number({ min: 1, max: 4 });
		const randomValue = faker.datatype.number({ min: 1, max: 2 });
		cy.get('#withOptGroup').click();
		if (randomSelectValue === 1) {
			if (randomValue == 1) {
				cy.get('#react-select-2-option-0-0').click();
			} else {
				cy.get('#react-select-2-option-0-1').click();
			}
		}
		if (randomSelectValue === 2) {
			if (randomValue == 1) {
				cy.get('#react-select-2-option-1-0').click();
			} else {
				cy.get('#react-select-2-option-1-1').click();
			}
		}
		if (randomSelectValue === 3) {
			cy.get('#react-select-2-option-1-0').click();
		}
		if (randomSelectValue === 4) {
			cy.get('#react-select-2-option-3').click();
		}
	});
	it('41632 | TC2: validar la funcionalidad del dropdown Select One.', () => {
		const randomDropsownSelectOne = faker.datatype.number({ min: 0, max: 5 });
		cy.get('#selectOne').click();
		if (randomDropsownSelectOne === 0) {
			cy.get('#react-select-3-option-0-0').click();
		}
		if (randomDropsownSelectOne === 1) {
			cy.get('#react-select-3-option-0-1').click();
		}
		if (randomDropsownSelectOne === 2) {
			cy.get('#react-select-3-option-0-2').click();
		}
		if (randomDropsownSelectOne === 3) {
			cy.get('#react-select-3-option-0-3').click();
		}
		if (randomDropsownSelectOne === 4) {
			cy.get('#react-select-3-option-0-4').click();
		}
		if (randomDropsownSelectOne === 5) {
			cy.get('#react-select-3-option-0-5').click();
		}
	});
	it('41632 | TC3: validar la funcionalidad del dropdown Old Style Select Menu', () => {
		const randomOldSelectMenu = faker.datatype.number({ min: 0, max: 10 });
		cy.get('#oldSelectMenu').select(randomOldSelectMenu);
	});
	it('41632 | TC4: validar la funcionalidad del Multiselect dropdown', () => {
		const randomMultiSelect = faker.datatype.number({ min: 0, max: 3 });
		cy.get('[class$="indicatorContainer"]').eq(2).click();
		if (randomMultiSelect === 0) {
			cy.get('#react-select-4-option-0').click();
		}
		if (randomMultiSelect === 1) {
			cy.get('#react-select-4-option-1').click();
		}
		if (randomMultiSelect === 2) {
			cy.get('#react-select-4-option-2').click();
		}
		if (randomMultiSelect === 3) {
			cy.get('#react-select-4-option-3').click();
		}
	});
	it('41632 | TC5: validar la funcionalidad de Standard multi select', () => {
		const randomStandarMultiSelect = faker.datatype.number({ min: 0, max: 3 });
		cy.get('#cars').select(randomStandarMultiSelect);
	});
});
