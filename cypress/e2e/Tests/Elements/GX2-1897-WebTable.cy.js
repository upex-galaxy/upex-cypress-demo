import { webtable } from '@pages/GX2-1897-WebTable/WebTable';
import { faker } from '@faker-js/faker';

describe('GX2-1897-✅-tools-qa-elements-web-table', () => {
	beforeEach('Precondition', () => {
		cy.visit('https://demoqa.com/webtables');
	});
	it('1898 | TC1: Validate that the registration form pops up when the button “Add” is clicked on', () => {
		webtable.elements.addbutton().should('exist').and('have.text', 'Add');
		webtable.elements.modal().should('not.exist');
		webtable.clickAdd();
		webtable.elements.modal().should('exist');
		webtable.elements.nameInput().should('exist');
		webtable.elements.lasnameInput().should('exist');
		webtable.elements.mailInput().should('exist');
		webtable.elements.ageInput().should('exist');
		webtable.elements.salaryInput().should('exist');
		webtable.elements.departmentInput().should('exist');
	});

	it('GX2-1898 | TC2: Validate that the user can successfully sign into the table.', () => {
		const rn = Cypress._.random(10, 100);
		const info = {
			name: faker.name.firstName(),
			surname: faker.name.lastName(),
			mail: faker.internet.email(),
			age: Cypress._.random(18, 65),
			salary: rn * 1000,
			department: faker.company.bs(),
		};
		webtable.clickAdd();
		cy.UserSignIn(info.name, info.surname, info.mail, info.age, info.salary, info.department);
		webtable.clickSubmit();
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
