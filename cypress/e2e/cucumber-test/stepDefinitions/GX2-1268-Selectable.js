import { Given, Then, When } from '@badeball/cypress-cucumber-preprocessor';
import { SelectOnGrid } from '@pages/GX2-1268-Interactions-Selectable/SelectableGrid.js';
import { SelectOnList } from '@pages/GX2-1268-Interactions-Selectable/SelectableList.js';

const selectablePage = Cypress.env('endpoint').selectable;

context('US GX2-1268 | TX: ✅ToolsQA | Interactions | Selectable', () => {
    Given('user is in the website', () => {
        cy.visit(selectablePage);
        cy.url().should('contain', selectablePage);
        });

    describe('GX2-1268 | TC1: Verify user can select List pagination', () => {
        When('clicks on List pagination', () => {
            SelectOnGrid.SelectGrid();
            SelectOnList.SelectList();
        });

        Then('should be can see the List elements', () => {
            SelectOnList.listPaginationPanel().should('have.text', 'Cras justo odio');
        });
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
