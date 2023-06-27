import { webtable } from '@pages/Elements/GX2-WebTables';
import { removeLogs } from '@helper/RemoveLogs';
import { dataBase, pages } from '@pages/Elements/GX2-WebTables';
import { userDatabaseArray } from '@pages/Elements/GX2-WebTables';
import { sortedNames, unsortedNames } from '@pages/Elements/GX2-WebTables';
describe('GX2-4076 | ✅ToolsQA | Elements | Web Table', () => {
	beforeEach('Preconditions', () => {
		cy.visit('/webtables', { reload: true });
		cy.clearLocalStorage();
		cy.clearAllLocalStorage();
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

		webtable.retrieveRowInfo().then(() => {
			for (let i = 0; i <= 5; i++) {
				expect(Cypress.env('cellInformation')).to.include(userDatabaseArray[i]);
			}
		});
	});
	it('GX2-4077 | TC2: Validate that the user can filter a register search by field', () => {
		webtable.get.searchbox().should('exist');
		webtable.gettingUsers();
		webtable.waitforAsyncValue().then(() => {
			webtable.searchRandomUser();
		});
		webtable.gettingCelluser();
		cy.wrap(dataBase).then(() => {
			expect(dataBase.searchedUser).equal(dataBase.userInCell);
		});
	});
	it('GX2-4077 | TC3: Validate that the user can sort a register', () => {
		webtable.get.nameSortingButton().should('exist').and('have.text', 'First Name');
		webtable.getNamesUnsorted();
		webtable.clickNameSortingButton();
		webtable.getSortedNames();
		cy.log(unsortedNames).then(() => {
			const sortedInTest = unsortedNames.sort();
			cy.log(`**These names were sorted in the test: ${sortedInTest}**`);
			cy.log(`**And these names were sorted on the website: ${sortedNames}**`);
			expect(sortedNames).to.deep.equal(sortedInTest);
		});
	});
	it('GX2-4077 | TC4: Validate that the user can edit a register', () => {
		webtable.get.rowButtons().should('be.visible');
		webtable.clickRandomEditButton();
		webtable.editName();
		webtable.clickSubmit();
		webtable
			.waitforAsyncValue()
			.then(() => {
				webtable.gettingNewNameInCell();
			})
			.then(() => {
				expect(dataBase.originalName).not.equal(dataBase.changedName);
			});
	});
	it('GX2-4077 | TC5: Validate that the user can remove a register', () => {
		webtable.get.rowButtons().should('be.visible');
		webtable.clickRandomDeleteButton();
		webtable
			.waitforAsyncValue()
			.then(() => {
				webtable.checkingUserDeletion();
			})
			.then(() => {
				webtable.checkingUserDeletion().should('not.contain', dataBase.nameInCell);
			});
	});
	it('GX2-4077 | TC6: Validate that the user can perform a register pagination by row number 5', () => {
		webtable.get.rowsPerPage().should('exist');
		webtable.select5rows();
		webtable.gettingNumberofRows();
		cy.wrap(dataBase).then(() => {
			expect(dataBase.fiverowSelected).to.equal(dataBase.numberOfRows);
		});
	});
	it('GX2-4077 | TC7: Validate that the user can perform a register pagination by row number 25', () => {
		webtable.get.rowsPerPage().should('exist');
		webtable.select25rows();
		webtable.gettingNumberofRows();
		cy.wrap(dataBase).then(() => {
			expect(dataBase.twentyFiverowSelected).to.equal(dataBase.numberOfRows);
		});
	});
	it('GX2-4077 | TC8: Validate that the user can perform a register pagination by row number 100', () => {
		webtable.get.rowsPerPage().should('exist');
		webtable.select100rows();
		webtable.gettingNumberofRows();
		cy.wrap(dataBase).then(() => {
			expect(dataBase.oneHundredrowSelected).to.equal(dataBase.numberOfRows);
		});
	});
	it('GX2-4077 | TC9: Validate that the user can move between paginations with the next button.', () => {
		webtable.get.rowsPerPage().should('exist');
		webtable.select5rows();
		webtable.addNewUser(4);
		webtable.get.previousNextButtons().last().should('be.enabled').and('contain', 'Next');
		webtable.clickOnNext();
		webtable.gettingPagesInformation();
		cy.wrap(pages).then(() => {
			expect(pages.currentPage).to.equal(pages.numberOfPages);
		});
	});
	it('GX2-4077 | TC10: Validate that the user can move between paginations with the previous button.', () => {
		webtable.get.rowsPerPage().should('exist');
		webtable.select5rows();
		webtable.addNewUser(4);
		webtable.get.previousNextButtons().last().should('be.enabled').and('contain', 'Next');
		webtable.clickOnNext();
		webtable.gettingPagesInformation().then(() => {
			cy.wrap(Cypress.env('val')).should('contain', 2);
		});
		webtable.get.previousNextButtons().first().should('be.enabled').and('contain', 'Previous');
		webtable.clickOnPrevious();
		webtable.gettingPagesInformation().then(() => {
			cy.wrap(Cypress.env('val')).should('contain', 1);
		});
	});
	it('GX2-4077 | TC11: Validate that the user can move between paginations with the page field.', () => {
		webtable.select5rows();
		webtable.addNewUser(4);
		webtable.get.numberOfPageInput().should('have.attr', 'value', '1');
		webtable.inputPageNumber2();
		webtable.gettingPagesInformation().then(() => {
			cy.wrap(Cypress.env('val')).should('contain', 2);
		});
	});
});

removeLogs();
