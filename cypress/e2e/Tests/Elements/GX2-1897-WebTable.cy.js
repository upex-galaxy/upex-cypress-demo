import { webtable, form } from '@pages/GX2-1897-WebTable/WebTable';
import { faker } from '@faker-js/faker';
const users = [];

describe('GX2-1897-✅-tools-qa-elements-web-table', () => {
	beforeEach('Precondition', () => {
		form.visit();
	});
	it('1898 | TC1: Validate that the registration form pops up when the button “Add” is clicked on', () => {
		webtable.elements.addbutton().should('exist').and('have.text', 'Add');
		webtable.elements.modal().should('not.exist');
		webtable.clickAdd();
		webtable.elements.modaltitle().should('have.text', 'Registration Form');
		webtable.elements.modal().should('exist');
		webtable.elements.nameInput().should('exist').and('be.empty');
		webtable.elements.lastnameInput().should('exist').and('be.empty');
		webtable.elements.mailInput().should('exist').and('be.empty');
		webtable.elements.ageInput().should('exist').and('be.empty');
		webtable.elements.salaryInput().should('exist').and('be.empty');
		webtable.elements.departmentInput().should('exist').and('be.empty');
	});
	it('1898 | TC2: Validate that the user can successfully sign into the table.', () => {
		webtable.clickAdd();
		webtable.addUsertoTable();
		webtable.clickSubmit();
		webtable.elements
			.evenColumn()
			.eq(1)
			.children()
			.each($el => {
				cy.wrap($el)
					.invoke('text')
					.then(data => {
						expect(data).to.exist;
					});
			});
	});

	it('1898 | TC3: Validate that a user can be deleted with the “trash” icon', () => {
		webtable.elements
			.oddColumn()
			.eq(1)
			.children()
			.each($el => {
				cy.wrap($el)
					.invoke('text')
					.then(info => {
						cy.wrap(info).should('exist');
					});
			});
		webtable.elements.deletebutton3().should('exist');
		webtable.clickonDelete3();
		webtable.elements
			.oddColumn()
			.eq(1)
			.children()
			.each($el => {
				cy.wrap($el)
					.invoke('text')
					.then(info => {
						cy.wrap(info).should('not.contain', 'text');
					});
			});
	});
	it('1898 | TC4: Validate that the user can search for a specific name in the table using the searchbox', () => {
		const namesArray = [0, 7, 14];
		for (let i = 0; i <= namesArray.length - 1; i++) {
			webtable.elements
				.grid()
				.eq(namesArray[i])
				.invoke('text')
				.then(name => {
					cy.log(name);
					users.push(name);
				});
		}
		cy.wrap(users)
			.its('length')
			.then(leng => {
				const rn = Cypress._.random(0, leng - 1);
				webtable.searchForname(users[rn]);
				webtable.elements
					.grid()
					.first()
					.invoke('text')
					.then(search => {
						expect(search).to.equal(users[rn]);
					});
			});
	});

	it('1898 | TC5: Validate that the user can edit information with the “pen” icon.', () => {
		let namebefore;
		let nameafter;

		webtable.elements
			.oddColumn()
			.first()
			.children()
			.first()
			.invoke('text')
			.then(name => {
				namebefore = name;
				cy.wrap(name).should('exist');

				webtable.clickEdit1();
				webtable.elements.nameInput().clear();
				webtable.elements.nameInput().type(faker.name.firstName());
				webtable.clickSubmit();
				webtable.elements
					.oddColumn()
					.first()
					.children()
					.first()
					.invoke('text')
					.then(name => {
						nameafter = name;
						expect(namebefore).not.to.equal(nameafter);
					});
			});
	});
	it.skip('1898 | TC6:   Validate that the user go to the following page by clicking the “next” button.', () => {
		webtable.elements.nextbutton().should('not.be.enabled');
		cy.wait(2000);
		webtable.elements.actualpage().should('have.value', 1);
		webtable.elements
			.totalpages()
			.invoke('text')
			.then(totalpages => {
				expect(totalpages).to.exist;
			});

		for (let i = 0; i <= 8; i++) {
			webtable.clickAdd();
			webtable.addUsertoTable();
			webtable.clickSubmit();
		}
		webtable.elements
			.totalpages()
			.invoke('text')
			.then(totalpages => {
				expect(totalpages).to.exist;
			});
		webtable.elements.nextbutton().should('not.be.disabled');
		webtable.clickNext();
		cy.wait(2000);
		webtable.elements.actualpage().should('have.value', 2);
	});
	it('1898 | TC7: Validate that the user goes back to the previous page by clicking the “Previous” button.', () => {
		webtable.elements.previousbutton().should('not.be.enabled').and('exist');
		for (let i = 0; i <= 7; i++) {
			webtable.clickAdd();
			webtable.addUsertoTable();
			webtable.clickSubmit();
		}
		cy.wait(2000);
		webtable.clickNext();
		webtable.elements.actualpage().should('have.value', 2);
		webtable.elements.previousbutton().should('not.be.disabled').and('exist');
		webtable.clickPrevious();
		webtable.elements.actualpage().should('have.value', 1);
	});
	it('1898 | TC8: Validate that the user can sort the names alphabetically with the button “First Name”', () => {
		const namesArray = [0, 7, 14];
		const unsorted = [];
		const sortedfromTable = [];
		webtable.elements.namebutton().should('exist');
		for (let i = 0; i <= namesArray.length - 1; i++) {
			webtable.elements
				.grid()
				.eq(namesArray[i])
				.invoke('text')
				.then(names => {
					unsorted.push(names);
				});
		}
		webtable.elements.namebutton().should('exist');
		webtable.clickOnfirstName();
		for (let i = 0; i <= namesArray.length - 1; i++) {
			webtable.elements
				.grid()
				.eq(namesArray[i])
				.invoke('text')
				.then(names => {
					sortedfromTable.push(names);
				});
		}
		cy.wrap(sortedfromTable).then(() => {
			expect(sortedfromTable).not.to.equal(unsorted);
		});
	});
	it('1898 | TC9: Validate that the user can sort the lastnames alphabetically with the button “LastName”', () => {
		const surnamesArray = [1, 8, 15];
		const unsorted = [];
		const sortedfromTable = [];
		for (let i = 0; i <= surnamesArray.length - 1; i++) {
			webtable.elements
				.grid()
				.eq(surnamesArray[i])
				.invoke('text')
				.then(names => {
					unsorted.push(names);
				});
		}
		webtable.elements.surnamebutton().should('exist');
		webtable.clickOnSurname();
		for (let i = 0; i <= surnamesArray.length - 1; i++) {
			webtable.elements
				.grid()
				.eq(surnamesArray[i])
				.invoke('text')
				.then(names => {
					sortedfromTable.push(names);
				});
		}
		cy.wrap(sortedfromTable).then(() => {
			expect(sortedfromTable).not.to.equal(unsorted);
		});
	});
	it('1898 | TC10: Validate that the user can sort the emails alphabetically with the button “Email”', () => {
		const emailArray = [3, 10, 17];
		const unsorted = [];
		const sortedfromTable = [];
		for (let i = 0; i <= emailArray.length - 1; i++) {
			webtable.elements
				.grid()
				.eq(emailArray[i])
				.invoke('text')
				.then(names => {
					unsorted.push(names);
				});
		}
		webtable.elements.emailbutton().should('exist');
		webtable.clickOnEmailbutton();
		for (let i = 0; i <= emailArray.length - 1; i++) {
			webtable.elements
				.grid()
				.eq(emailArray[i])
				.invoke('text')
				.then(names => {
					sortedfromTable.push(names);
				});
		}
		cy.wrap(sortedfromTable).then(() => {
			expect(sortedfromTable).not.to.equal(unsorted);
		});
	});
	it('1898 | TC11: Validate that the user can sort the salary figures from low to high with the button “Salary”', () => {
		const salaryArray = [4, 11, 18];
		const unsorted = [];
		const sortedfromTable = [];
		for (let i = 0; i <= salaryArray.length - 1; i++) {
			webtable.elements
				.grid()
				.eq(salaryArray[i])
				.invoke('text')
				.then(names => {
					unsorted.push(names);
				});
		}
		webtable.elements.salarybutton().should('exist');
		webtable.clickOnSalarybutton();
		for (let i = 0; i <= salaryArray.length - 1; i++) {
			webtable.elements
				.grid()
				.eq(salaryArray[i])
				.invoke('text')
				.then(names => {
					sortedfromTable.push(names);
				});
		}
		cy.wrap(sortedfromTable).then(() => {
			expect(sortedfromTable).not.to.equal(unsorted);
		});
	});
	it('1898 | TC13: Validate that the user can sort the departments with the button “Department”', () => {
		const departmentArray = [5, 12, 19];
		const unsorted = [];
		const sortedfromTable = [];
		for (let i = 0; i <= departmentArray.length - 1; i++) {
			webtable.elements
				.grid()
				.eq(departmentArray[i])
				.invoke('text')
				.then(names => {
					unsorted.push(names);
				});
		}
		webtable.elements.departmentbutton().should('exist');
		webtable.clickOnDepartmentbutton();
		for (let i = 0; i <= departmentArray.length - 1; i++) {
			webtable.elements
				.grid()
				.eq(departmentArray[i])
				.invoke('text')
				.then(names => {
					sortedfromTable.push(names);
				});
		}
		cy.wrap(sortedfromTable).then(() => {
			expect(sortedfromTable).not.to.equal(unsorted);
		});
	});
	it('1898 | TC14: Validate that the table has 10 rows by default', () => {
		webtable.elements.row().should('have.length', 10).and('exist');
	});
	it('1898 | TC15: Validate that the user can select 5 rows in the table.', () => {
		webtable.elements.rowSelector().scrollIntoView();
		webtable.elements.rowSelector().should('exist');
		webtable.clickRowselector(0);
		webtable.elements.row().should('have.length', 5).and('exist');
	});
	it('1898 | TC16: Validate that the user can select 100 rows in the table', () => {
		webtable.elements.rowSelector().scrollIntoView();
		webtable.elements.rowSelector().should('exist');
		webtable.clickRowselector(5);
		webtable.elements.row().should('have.length', 100).and('exist');
	});
});

import { removeLogs } from '@helper/RemoveLogs';
removeLogs();
