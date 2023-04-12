import { webtable } from '@pages/GX2-1897-WebTable/WebTable';
import { faker } from '@faker-js/faker';
const users = [];
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
		for (let i = 0; i <= 4; i++) {
			const rn = Cypress._.random(10, 100);
			const info = {
				name: faker.name.firstName(),
				surname: faker.name.lastName(),
				mail: faker.internet.email(),
				age: Cypress._.random(18, 65),
				salary: rn * 1000,
				department: faker.company.bs(),
			};
			users.push(info.name);
			webtable.clickAdd();
			cy.UserSignIn(info.name, info.surname, info.mail, info.age, info.salary, info.department);
			webtable.clickSubmit();
		}
		const rn = Cypress._.random(0, 3);
		webtable.elements.searchbox().should('exist');
		const selectedName = users[rn];
		cy.log(selectedName);
		webtable.typeFirst2letters(selectedName);
		cy.get('div.rt-tr.-odd')
			.first()
			.children()
			.first()
			.invoke('text')
			.then(name => {
				expect(name).to.equal(selectedName);
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
		cy.get('[class="-pageInfo"]')
			.invoke('text')
			.then(pageinfo => {
				expect(pageinfo).to.exist;
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
			users.push(info.name);
			webtable.clickAdd();
			cy.UserSignIn(info.name, info.surname, info.mail, info.age, info.salary, info.department);
			webtable.clickSubmit();
		}
		cy.get('[class="-pageInfo"]')
			.invoke('text')
			.then(pageinfo => {
				expect(pageinfo).to.exist;
			});
		webtable.elements.nextbutton().should('not.be.disabled');
		webtable.clickNext();
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
