describe('US GX-23674 | TS: ✅ToolsQA | Widgets | Dropdown - Select Menu', () => {
	beforeEach('Precondition: Visit website DemoQA', () => {
		cy.visit('https://demoqa.com/select-menu');
	});

	it('23674 |TC1: Validate select option 1 in Select Value', () => {
		cy.get('#withOptGroup').click();
		cy.get('#react-select-2-option-0-0').click();
		cy.get('[class$=singleValue]').should('have.text', 'Group 1, option 1');
	});

	it('23674 |TC2: Validate Select title in Select One', () => {
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
	it('23674 |TC3: Validate select Old style Select Menu', () => {
		cy.get('#oldSelectMenu').select('red');
	});
});

import { removeLogs } from '@helper/RemoveLogs';
removeLogs();
