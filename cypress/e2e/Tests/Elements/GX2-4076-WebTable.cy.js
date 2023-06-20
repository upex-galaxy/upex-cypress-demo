import { webtable } from '@pages/Elements/GX2-WebTables';
import { removeLogs } from '@helper/RemoveLogs';
import { userDatabaseArray } from '@pages/Elements/GX2-WebTables';
describe('GX2-4076 | ✅ToolsQA | Elements | Web Table', () => {
	beforeEach('Preconditions', () => {
		cy.visit('/webtables');
	});
	it('GX2-4077 | TC1: Validate that the user can add a register', () => {
		webtable.get.addButton().should('exist').and('be.enabled');
		webtable.clickAddbutton();
		webtable.get.registrationModal().should('exist');
		webtable.get.registrationModal().within(() => {
			webtable.get.modalHeader().should('contain', 'Registration Form');
		});
		webtable.typeName().then(() => {
			cy.wrap(Cypress.env('nameLabel')).should('equal', 'First Name');
		});
		webtable.typeSurname().then(() => {
			cy.wrap(Cypress.env('surnameLabel')).should('equal', 'Last Name');
		});
		webtable.typeAge().then(() => {
			cy.wrap(Cypress.env('ageLabel')).should('equal', 'Age');
		});
		webtable.typeEmail().then(() => {
			cy.wrap(Cypress.env('emailLabel')).should('equal', 'Email');
		});
		webtable.typeSalary().then(() => {
			cy.wrap(Cypress.env('salaryLabel')).should('equal', 'Salary');
		});
		webtable.typeDepartment().then(() => {
			cy.wrap(Cypress.env('departmentLabel')).should('equal', 'Department');
		});
		webtable.get.submitButton().should('be.enabled').and('contain', 'Submit');
		webtable.clickSubmit();
		webtable.get
			.rows()
			.eq(3)
			.within(() => {
				for (let i = 0; i <= 5; i++) {
					webtable.get
						.cells()
						.eq(i)
						.then(info => {
							cy.wrap(info.text()).should('equal', userDatabaseArray[i]);
						});
				}
			});
	});
});

removeLogs();
