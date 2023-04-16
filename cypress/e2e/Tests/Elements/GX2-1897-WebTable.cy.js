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
		cy.get('[id="registration-form-modal"]').should('have.text', 'Registration Form');
		webtable.elements.modal().should('exist');
		webtable.elements.nameInput().should('exist').and('be.empty');
		webtable.elements.lastnameInput().should('exist').and('be.empty');
		webtable.elements.mailInput().should('exist').and('be.empty');
		webtable.elements.ageInput().should('exist').and('be.empty');
		webtable.elements.salaryInput().should('exist').and('be.empty');
		webtable.elements.departmentInput().should('exist').and('be.empty');
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
		webtable.addUsertoTable(info.name, info.surname, info.mail, info.age, info.salary, info.department);
		webtable.clickSubmit();
		cy.get('div.rt-tr.-even')
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

	it('GX2-1898 | TC3: Validate that a user can be deleted with the “trash” icon', () => {
		cy.get('div.rt-tr.-odd')
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
		cy.get('div.rt-tr.-odd')
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
	it('GX2-1898 | TC4: Validate that the user can search for a specific name in the table using the searchbox', () => {
		for (let i = 0; i <= 1; i++) {
			cy.get('div.rt-tr.-odd')
				.eq(i)
				.children()
				.first()
				.invoke('text')
				.then(names => {
					cy.log(names);
					users.push(names);
				});
		}
		cy.wrap(users)
			.should('have.length', 2)
			.then(() => {
				let rn = Cypress._.random(0, 1);
				webtable.searchForname(users[rn]);
				cy.get('[class="rt-tr -odd"]')
					.children()
					.first()
					.invoke('text')
					.then(name => {
						expect(users[rn]).to.equal(name);
					});
			});
	});

	it('GX2-1898 | TC5: Validate that the user can edit information with the “pen” icon.', () => {
		let namebefore;
		let nameafter;

		cy.get('div.rt-tr.-odd')
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
				cy.get('div.rt-tr.-odd')
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
	it('GX2-1898 | TC6: Validate that the user go to the following page by clicking the “next” button.', () => {
		webtable.elements.nextbutton().should('not.be.enabled');
		cy.get('[value="1"]').should('have.value', 1);
		cy.get('[class="-totalPages"]')
			.invoke('text')
			.then(totalpages => {
				expect(totalpages).to.exist;
			});

		for (let i = 0; i <= 7; i++) {
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
			webtable.addUsertoTable(info.name, info.surname, info.mail, info.age, info.salary, info.department);
			webtable.clickSubmit();
		}

		cy.get('[class="-totalPages"]')
			.invoke('text')
			.then(totalpages => {
				expect(totalpages).to.exist;
			});
		webtable.elements.nextbutton().should('not.be.disabled');
		webtable.clickNext();
		cy.get('[value="2"]').should('have.value', 2);
	});
	it('GX2-1898 | TC7: Validate that the user goes back to the previous page by clicking the “Previous” button.', () => {
		cy.visit('https://demoqa.com/webtables');
		webtable.elements.previousbutton().should('not.be.enabled');
		cy.get('[value="1"]').should('have.value', 1);

		for (let i = 0; i <= 7; i++) {
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
			webtable.addUsertoTable(info.name, info.surname, info.mail, info.age, info.salary, info.department);
			webtable.clickSubmit();
		}

		webtable.elements.nextbutton().should('not.be.disabled');
		webtable.clickNext();
		cy.get('[value="2"]').should('have.value', 2);
		webtable.clickPrevious();
		cy.get('[value="1"]').should('have.value', 1);
	});
	it.only('GX2-1898 | TC8: Validate that the user can sort the names alphabetically with the button “First Name”', () => {
		const SortedinTest = [];
		const sortedfromTable = [];
		const namesArray = [0, 7, 14, 21, 28, 35, 42, 49, 56, 63];
		cy.visit('https://demoqa.com/webtables');
		webtable.elements.headerbuttons().should('exist');

		for (let i = 0; i <= 6; i++) {
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
			webtable.addUsertoTable(info.name, info.surname, info.mail, info.age, info.salary, info.department);
			webtable.clickSubmit();
		}
		for (let i = 0; i <= namesArray.length - 1; i++) {
			cy.get('div.rt-td')
				.eq(namesArray[i])
				.invoke('text')
				.then(names => {
					SortedinTest.push(names);
					SortedinTest.sort();
				});
		}
		webtable.clickOnfirstName();
		for (let i = 0; i <= namesArray.length - 1; i++) {
			cy.get('div.rt-td')
				.eq(namesArray[i])
				.invoke('text')
				.then(names => {
					sortedfromTable.push(names);
				});
		}

		cy.wrap(sortedfromTable).then(() => {
			expect(sortedfromTable).to.deep.equal(SortedinTest);
		});
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
