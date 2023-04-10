import { webtable } from '@pages/GX2-1897-WebTable/WebTable';

describe('GX2-1897-✅-tools-qa-elements-web-table', () => {
	before('Precondition', () => {
		cy.visit('https://demoqa.com/webtables');
	});
	it('1898 | TC1: Validate that the registration form pops up when the button “Add” is clicked on', () => {
		webtable.elements.addbutton().should('exist').and('have.text', 'Add');
		webtable.elements.modal().should('not.exist');
		webtable.clickAdd();
		webtable.elements.modal().should('exist');
	});
});

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
