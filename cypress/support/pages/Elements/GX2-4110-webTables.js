import { faker } from '@faker-js/faker';
class Web {
	get = {
		addBtn: () => cy.get('#addNewRecordButton'),
		firstName: () => cy.get('#firstName'),
		lastName: () => cy.get('#lastName'),
		email: () => cy.get('#userEmail'),
		age: () => cy.get('#age'),
		salary: () => cy.get('#salary'),
		department: () => cy.get('#department'),
		submitBtn: () => cy.get('button[id="submit"]'),
		userForm: () => cy.get('#userForm'),
		closeBtn: () => cy.get('.close'),
		emptyFirstName: () => cy.get(':nth-child(4) > .rt-tr > :nth-child(1)'),
		emptyLastName: () => cy.get(':nth-child(4) > .rt-tr > :nth-child(2)'),
		emptyAge: () => cy.get(':nth-child(4) > .rt-tr > [style="flex: 40 0 auto; width: 40px; max-width: 40px;"]'),
		emptyEmail: () => cy.get(':nth-child(4) > .rt-tr > :nth-child(4)'),
		emptySalary: () => cy.get(':nth-child(4) > .rt-tr > :nth-child(5)'),
		emptyDepartment: () => cy.get(':nth-child(4) > .rt-tr > :nth-child(6)'),
		searchBox: () => cy.get('#searchBox'),
		iconSearch: () => cy.get('.input-group-append >span'),
		registerList: () => cy.get('.rt-tbody'),
		header: () => cy.get('[role="columnheader"]'),
		editBtn: () => cy.get('[title="Edit"]'),
		deleteBtn: () => cy.get('[title="Delete"]'),
		registrationForm: () => cy.get('.modal-content'),
		firstNameList: () => cy.get('.rt-tbody > :nth-child(1) > .rt-tr > :nth-child(1)'),
		lastNameList: () => cy.get('.rt-tbody > :nth-child(1) > .rt-tr > :nth-child(2)'),
		emailList: () => cy.get('.rt-tbody > :nth-child(1) > .rt-tr > :nth-child(4)'),
		rowOptions: () => cy.get('[aria-label="rows per page"]'),
		nextBtn: () => cy.contains('button', 'Next'),
		previousBtn: () => cy.contains('button', 'Previous'),
		pageInput: () => cy.get('.-pageJump > input'),
	};
	clickAddBtn() {
		this.get.addBtn().click();
	}
	fillFirstName(data) {
		return this.get.firstName().type(data);
	}
	fillLastName(data) {
		return this.get.lastName().type(data);
	}
	fillEmail(data) {
		return this.get.email().type(data);
	}
	fillAge(data) {
		return this.get.age().type(data);
	}
	fillSalary(data) {
		return this.get.salary().type(data);
	}
	fillDepartment(data) {
		return this.get.department().type(data);
	}
	clickSubmitBtn() {
		this.get.submitBtn().click();
	}
	clickCloseBtn() {
		this.get.closeBtn().click();
	}
	getEmptyRow() {
		return (
			this.get.emptyFirstName().invoke('val'),
			this.get.emptyLastName().invoke('val'),
			this.get.emptyAge().invoke('val'),
			this.get.emptyEmail().invoke('val'),
			this.get.emptySalary().invoke('val'),
			this.get.emptyDepartment().invoke('val')
		);
	}
	clickFirstNameHeader() {
		return this.get.header().eq(0).click();
	}
	clickLastNameHeader() {
		return this.get.header().eq(1).click();
	}
	clickEmailHeader() {
		return this.get.header().eq(3).click();
	}
	clickSalaryHeader() {
		return this.get.header().eq(4).click();
	}
	clickDepartmentHeader() {
		return this.get.header().eq(5).click();
	}
	clickAction() {
		return this.get.header().eq(6).click();
	}
	clickEditBtn() {
		this.get.editBtn().eq(0).click();
	}
	clickDeleteBtn() {
		this.get.deleteBtn().eq(0).click();
	}
	clickNextBtn() {
		this.get.nextBtn().click();
	}
	clickPreviousBtn() {
		this.get.previousBtn().click();
	}
	getFormComponents() {
		return this.get.firstName(), this.get.lastName(), this.get.email(), this.get.age(), this.get.salary(), this.get.department();
	}
	getFirstNameList() {
		const arrayFirstName = [];
		return cy
			.get('.rt-tbody > :nth-child(1) > .rt-tr > :nth-child(1)')
			.invoke('text')
			.then(text => {
				arrayFirstName.push(text);
			})
			.then(() => {
				cy.get('.rt-tbody > :nth-child(2) > .rt-tr > :nth-child(1)')
					.invoke('text')
					.then(text => {
						arrayFirstName.push(text);
					});
			})
			.then(() => {
				cy.get('.rt-tbody > :nth-child(3) > .rt-tr > :nth-child(1)')
					.invoke('text')
					.then(text => {
						arrayFirstName.push(text);
						Cypress.env('arrayFirstName', arrayFirstName);
						cy.log(Cypress.env('arrayFirstName'));
					});
			});
	}

	getLastNameList() {
		const arrayLastName = [];
		return cy
			.get('.rt-tbody > :nth-child(1) > .rt-tr > :nth-child(2)')
			.invoke('text')
			.then(text => {
				arrayLastName.push(text);
			})
			.then(() => {
				cy.get('.rt-tbody > :nth-child(2) > .rt-tr > :nth-child(2)')
					.invoke('text')
					.then(text => {
						arrayLastName.push(text);
					});
			})
			.then(() => {
				cy.get('.rt-tbody > :nth-child(3) > .rt-tr > :nth-child(2)')
					.invoke('text')
					.then(text => {
						arrayLastName.push(text);
						Cypress.env('arrayLastName', arrayLastName);
						cy.log(Cypress.env('arrayLastName'));
					});
			});
	}
	getEmailList() {
		const arrayEmail = [];
		return cy
			.get('.rt-tbody > :nth-child(1) > .rt-tr > :nth-child(4)')
			.invoke('text')
			.then(text => {
				arrayEmail.push(text);
			})
			.then(() => {
				cy.get('.rt-tbody > :nth-child(2) > .rt-tr > :nth-child(4)')
					.invoke('text')
					.then(text => {
						arrayEmail.push(text);
					});
			})
			.then(() => {
				cy.get('.rt-tbody > :nth-child(3) > .rt-tr > :nth-child(4)')
					.invoke('text')
					.then(text => {
						arrayEmail.push(text);
						Cypress.env('arrayEmail', arrayEmail);
						cy.log(Cypress.env('arrayEmail'));
					});
			});
	}
	getSalaryList() {
		const arraySalary = [];
		return cy
			.get('.rt-tbody > :nth-child(1) > .rt-tr > :nth-child(5)')
			.invoke('text')
			.then(text => {
				arraySalary.push(parseInt(text));
			})
			.then(() => {
				cy.get('.rt-tbody > :nth-child(2) > .rt-tr > :nth-child(5)')
					.invoke('text')
					.then(text => {
						arraySalary.push(parseInt(text));
					});
			})
			.then(() => {
				cy.get('.rt-tbody > :nth-child(3) > .rt-tr > :nth-child(5)')
					.invoke('text')
					.then(text => {
						arraySalary.push(parseInt(text));
						Cypress.env('arraySalary', arraySalary);
						cy.log(Cypress.env('arraySalary'));
					});
			});
	}
	getDepartmentList() {
		const arrayDepartment = [];
		return cy
			.get('.rt-tbody > :nth-child(1) > .rt-tr > :nth-child(6)')
			.invoke('text')
			.then(text => {
				arrayDepartment.push(text);
			})
			.then(() => {
				cy.get('.rt-tbody > :nth-child(2) > .rt-tr > :nth-child(6)')
					.invoke('text')
					.then(text => {
						arrayDepartment.push(text);
					});
			})
			.then(() => {
				cy.get('.rt-tbody > :nth-child(3) > .rt-tr > :nth-child(6)')
					.invoke('text')
					.then(text => {
						arrayDepartment.push(text);
						Cypress.env('arrayDepartment', arrayDepartment);
						cy.log(Cypress.env('arrayDepartment'));
					});
			});
	}
	modifyFirstName() {
		this.get
			.firstName()
			.clear()
			.type(faker.name.firstName())
			.then(text => {
				Cypress.env('firstNameEdited', text.val());
			});
	}
	modifyLastName() {
		this.get
			.lastName()
			.clear()
			.type(faker.name.lastName())
			.then(text => {
				Cypress.env('lastNameEdited', text.val());
			});
	}
	modifyEmail() {
		this.get
			.email()
			.clear()
			.type(faker.internet.email())
			.then(text => {
				Cypress.env('emailEdited', text.val());
			});
	}
	addNewRegister() {
		this.get.addBtn().click();
		this.get.firstName().type(faker.name.firstName());
		this.get.lastName().type(faker.name.lastName());
		this.get.email().type(faker.internet.email());
		this.get.age().type(faker.datatype.number({ max: 100 }));
		this.get.salary().type(faker.datatype.number({ max: 100000 }));
		this.get.department().type(faker.name.jobArea());
		this.get.submitBtn().click();
	}
	getFirstPage() {
		this.get
			.pageInput()
			.invoke('val')
			.then(val => {
				Cypress.env('row', val);
				cy.log(Cypress.env('row'));
			});
	}
}
export const web = new Web();
