describe('US GX-23674 | TS: ✅ToolsQA | Widgets | Dropdown - Select Menu', () => {
	beforeEach('Precondition: Visit website DemoQA', () => {
		cy.visit('https://demoqa.com/select-menu');
	});

	it('23674 |TC1: Validate select option 1 in Select Value', () => {
		cy.get('#withOptGroup').click();
		cy.get('#react-select-2-option-0-0').click();
		cy.get('[class$=singleValue]').should('have.text', 'Group 1, option 1');
	});

	it('23674 |TC2: Validate Select random title in Select One', () => {
		const random = Math.floor(Math.random() * 6);

		cy.get('#selectOne').click();

		cy.get('[id^="react-select-3-option-0"]')
			.eq(random)
			.click()
			.invoke('text')
			.then(prueba => {
				cy.get('.css-1pahdxg-control > .css-1hwfws3').should('have.text', prueba);
			});
	});
	it.only('23674 |TC3: Validate select a different random option in Old style Select Menu', () => {
		// Act
		// Selecciona un valor aleatorio del dropdown del Old Style
		const numRandom = Cypress._.random(0, 10);
		cy.fixture('data/GX-23674-Dropdown').then(the => {});
		cy.visit('/select-menu');
		cy.get('#oldSelectMenu').select(numRandom);
		cy.log(the[numRandom]);
		cy.get('#oldSelectMenu')
			.invoke('text')
			.then(textColor => {
				cy.log(textColor);
				expect(textColor).to.contain(the[numRandom]);
			});
		// get the text of the element in the 'random' position

		// Assert
		// El valor seleccionado aparece correctamente en el selector
	});

	it('23674 |TC4: Validate select all options in Multiselect Dropdown', () => {
		cy.get('[class=" css-yk16xz-control"]').eq(2).click();
		cy.get('#react-select-4-option-0').click();
		cy.get('#react-select-4-option-1').click();
		cy.get('#react-select-4-option-2').click();
		cy.get('#react-select-4-option-3').click();
	});
});

import { removeLogs } from '@helper/RemoveLogs';
removeLogs();
