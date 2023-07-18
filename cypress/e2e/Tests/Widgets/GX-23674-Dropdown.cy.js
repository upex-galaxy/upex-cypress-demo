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
	it('23674 |TC3: Validate select a different random option in Old style Select Menu', () => {
		// Act
		// Selecciona un valor aleatorio del dropdown del Old Style
		const numRandom = Cypress._.random(0, 10);
		cy.fixture('data/GX-23674-Dropdown').then(jsonFile => {
			cy.visit('/select-menu');
			cy.get('#oldSelectMenu').select(numRandom);
			cy.log(jsonFile.Colors[numRandom]);
			cy.get('#oldSelectMenu')
				.invoke('text')
				.then(textColor => {
					cy.log(textColor);
					expect(textColor).to.contain(jsonFile.Colors[numRandom]);
				});
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

	it('23674 |TC5: Validate select random options in Multiselect dropdown', () => {
		const numRandom = Cypress._.random(0, 3);
		cy.fixture('data/GX-23674-Dropdown').then(jsonFile => {
			cy.get('[class=" css-yk16xz-control"]').eq(2).click();

			cy.get('[class=" css-11unzgr"]').children().eq(numRandom).click();

			cy.get('[class="css-1rhbuit-multiValue"]')
				.invoke('text')
				.then(textColor2 => {
					expect(textColor2).to.contain(jsonFile.Colors2[numRandom]);
				});
		});
	});

	it('23674 |TC6: Validate select random options in Standard multi select ', () => {
		const numRandom = Cypress._.random(0, 3);
		cy.fixture('data/GX-23674-Dropdown').then(jsonFile => {
			cy.get('#cars').select(numRandom);
			cy.get('#cars')
				.invoke('text')
				.then(textCar => {
					expect(textCar).to.contain(jsonFile.cars[numRandom]);
				});
		});
	});
});
import { removeLogs } from '@helper/RemoveLogs';
removeLogs();
