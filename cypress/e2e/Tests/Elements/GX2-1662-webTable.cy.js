describe('GX2-1662', () => {
	beforeEach('precondición', () => {
		cy.visit('/webtables');
		//cy.get('[class*="card mt-4 top-card"]').eq(0).click();
		//cy.get('[class*="btn btn-light"]').eq(3).click();
	});
	it('TC1: Validate succesful registration with correct data', () => {
		WebTables.addNewPeople();
		WebTables.registrationSubmit();
		WebTables.typeFirstname('ValidfirstName');
		WebTables.typeLastname('ValidLastName');
		WebTables.typeUserAge('27');
		WebTables.typeSalary('1000');
		WebTables.typeUserEmail('Valid@email.com');
		WebTables.typeDepartment('Legal');
		WebTables.registrationSubmit();
		WebTables.get.dataTable().then(dataTable => {
			expect(dataTable).to.contain('ValidfirstName', 'ValidLastName', '27', '1000', 'Valid@email.com');
		});
	});
	it.skip('TC2: Validate No registration with invalid first name (numbers)', () => {
		WebTables.addNewPeople();
		WebTables.registrationSubmit();
		WebTables.typeFirstname('413521');
		WebTables.typeLastname('ValidLastName');
		WebTables.typeUserAge('27');
		WebTables.typeSalary('1000');
		WebTables.typeUserEmail('Valid@email.com');
		WebTables.typeDepartment('Legal');
		WebTables.registrationSubmit();
		WebTables.get.firstName().then(FistnameForm => {
			expect(FistnameForm).to.have.css('border-color', 'rgb(220, 53, 69)');
		});
	});
	it.skip('TC3: Validate No registration with invalid first name (special characters)', () => {
		WebTables.addNewPeople();
		WebTables.registrationSubmit();
		WebTables.typeFirstname('^%$#@^');
		WebTables.typeLastname('ValidLastName');
		WebTables.typeUserAge('27');
		WebTables.typeSalary('1000');
		WebTables.typeUserEmail('Valid@email.com');
		WebTables.typeDepartment('Legal');
		WebTables.registrationSubmit();
		WebTables.get.firstName().then(FistnameForm => {
			expect(FistnameForm).to.have.css('border-color', 'rgb(220, 53, 69)');
		});
	});
	it.only('TC4: Validate No registration with invalid first name (empty)', () => {
		WebTables.addNewPeople();
		WebTables.registrationSubmit();
		WebTables.typeLastname('ValidLastName');
		WebTables.typeUserAge('27');
		WebTables.typeSalary('1000');
		WebTables.typeUserEmail('Valid@email.com');
		WebTables.typeDepartment('Legal');
		WebTables.registrationSubmit();
		WebTables.get.firstName().then(FistnameForm => {
			expect(FistnameForm).to.have.css('border-color', 'rgb(220, 53, 69)');
		});
	});
});
import { WebTables } from '@pages/webtables.Page';
import { removeLogs } from '@helper/RemoveLogs';
removeLogs();
