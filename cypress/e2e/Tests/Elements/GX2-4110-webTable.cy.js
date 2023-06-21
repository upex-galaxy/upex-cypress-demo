import { web } from '@pages/Elements/GX2-4110-webTables';
import { faker } from '@faker-js/faker';
import { removeLogs } from '@helper/RemoveLogs';

removeLogs();
describe('GX2-4110 | ToolsQA | Elements | Web Table', () => {
	beforeEach('User must be situated in the website', () => {
		cy.visit('/webtables');
	});
	it('4111 | TC1: Validate user Add a register with: First name, Last name, Email, Age, Salary and Department', () => {
		web.get.addBtn().should('be.enabled');
		web.clickAddBtn();
		web.get.userForm().should('exist');
		web.getFormComponents().should('exist');
		web.fillFirstName(faker.name.firstName()).invoke('val').should('be.a', 'string');
		web.fillLastName(faker.name.lastName()).invoke('val').should('be.a', 'string');
		web.fillEmail(faker.internet.email())
			.invoke('val')
			.then(val => {
				expect(val).to.match(/^([a-zA-Z0-9_\-\\.]+)@([a-zA-Z0-9_\-\\.]+)\.([a-zA-Z]{2,5})$/);
			});
		web.fillAge(faker.datatype.number({ min: 18, max: 65 }))
			.invoke('val')
			.then(val => {
				expect(parseInt(val)).to.be.a('number');
			});
		web.fillSalary(faker.datatype.number({ min: 1000, max: 100000 }))
			.invoke('val')
			.then(val => {
				expect(parseInt(val)).to.be.a('number');
			});
		web.fillDepartment(faker.name.jobArea()).invoke('val').should('be.a', 'string');
		web.get.submitBtn().should('be.enabled');
		web.clickSubmitBtn();
		web.get
			.registerList()
			.children()
			.eq(3)
			.within(span => {
				expect(span).not.to.be.empty;
			});
	});
	it('4111 | TC2: Validate the register do not store when user close the registration form', () => {
		web.clickAddBtn();
		web.get.userForm().should('exist');
		web.fillFirstName(faker.name.firstName()).invoke('val').should('be.a', 'string');
		web.fillLastName(faker.name.lastName()).invoke('val').should('be.a', 'string');
		web.fillEmail(faker.internet.email())
			.invoke('val')
			.then(val => {
				expect(val).to.match(/^([a-zA-Z0-9_\-\\.]+)@([a-zA-Z0-9_\-\\.]+)\.([a-zA-Z]{2,5})$/);
			});
		web.fillAge(faker.datatype.number({ max: 100 }))
			.invoke('val')
			.then(val => {
				expect(parseInt(val)).to.be.a('number');
			});
		web.fillSalary(faker.datatype.number({ max: 100000 }))
			.invoke('val')
			.then(val => {
				expect(parseInt(val)).to.be.a('number');
			});
		web.fillDepartment(faker.name.jobArea()).invoke('val').should('be.a', 'string');
		web.clickCloseBtn();
		web.getEmptyRow().should('be.empty');
	});
	it('4111 | TC3: Validate user can filter a register search by field.', () => {
		web.get.searchBox().should('have.attr', 'placeholder', 'Type to search');
		web.get.iconSearch().should('exist');
		
		// type in the search bar just 2 letters of a word to validate the list of coincidences .
		web.get.searchBox().type('al');
		web.get
			.registerList()
			.find('div.rt-td')
			.each($ele => {
				if (/[ A-Za-z]*al/.test($ele.text())) {
					cy.wrap($ele.text()).should('include', 'al', { matchCase: false });
				}
			});
	});
	it('4111 | TC4: Validate the register list is sorted alphabetically when First Name is clicked', () => {
		web.clickFirstNameHeader()
			.should('have.attr', 'class')
			.and('match', /-sort-asc/);

		web.getFirstNameList().then(() => {
			expect(Cypress.env('arrayFirstName')).to.be.equal(Cypress.env('arrayFirstName').sort());
		});
	});
	it('4111 | TC5: Validate the register list is sorted alphabetically when Last Name is clicked', () => {
		web.clickLastNameHeader()
			.should('have.attr', 'class')
			.and('match', /-sort-asc/);

		web.getLastNameList().then(() => {
			expect(Cypress.env('arrayLastName')).to.be.equal(Cypress.env('arrayLastName').sort());
		});
	});
	it('4111 | TC6: Validate the register list is sorted alphabetically when Email is clicked', () => {
		web.clickEmailHeader()
			.should('have.attr', 'class')
			.and('match', /-sort-asc/);

		web.getEmailList().then(() => {
			expect(Cypress.env('arrayEmail')).to.be.equal(Cypress.env('arrayEmail').sort());
		});
	});
	it('4111 | TC7: Validate the register list is sorted from minor to major amount when Salary is clicked', () => {
		web.clickSalaryHeader()
			.should('have.attr', 'class')
			.and('match', /-sort-asc/);

		web.getSalaryList().then(() => {
			expect(Cypress.env('arraySalary')).to.be.equal(Cypress.env('arraySalary').sort((a, b) => b - a));
		});
	});
	it.skip('4111 | TC8: Validate the register list is sorted alphabetically when Active is clicked', () => {
		const sortedList = ['Alden', 'Cierra', 'Kierra'];
		web.clickAction()
			.should('have.attr', 'class')
			.and('match', /-sort-asc/);

		web.getFirstNameList().then(() => {
			expect(Cypress.env('arrayFirstName')).to.be.equal(sortedList);
		});
	});
	it('4111 | TC9: Validate user can edit a register.', () => {
		web.clickEditBtn();
		web.get.registrationForm().should('be.visible');
		web.modifyFirstName();
		web.modifyLastName();
		web.modifyEmail();
		web.clickSubmitBtn();
		web.get.firstNameList().then(text => {
			expect(text.text()).to.equal(Cypress.env('firstNameEdited'));
		});
		web.get.lastNameList().then(text => {
			expect(text.text()).to.equal(Cypress.env('lastNameEdited'));
		});
		web.get.emailList().then(text => {
			expect(text.text()).to.equal(Cypress.env('emailEdited'));
		});
	});
	it('4111 | TC10: Validate user can Remove a register.', () => {
		web.get
			.firstNameList()
			.then(text => {
				Cypress.env('firstName', text.text());
				web.clickDeleteBtn();
			})
			.then(() => {
				cy.get(Cypress.env('firstName')).should('not.exist');
			});
	});
	it('4111 | TC11: Validate user can perform a registers pagination by rows number.', () => {
		const randomRow = Math.floor(Math.random() * 6);
		web.get
			.rowOptions()
			.select(randomRow)
			.invoke('val')
			.then(val => {
				Cypress.env('val', val);
			})
			.then(() => {
				web.get.registerList().children().should('have.length', Cypress.env('val'));
			});
	});
	it('4111 | TC12: Validate user can move between the paginations', () => {
		// select 5 rows
		web.get.rowOptions().select(0);

		// get the number of the first page
		web.getFirstPage();

		// add 3 more register
		web.addNewRegister();
		web.addNewRegister();
		web.addNewRegister();

		// validate nextBtn
		web.clickNextBtn();
		web.get
			.pageInput()
			.invoke('val')
			.then(val => {
				expect(parseInt(val)).to.be.equal(parseInt(Cypress.env('row')) + 1);
			});

		// validate previousBtn
		web.get.previousBtn().should('be.enabled');
		web.clickPreviousBtn();
		web.get
			.pageInput()
			.invoke('val')
			.then(val => {
				expect(parseInt(val)).to.be.equal(parseInt(Cypress.env('row')));
			});

		// validate page field
		web.get.pageInput().type('2{enter}');
		web.get.previousBtn().should('be.enabled');
	});
});
