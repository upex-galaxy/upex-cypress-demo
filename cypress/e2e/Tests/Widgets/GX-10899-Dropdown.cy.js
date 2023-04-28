describe('US GX-10899 | TS: ToolsQA | Widgets | Dropdown - Select Menu', () => {
	beforeEach('', () => {
		cy.visit('https://demoqa.com/select-menu');
	});
	it('TC1: Validate that can select one option in the firts dropdown list group', () => {
		cy.get('[class=" css-1wa3eu0-placeholder"]').eq(0).click();
		cy.get('#react-select-2-option-1-0').click();
		cy.contains('Group 2, option 1');
	});
	it('TC2: Validate that can select one option in the second dropdown list', () => {
		cy.get('[class=" css-1wa3eu0-placeholder"]').eq(1).click();
		cy.get('[id="react-select-3-option-0-3"]').click();
		cy.contains('Ms.');
	});
	it('TC3: Validate that can select one option in the third old dropdown list', () => {
		cy.get('#oldSelectMenu').select('Black');
	});
	it('TC4: Validate that can multiselect in the Multiselect drop down', () => {
		cy.get('[class=" css-1wa3eu0-placeholder"]').eq(2).click();
		cy.get('#react-select-4-option-0').click();
		cy.get('#react-select-4-option-1').click();
		cy.get('#react-select-4-option-2').click();
		cy.get('#react-select-4-option-3').click();
		cy.get('[class=" css-1hwfws3"]').should('contain', 'Red').and('contain', 'Black').and('contain', 'Blue').and('contain', 'Green');
	});
	it('TC5: Validate that can deselect in the Multiselect drop down', () => {
		//Selected items
		cy.get('[class=" css-1wa3eu0-placeholder"]').eq(2).click();
		cy.get('#react-select-4-option-0').click();
		cy.get('#react-select-4-option-1').click();
		cy.get('#react-select-4-option-2').click();
		cy.get('#react-select-4-option-3').click();
		//Deselected Items
		cy.get('[class="css-19bqh2r"]').eq(2).click(); //Delete item 1
		cy.get('[class="css-19bqh2r"]').eq(2).click(); //Delete item 2
		cy.get('[class="css-19bqh2r"]').eq(2).click(); //Delete item 3
		cy.get('[class="css-19bqh2r"]').eq(2).click(); //Delete item 4
	});
	it('Validate that can select one item in the Standard multi select', () => {
		cy.get('#cars').select('Volvo');
	});
});
//________________________________________________________________________
// Comando predeterminado para que no ocurran errores de excepciones:
Cypress.on('uncaught:exception', () => {
	// returning false here prevents Cypress from
	// failing the test
	return false;
});
// Comando predeterminado para que no aparezcan los Fetch en el log del Test Runner:
const origLog = Cypress.log;
Cypress.log = function (opts, ...other) {
	if (opts.displayName === 'xhr' || (opts.displayName === 'fetch' && opts.url.startsWith('https://'))) {
		return;
	}
	return origLog(opts, ...other);
};
