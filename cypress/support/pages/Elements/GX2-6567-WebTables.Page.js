import { faker } from '@faker-js/faker';
class Webtables {
	elements = {
		addRecordButton: () => cy.get('#addNewRecordButton'),
		inputFirstName: () => cy.get('#firstName'),
		inputLastName: () => cy.get('#lastName'),
		inputEmail: () => cy.get('#userEmail'),
		inputAge: () => cy.get('#age'),
		inputSalary: () => cy.get('#salary'),
		inputDepartment: () => cy.get('#department'),
		submitButton: () => cy.get('#submit'),
		closeButton: () => cy.get('.close'),
		searchBox: () => cy.get('#searchBox'),
		getFillRowCount: () => cy.get('[class*= mr-2]'),
		getEditButton: () => cy.get('[id*= edit-record]'),
		getDeleteButton: () => cy.get('[id*= delete-record]'),
		previousButton: () => cy.get('.-previous .-btn'),
		nextButton: () => cy.get('.-next .-btn'),
		rowsSize: () => cy.get('[class*= -pageSizeOptions] select'),
		getGridCell: () => cy.get('[class= rt-td]'),
		getTable: () => cy.get('[class= rt-tbody]'),
		addRecordForm: () => cy.get('[class=modal-content]'),
		getHeader: () => cy.get('.rt-th'),
		getColumn: () => cy.get('.rt-tr .rt-td:nth-child'),
		getPageNumber: () => cy.get('input[type="number"]'),
		btnPrevious: () => cy.get('div.-previous button.-btn'),
		btnNext: () => cy.get('div.-next button.-btn'),
		getRowsSize: () => cy.get('.rt-tr'),
	};

	randomRecord() {
		const randomName = faker.name.firstName();
		const randomLastName = faker.name.lastName();
		const randomEmail = faker.internet.email();
		const randomAge = faker.datatype.number({ min: 18, max: 100 });
		const randomSalary = faker.datatype.number({ min: 1000, max: 50000 });
		const randomDepartment = faker.word.noun();
		return {
			firstName: randomName,
			lastName: randomLastName,
			email: randomEmail,
			age: randomAge,
			salary: randomSalary,
			department: randomDepartment,
		};
	}

	addNewRecord() {
		const randomData = this.randomRecord();
		this.elements.inputFirstName().type(randomData.firstName);
		this.elements.inputLastName().type(randomData.lastName);
		this.elements.inputAge().type(randomData.age);
		this.elements.inputEmail().type(randomData.email);
		this.elements.inputSalary().type(randomData.salary);
		this.elements.inputDepartment().type(randomData.department);
		return cy.wrap(randomData);
	}

	filterRecord() {
		const arrayData = ['Cierra', 'vega', 39, 'cierra@example.com', 100, 'al', 'kierra', 29, 'leg', 4, 'surance'];
		const randomData = faker.helpers.arrayElement(arrayData);
		this.elements.searchBox().type(randomData);
		return cy.wrap(randomData);
	}

	sortedRecord(columnHeader) {
		// Obtener el índice de la columna seleccionada
		return cy.contains('.rt-th', columnHeader).then(header => {
			const columnIndex = header.index();
			cy.log(columnIndex);
			// Obtener todos los datos de la columna
			const dataInColumn = [];
			return cy
				.get(`.rt-tr .rt-td:nth-child(${columnIndex + 1})`)
				.each(cell => {
					dataInColumn.push(cell.text());
				})
				.then(() => {
					const filteredData = dataInColumn.filter(item => item !== ''); // Filtrar celdas vacías
					const sortedData = [...filteredData].sort(); // Ordenar alfabéticamente (ascendente)
					return { dataInColumn: dataInColumn, sortedData: sortedData };
				});
		});
	}

	selectRecord() {
		let randomGet;
		return this.elements
			.getFillRowCount()
			.then(items => {
				const totalRecord = items.length;
				const randomEdit = Math.floor(Math.random() * totalRecord);
				randomGet = randomEdit;
			})
			.then(() => {
				return randomGet;
			});
	}

	recordEdit() {
		const randomData = this.randomRecord();
		this.elements.inputFirstName().clear().type(randomData.firstName);
		this.elements.inputEmail().clear().type(randomData.email);
		this.elements.inputSalary().type(randomData.salary);
		this.elements.inputDepartment().clear().type(randomData.department);
		return {
			newFirstName: randomData.firstName,
			newEmail: randomData.email,
			newSalary: randomData.salary,
			newDepartment: randomData.department,
		};
	}
	getCurrentData(randomGet) {
		return this.elements
			.getTable()
			.find('[class= rt-tr-group]')
			.eq(randomGet)
			.within(() => {
				const cellTextArray = [];

				for (let i = 0; i < 6; i++) {
					webTables.elements
						.getGridCell()
						.eq(i)
						.invoke('text')
						.then(text => {
							cellTextArray.push(text); // Almacena el valor de la celda en el arreglo
							cy.log(text);
						});
				}
				//return cellTextArray;
				return cy.wrap(cellTextArray);
			});
	}

	selectRecordDelete() {
		let randomGet;
		return this.elements
			.getDeleteButton()
			.then(items => {
				const totalRecord = items.length;
				const randomDelete = Math.floor(Math.random() * totalRecord);
				randomGet = randomDelete;
			})
			.then(() => {
				return randomGet;
			});
	}

	selectRowsSize() {
		const rowsOption = ['5 rows', '10 rows', '20 rows', '25 rows', '50 rows', '100 rows'];
		const randomOption = faker.helpers.arrayElement(rowsOption);
		this.elements.rowsSize().select(randomOption);
		return cy.wrap(randomOption);
	}
}
export const webTables = new Webtables();
