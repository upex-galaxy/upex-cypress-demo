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
		WebTables.get.registerForm().should('not.exist');
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
		WebTables.get.registerForm().should('be.visible');
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
		WebTables.get.registerForm().should('be.visible');
		WebTables.get.firstName().then(FistnameForm => {
			expect(FistnameForm).to.have.css('border-color', 'rgb(220, 53, 69)');
		});
	});
	it('TC4: Validate No registration with invalid first name (empty)', () => {
		WebTables.addNewPeople();
		WebTables.registrationSubmit();
		WebTables.typeLastname('ValidLastName');
		WebTables.typeUserAge('27');
		WebTables.typeSalary('1000');
		WebTables.typeUserEmail('Valid@email.com');
		WebTables.typeDepartment('Legal');
		WebTables.registrationSubmit();
		WebTables.get.registerForm().should('be.visible');
		WebTables.get.firstName().then(FistnameForm => {
			expect(FistnameForm).to.have.css('border-color', 'rgb(220, 53, 69)');
		});
	});
	it.skip('TC5: Validate No registration with invalid last name (numbers)', () => {
		WebTables.addNewPeople();
		WebTables.registrationSubmit();
		WebTables.typeFirstname('ValidFirstName');
		WebTables.typeLastname('12314512');
		WebTables.typeUserAge('27');
		WebTables.typeSalary('1000');
		WebTables.typeUserEmail('Valid@email.com');
		WebTables.typeDepartment('Legal');
		WebTables.registrationSubmit();
		WebTables.get.registerForm().should('be.visible');
		WebTables.get.lastName().then(lastnameForm => {
			expect(lastnameForm).to.have.css('border-color', 'rgb(220, 53, 69)');
		});
	});
	it.skip('TC6: Validate No registration with invalid last name (special characters)', () => {
		WebTables.addNewPeople();
		WebTables.registrationSubmit();
		WebTables.typeFirstname('ValidFirstName');
		WebTables.typeLastname('#$%@#!@');
		WebTables.typeUserAge('27');
		WebTables.typeSalary('1000');
		WebTables.typeUserEmail('Valid@email.com');
		WebTables.typeDepartment('Legal');
		WebTables.registrationSubmit();
		WebTables.get.registerForm().should('be.visible');
		WebTables.get.lastName().then(lastnameForm => {
			expect(lastnameForm).to.have.css('border-color', 'rgb(220, 53, 69)');
		});
	});
	it('TC7: Validate No registration with invalid last name (empty)', () => {
		WebTables.addNewPeople();
		WebTables.registrationSubmit();
		WebTables.typeFirstname('ValidFirstName');
		WebTables.typeUserAge('27');
		WebTables.typeSalary('1000');
		WebTables.typeUserEmail('Valid@email.com');
		WebTables.typeDepartment('Legal');
		WebTables.registrationSubmit();
		WebTables.get.registerForm().should('be.visible');
		WebTables.get.lastName().then(lastnameForm => {
			expect(lastnameForm).to.have.css('border-color', 'rgb(220, 53, 69)');
		});
	});
	it('TC8: Validate No registration with invalid email', () => {
		WebTables.addNewPeople();
		WebTables.registrationSubmit();
		WebTables.typeFirstname('ValidFirstName');
		WebTables.typeLastname('ValidLastName');
		WebTables.typeUserAge('27');
		WebTables.typeSalary('1000');
		WebTables.typeUserEmail('InvalidEmail');
		WebTables.typeDepartment('Legal');
		WebTables.registrationSubmit();
		WebTables.get.registerForm().should('be.visible');
		WebTables.get.userEmail().then(emailForm => {
			expect(emailForm).to.have.css('border-color', 'rgb(220, 53, 69)');
		});
	});
	it('TC9: Validate No registration with email (empty)', () => {
		WebTables.addNewPeople();
		WebTables.registrationSubmit();
		WebTables.typeFirstname('ValidFirstName');
		WebTables.typeLastname('ValidLastName');
		WebTables.typeUserAge('27');
		WebTables.typeSalary('1000');
		WebTables.typeDepartment('Legal');
		WebTables.registrationSubmit();
		WebTables.get.registerForm().should('be.visible');
		WebTables.get.userEmail().then(emailForm => {
			expect(emailForm).to.have.css('border-color', 'rgb(220, 53, 69)');
		});
	});
	it('TC10: Validate No registration with invalid age (text)', () => {
		WebTables.addNewPeople();
		WebTables.registrationSubmit();
		WebTables.typeFirstname('ValidFirstName');
		WebTables.typeLastname('ValidLastName');
		WebTables.typeUserAge('Invalid');
		WebTables.typeSalary('1000');
		WebTables.typeUserEmail('Valid@email.com');
		WebTables.typeDepartment('Legal');
		WebTables.registrationSubmit();
		WebTables.get.registerForm().should('be.visible');
		WebTables.get.userAge().then(userAgeForm => {
			expect(userAgeForm).to.have.css('border-color', 'rgb(220, 53, 69)');
		});
	});
	it('TC11: Validate No registration with invalid age (special characters)', () => {
		WebTables.addNewPeople();
		WebTables.registrationSubmit();
		WebTables.typeFirstname('ValidFirstName');
		WebTables.typeLastname('ValidLastName');
		WebTables.typeUserAge('$$$');
		WebTables.typeSalary('1000');
		WebTables.typeUserEmail('Valid@email.com');
		WebTables.typeDepartment('Legal');
		WebTables.registrationSubmit();
		WebTables.get.registerForm().should('be.visible');
		WebTables.get.userAge().then(userAgeForm => {
			expect(userAgeForm).to.have.css('border-color', 'rgb(220, 53, 69)');
		});
	});
	it('TC12: Validate No registration with invalid age (empty)', () => {
		WebTables.addNewPeople();
		WebTables.registrationSubmit();
		WebTables.typeFirstname('ValidFirstName');
		WebTables.typeLastname('ValidLastName');
		WebTables.typeSalary('1000');
		WebTables.typeUserEmail('Valid@email.com');
		WebTables.typeDepartment('Legal');
		WebTables.registrationSubmit();
		WebTables.get.registerForm().should('be.visible');
		WebTables.get.userAge().then(userAgeForm => {
			expect(userAgeForm).to.have.css('border-color', 'rgb(220, 53, 69)');
		});
	});
	it('TC13: Validate No registration with invalid salary (text)', () => {
		WebTables.addNewPeople();
		WebTables.registrationSubmit();
		WebTables.typeFirstname('ValidFirstName');
		WebTables.typeLastname('ValidLastName');
		WebTables.typeUserAge('27');
		WebTables.typeSalary('Invalid');
		WebTables.typeUserEmail('Valid@email.com');
		WebTables.typeDepartment('Legal');
		WebTables.registrationSubmit();
		WebTables.get.registerForm().should('be.visible');
		WebTables.get.salary().then(salaryForm => {
			expect(salaryForm).to.have.css('border-color', 'rgb(220, 53, 69)');
		});
	});
	it('TC14: Validate No registration with invalid salary (special characters)', () => {
		WebTables.addNewPeople();
		WebTables.registrationSubmit();
		WebTables.typeFirstname('ValidFirstName');
		WebTables.typeLastname('ValidLastName');
		WebTables.typeUserAge('27');
		WebTables.typeSalary('#$%#');
		WebTables.typeUserEmail('Valid@email.com');
		WebTables.typeDepartment('Legal');
		WebTables.registrationSubmit();
		WebTables.get.registerForm().should('be.visible');
		WebTables.get.salary().then(salaryForm => {
			expect(salaryForm).to.have.css('border-color', 'rgb(220, 53, 69)');
		});
	});
	it('TC15: Validate No registration with invalid salary (empty)', () => {
		WebTables.addNewPeople();
		WebTables.registrationSubmit();
		WebTables.typeFirstname('ValidFirstName');
		WebTables.typeLastname('ValidLastName');
		WebTables.typeUserAge('27');
		WebTables.typeUserEmail('Valid@email.com');
		WebTables.typeDepartment('Legal');
		WebTables.registrationSubmit();
		WebTables.get.registerForm().should('be.visible');
		WebTables.get.salary().then(salaryForm => {
			expect(salaryForm).to.have.css('border-color', 'rgb(220, 53, 69)');
		});
	});
	it.skip('TC16: Validate No registration with invalid deparment (numbers)', () => {
		WebTables.addNewPeople();
		WebTables.registrationSubmit();
		WebTables.typeFirstname('ValidFirstName');
		WebTables.typeLastname('ValidLastName');
		WebTables.typeUserAge('27');
		WebTables.typeSalary('Invalid');
		WebTables.typeUserEmail('Valid@email.com');
		WebTables.typeDepartment('31124');
		WebTables.registrationSubmit();
		WebTables.get.registerForm().should('be.visible');
		WebTables.get.department().then(deparmentForm => {
			expect(deparmentForm).to.have.css('border-color', 'rgb(220, 53, 69)');
		});
	});
	it.skip('TC17: Validate No registration with invalid deparment (special characters)', () => {
		WebTables.addNewPeople();
		WebTables.registrationSubmit();
		WebTables.typeFirstname('ValidFirstName');
		WebTables.typeLastname('ValidLastName');
		WebTables.typeUserAge('27');
		WebTables.typeSalary('Invalid');
		WebTables.typeUserEmail('Valid@email.com');
		WebTables.typeDepartment('#@%#!');
		WebTables.registrationSubmit();
		WebTables.get.registerForm().should('be.visible');
		WebTables.get.department().then(deparmentForm => {
			expect(deparmentForm).to.have.css('border-color', 'rgb(220, 53, 69)');
		});
	});
	it('TC18: Validate No registration with invalid deparment (empty)', () => {
		WebTables.addNewPeople();
		WebTables.registrationSubmit();
		WebTables.typeFirstname('ValidFirstName');
		WebTables.typeLastname('ValidLastName');
		WebTables.typeUserAge('27');
		WebTables.typeSalary('Invalid');
		WebTables.typeUserEmail('Valid@email.com');
		WebTables.registrationSubmit();
		WebTables.get.registerForm().should('be.visible');
		WebTables.get.department().then(deparmentForm => {
			expect(deparmentForm).to.have.css('border-color', 'rgb(220, 53, 69)');
		});
	});
	it.only('TC19: Validate list of coincidences when use the search bar', () => {
		WebTables.addMultiplesUsers();
		WebTables.get.firstRowTable().then(FirstRow => {
			expect(FirstRow).not.contain('Maria');
		});
		WebTables.typeSearchBox('Maria');
		WebTables.get.firstRowTable().then(FirstRow => {
			expect(FirstRow).to.contain('Maria');
		});
	});
});

import { WebTables } from '@pages/webtables.Page';
import { removeLogs } from '@helper/RemoveLogs';
removeLogs();
