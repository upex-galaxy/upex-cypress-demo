/* eslint-disable no-undef */
// ***********************************************
// https://on.cypress.io/custom-commands
// ***********************************************
import 'cypress-file-upload';
import "@4tw/cypress-drag-drop"

beforeEach(() => {
	Cypress.on('uncaught:exception', () => false); // returning false here prevents Cypress from failing the test
	cy.intercept({ resourceType: /xhr|fetch/ }, { log: false });
});

// * Este es el Commands cy.page() para usar los Page Object Models sin necesidad de importarlos en cada archivo de test.
// * Está comentado porque sirve de ejemplo para personalizarlo según las necesidades del proyecto.
// Cypress.Commands.add('page', () => {
// 	const page = {
// 		spaceLoginPage: new SpaceLoginPage(),
// 		spaceProductPage: new SpaceDestinationPage(),
// 		spaceCheckoutPage: new SpaceCheckoutPage()
// 	};
// 	return cy.wrap(page);
// });
