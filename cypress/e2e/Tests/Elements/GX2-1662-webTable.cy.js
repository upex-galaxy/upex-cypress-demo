describe('GX2-1662', () => {
	beforeEach('precondición', () => {
		cy.visit('/webtables');
	});
	it('TC1: Validate succesful registration with correct data', () => {
		WebTables.addUser({
			firstName: validFirstName,
			lastName: validLastName,
			userEmail: validUserEmail,
			Age: validUserAge,
			salary: validUserSalary,
			department: validDepartment,
		});
		WebTables.get.registerForm().should('not.exist');
	});
	it.skip('TC2: Validate No registration with invalid first name (numbers)', () => {
		WebTables.addUser({
			firstName: '1352134',
			lastName: validLastName,
			userEmail: validUserEmail,
			Age: validUserAge,
			salary: validUserSalary,
			department: validDepartment,
		});
		WebTables.get.registerForm().should('be.visible');
	});
	it.skip('TC3: Validate No registration with invalid first name (special characters)', () => {
		WebTables.addUser({
			firstName: '@#!@$!',
			lastName: validLastName,
			userEmail: validUserEmail,
			Age: validUserAge,
			salary: validUserSalary,
			department: validDepartment,
		});
		WebTables.get.registerForm().should('be.visible');
	});
	it('TC4: Validate No registration with invalid first name (empty)', () => {
		WebTables.addUser({
			lastName: validLastName,
			userEmail: validUserEmail,
			Age: validUserAge,
			salary: validUserSalary,
			department: validDepartment,
		});
		WebTables.get.registerForm().should('be.visible');
	});
	it.skip('TC5: Validate No registration with invalid last name (numbers)', () => {
		WebTables.addUser({
			firstName: validFirstName,
			lastName: '1245212',
			userEmail: validUserEmail,
			Age: validUserAge,
			salary: validUserSalary,
			department: validDepartment,
		});
		WebTables.get.registerForm().should('be.visible');
	});
	it.skip('TC6: Validate No registration with invalid last name (special characters)', () => {
		WebTables.addUser({
			firstName: validFirstName,
			lastName: '!@$#@!@',
			userEmail: validUserEmail,
			Age: validUserAge,
			salary: validUserSalary,
			department: validDepartment,
		});
		WebTables.get.registerForm().should('be.visible');
	});
	it('TC7: Validate No registration with invalid last name (empty)', () => {
		WebTables.addUser({
			firstName: validFirstName,
			userEmail: validUserEmail,
			Age: validUserAge,
			salary: validUserSalary,
			department: validDepartment,
		});
		WebTables.get.registerForm().should('be.visible');
	});
	it('TC8: Validate No registration with invalid email', () => {
		WebTables.addUser({
			firstName: validFirstName,
			lastName: validLastName,
			userEmail: 'invalidUserEmail',
			Age: validUserAge,
			salary: validUserSalary,
			department: validDepartment,
		});
		WebTables.get.registerForm().should('be.visible');
	});
	it('TC9: Validate No registration with email (empty)', () => {
		WebTables.addUser({
			firstName: validFirstName,
			lastName: validLastName,
			Age: validUserAge,
			salary: validUserSalary,
			department: validDepartment,
		});
		WebTables.get.registerForm().should('be.visible');
	});
	it('TC10: Validate No registration with invalid age (text)', () => {
		WebTables.addUser({
			firstName: validFirstName,
			lastName: validLastName,
			userEmail: validUserEmail,
			Age: 'Text',
			salary: validUserSalary,
			department: validDepartment,
		});
		WebTables.get.registerForm().should('be.visible');
	});
	it('TC11: Validate No registration with invalid age (special characters)', () => {
		WebTables.addUser({
			firstName: validFirstName,
			lastName: validLastName,
			userEmail: validUserEmail,
			Age: '!$#@#!@',
			salary: validUserSalary,
			department: validDepartment,
		});
		WebTables.get.registerForm().should('be.visible');
	});
	it('TC12: Validate No registration with invalid age (empty)', () => {
		WebTables.addUser({
			firstName: validFirstName,
			lastName: validLastName,
			userEmail: validUserEmail,
			salary: validUserSalary,
			department: validDepartment,
		});
		WebTables.get.registerForm().should('be.visible');
	});
	it('TC13: Validate No registration with invalid salary (text)', () => {
		WebTables.addUser({
			firstName: validFirstName,
			lastName: validLastName,
			userEmail: validUserEmail,
			Age: validUserAge,
			salary: 'text',
			department: validDepartment,
		});
		WebTables.get.registerForm().should('be.visible');
	});
	it('TC14: Validate No registration with invalid salary (special characters)', () => {
		WebTables.addUser({
			firstName: validFirstName,
			lastName: validLastName,
			userEmail: validUserEmail,
			Age: validUserAge,
			salary: '!#$%@!',
			department: validDepartment,
		});
		WebTables.get.registerForm().should('be.visible');
	});
	it('TC15: Validate No registration with invalid salary (empty)', () => {
		WebTables.addUser({
			firstName: validFirstName,
			lastName: validLastName,
			userEmail: validUserEmail,
			Age: validUserAge,
			department: validDepartment,
		});
		WebTables.get.registerForm().should('be.visible');
	});
	it.skip('TC16: Validate No registration with invalid deparment (numbers)', () => {
		WebTables.addUser({
			firstName: validFirstName,
			lastName: validLastName,
			userEmail: validUserEmail,
			Age: validUserAge,
			salary: validUserSalary,
			department: '124125',
		});
		WebTables.get.registerForm().should('be.visible');
	});
	it.skip('TC17: Validate No registration with invalid deparment (special characters)', () => {
		WebTables.addUser({
			firstName: validFirstName,
			lastName: validLastName,
			userEmail: validUserEmail,
			Age: validUserAge,
			salary: validUserSalary,
			department: '@!##%$',
		});
		WebTables.get.registerForm().should('be.visible');
	});
	it('TC18: Validate No registration with invalid deparment (empty)', () => {
		WebTables.addUser({
			firstName: validFirstName,
			lastName: validLastName,
			userEmail: validUserEmail,
			Age: validUserAge,
			salary: validUserSalary,
		});
		WebTables.get.registerForm().should('be.visible');
	});
	it('TC19: Validate list of coincidences when use the search bar', () => {
		WebTables.addMultiplesUsers({ amountOfusers: 2 });
		const randomValueInColumn = WebTables.getRandomValueInColumn('First Name');
		cy.get('*').then(() => {
			const RandomValueInColumn = randomValueInColumn.toString();
			cy.getTableCell('First Name', 1).should('not.be.contain', RandomValueInColumn);
			WebTables.typeSearchBox(RandomValueInColumn);
			cy.getTableCell('First Name', 1).should('contain', RandomValueInColumn);
		});
	});
	it('TC20: Validate the register list will be sorted alphabetically when click on HeaderCell (first name)', () => {
		WebTables.addMultiplesUsers({ amountOfusers: 1 });
		const columnValues = WebTables.getColumnValuesByName('First Name');
		WebTables.clickOnHeaderCell('First Name');
		const newColumnValues = WebTables.getColumnValuesByName('First Name');
		cy.get('*').then(() => {
			const sortedColumn = columnValues.sort();
			expect(sortedColumn).to.deep.equal(newColumnValues);
		});
	});
	it('TC21: Validate the register list will be sorted alphabetically when click on HeaderCell (last Name)', () => {
		WebTables.addMultiplesUsers({ amountOfusers: 1 });
		const columnValues = WebTables.getColumnValuesByName('Last Name');
		WebTables.clickOnHeaderCell('Last Name');
		const newColumnValues = WebTables.getColumnValuesByName('Last Name');
		cy.get('*').then(() => {
			const sortedColumn = columnValues.sort();
			expect(sortedColumn).to.deep.equal(newColumnValues);
		});
	});
	it('TC22: Validate the register list will be sorted alphabetically when click on HeaderCell (Email)', () => {
		WebTables.addMultiplesUsers({ amountOfusers: 1 });
		const columnValues = WebTables.getColumvaluesByName('Email');
		WebTables.clickOnHeaderCell('Email');
		const newColumnValues = WebTables.getColumvaluesByName('Email');
		cy.get('*').then(() => {
			const sortedColumn = columnValues.sort();
			expect(sortedColumn).to.deep.equal(newColumnValues);
		});
	});
	it('TC23: Validate the register list will be sorted alphabetically when click on HeaderCell (Age)', () => {
		WebTables.addMultiplesUsers({ amountOfusers: 1 });
		const columnValues = WebTables.getColumnValuesByName('Age');
		WebTables.clickOnHeaderCell('Age');
		const newColumnValues = WebTables.getColumnValuesByName('Age');
		cy.get('*').then(() => {
			const sortedColumn = columnValues.sort();
			expect(sortedColumn).to.deep.equal(newColumnValues);
		});
	});
	it.skip('TC24: Validate the register list will be sorted alphabetically when click on HeaderCell (Salary)', () => {
		WebTables.addMultiplesUsers({ amountOfusers: 1 });
		const columnValues = WebTables.getColumnValuesByName('Salary');
		WebTables.clickOnHeaderCell('Salary');
		const newColumnValues = WebTables.getColumnValuesByName('Salary');
		cy.get('*').then(() => {
			const sortedColumn = columnValues.sort();
			expect(sortedColumn).to.deep.equal(newColumnValues);
		});
	});
	it('TC25: Validate the register list will be sorted alphabetically when click on HeaderCell (Department)', () => {
		WebTables.addMultiplesUsers({ amountOfusers: 1 });
		const columnValues = WebTables.getColumnValuesByName('Department');
		WebTables.clickOnHeaderCell('Department');
		const newColumnValues = WebTables.getColumnValuesByName('Department');
		cy.get('*').then(() => {
			const sortedColumn = columnValues.sort();
			expect(sortedColumn).to.deep.equal(newColumnValues);
		});
	});
	it('TC26: Validate pop-up contains the registration form when click on edit button', () => {
		WebTables.clickOnEditButtonByRow({ row: 1 });
		WebTables.get.registerForm().should('be.visible');
	});
	it('TC27: Validate user deleted in table when click on delete button', () => {
		const user = WebTables.getUserDataByRow({ row: 1 });
		WebTables.clickOnDeleteButtonByRow({ row: 1 });
		const usersInTable = WebTables.getDataTable();
		cy.get('*').then(() => {
			const dataUser = user.toString();
			const dataUsersInTable = usersInTable.toString();
			expect(dataUsersInTable).not.deep.contains(dataUser);
		});
	});
	it.skip('TC28: validate the next register page when click on next button', () => {
		WebTables.addMultiplesUsers({ amountOfusers: 6 });
		WebTables.selectRowForPage({ amountOfRows: '5 rows' }); //only accept (5 rows, 10 rows, 20 rows, 50 rows, 100 rows)
		WebTables.get.buttonNext().should('be.enabled');
		const firstPage = WebTables.getDataTable();
		WebTables.get.buttonNext().click();
		const secondPage = WebTables.getDataTable();
		cy.get('*').then(() => {
			expect(firstPage).not.deep.equal(secondPage);
		});
	});
	it('TC29: validate the previous register page when click on previous button', () => {
		WebTables.addMultiplesUsers({ amountOfusers: 6 });
		WebTables.selectRowForPage({ amountOfRows: '5 rows' }); //only accept (5 rows, 10 rows, 20 rows, 50 rows, 100 rows)
		WebTables.get.buttonPrevious().should('be.disabled');
		WebTables.get.buttonNext().click(); //be on the second page
		WebTables.get.buttonPrevious().should('be.enabled');
		const secondPage = WebTables.getDataTable();
		WebTables.get.buttonPrevious().click();
		const firstPage = WebTables.getDataTable();
		cy.get('*').then(() => {
			expect(secondPage).not.deep.equal(firstPage);
		});
	});
	it('TC30: Validate rows per page when selected 5 rows in the page size options', () => {
		WebTables.selectRowForPage({ amountOfRows: '5 rows' }); //only accept (5 rows, 10 rows, 20 rows, 50 rows, 100 rows)
		WebTables.get.rowsInTable().should('have.length', 5);
	});
	it('TC31: Validate rows per page when selected 10 rows in the page size options', () => {
		WebTables.selectRowForPage({ amountOfRows: '10 rows' }); //only accept (5 rows, 10 rows, 20 rows, 50 rows, 100 rows)
		WebTables.get.rowsInTable().should('have.length', 10);
	});
	it('TC32: Validate rows per page when selected 20 rows in the page size options', () => {
		WebTables.selectRowForPage({ amountOfRows: '20 rows' }); //only accept (5 rows, 10 rows, 20 rows, 50 rows, 100 rows)
		WebTables.get.rowsInTable().should('have.length', 20);
	});
	it('TC33: Validate rows per page when selected 50 rows in the page size options', () => {
		WebTables.selectRowForPage({ amountOfRows: '50 rows' }); //only accept (5 rows, 10 rows, 20 rows, 50 rows, 100 rows)
		WebTables.get.rowsInTable().should('have.length', 50);
	});
	it('TC34: Validate rows per page when selected 100 rows in the page size options', () => {
		WebTables.selectRowForPage({ amountOfRows: '100 rows' }); //only accept (5 rows, 10 rows, 20 rows, 50 rows, 100 rows)
		WebTables.get.rowsInTable().should('have.length', 100);
	});
});

const validFirstName = faker.name.firstName();
const validLastName = faker.name.lastName();
const validUserEmail = faker.internet.email();
const validUserAge = faker.datatype.number({ max: 100 });
const validUserSalary = faker.datatype.number({ min: 500 });
const validDepartment = faker.commerce.department();

//import { SortColumn, UpdateColumn } from '@pages/webtables.Page';
import { WebTables } from '@pages/webtables.Page';
import { removeLogs } from '@helper/RemoveLogs';
import { faker } from '@faker-js/faker';
removeLogs();
