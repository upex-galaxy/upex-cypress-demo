import { faker } from '@faker-js/faker';
let Num = [];

class webTables {
	get = {
		rowsInTable: () => cy.get('[role="rowgroup"] [role="row"]'),
		filledRow: () => cy.get('[role="rowgroup"] [role="row"]:not([class*=padRow])'),
		addButton: () => cy.get('#addNewRecordButton'),
		firstName: () => cy.get('#firstName'),
		lastName: () => cy.get('#lastName'),
		userEmail: () => cy.get('#userEmail'),
		userAge: () => cy.get('#age'),
		salary: () => cy.get('#salary'),
		department: () => cy.get('#department'),
		registrationSubmit: () => cy.get('#submit'),
		dataTable: () => cy.get('[class*=rt-tbody]'),
		registerForm: () => cy.get('#registration-form-modal'),
		searchBox: () => cy.get('#searchBox'),
		rowsTable: () => cy.get('[class*=rt-tr-group]'),
		cells: () => cy.get('[role="gridcell"]'),
		pageSizeOptions: () => cy.get('[class*=pageSizeOptions]'),
		buttonNext: () => cy.contains('.-btn', 'Next'),
		buttonPrevious: () => cy.contains('.-btn', 'Previous'),
		selected: '',
	};
	getRandomValueInColumn(nameColumn) {
		let columnValues = this.getColumnValuesByName(nameColumn);
		let value = [];
		cy.get(columnValues)
			.its('length')
			.then(row => {
				let num = Math.floor(Math.random() * (row - 1) + 1);
				Num.push(num);
				value.push(columnValues[Num]);
			});

		return value;
	}
	getColumvaluesByName(nameColumn) {
		//metodo creado para reducir contenido en el test principal, y convertir email a lowercase porque sort es keysensitive
		let emailValueToLowercase = [];
		const emailColumn = this.getColumnValuesByName(nameColumn);
		cy.get(emailColumn).each(cell => {
			cy.wrap(cell).then(values => {
				emailValueToLowercase.push(values.toLowerCase());
			});
		});
		return emailValueToLowercase;
	}

	getColumnValuesByName(nameColumn) {
		let columnValues = [];
		cy.contains('.rt-th', nameColumn)
			.invoke('index')
			.then(rowIndex => {
				this.get.filledRow().each(row => {
					cy.wrap(row).within(() => {
						this.get
							.cells()
							.eq(rowIndex)
							.then(cell => {
								columnValues.push(cell.text());
							});
					});
				});
			});

		return columnValues;
	}

	addUser({ firstName, lastName, userEmail, Age, salary, department }) {
		this.get.addButton().click();
		firstName && this.get.firstName().type(firstName);
		lastName && this.get.lastName().type(lastName);
		Age && this.get.userAge().type(Age);
		userEmail && this.get.userEmail().type(userEmail);
		salary && this.get.salary().type(salary);
		department && this.get.department().type(department);
		this.get.registrationSubmit().click();
	}
	addMultiplesUsers({ amountOfusers }) {
		for (let index = 0; index <= amountOfusers; index++) {
			const randomFirstName = faker.name.firstName();
			const randomLastName = faker.name.lastName();
			const randomUserEmail = faker.internet.email();
			const randomUserAge = faker.datatype.number({ max: 100 });
			const randomUserSalary = faker.datatype.number({ min: 500 });
			const randomDepartment = faker.commerce.department();

			this.addUser({
				firstName: randomFirstName,
				lastName: randomLastName,
				userEmail: randomUserEmail,
				Age: randomUserAge,
				salary: randomUserSalary,
				department: randomDepartment,
			});
		}
	}
	typeSearchBox(text) {
		this.get.searchBox().type(text);
	}
	clickOnHeaderCell(type) {
		cy.contains('.rt-resizable-header-content', type).click({ force: true });
	}

	clickOnEditButtonByRow({ row }) {
		const rowIndex = row - 1;
		cy.get('[class*=rt-table]').within(() => {
			cy.get('div')
				.parent('[role="gridcell"]')
				.eq(rowIndex)
				.each(() => {
					cy.get('[title="Edit"]').eq(rowIndex).click();
				});
		});
	}
	clickOnDeleteButtonByRow({ row }) {
		const rowIndex = row - 1;
		cy.get('[class*=rt-table]').within(() => {
			cy.get('div')
				.parent('[role="gridcell"]')
				.eq(rowIndex)
				.each(() => {
					cy.get('[title="Delete"]').eq(rowIndex).click();
				});
		});
	}
	getUserDataByRow({ row }) {
		const rowIndex = row - 1;
		const userData = [];
		this.get
			.filledRow()
			.eq(rowIndex)
			.each(cell => {
				cy.wrap(cell).within(() => {
					this.get.cells().each(cellText => {
						userData.push(cellText.text());
					});
				});
			});
		return userData;
	}
	getDataTable() {
		const userData = [];
		this.get.filledRow().each(row => {
			cy.wrap(row).within(() => {
				this.get.cells().each(cell => {
					userData.push(cell.text());
				});
			});
		});
		return userData;
	}
	selectRowForPage({ amountOfRows }) {
		this.get.pageSizeOptions().children().select(amountOfRows);
	}
}

export const WebTables = new webTables();
