/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-argument */

import { webTable } from 'cypress/support/pages/CX3-2839-webTable.page';
import data from 'cypress/fixtures/data/Elements/CX3-2839-webTable.json';

function validateTable(employeeData, tableIndex) {
	webTable.get.tableGroup().contains(data.element.tableCell, employeeData).then(($cell) => {
		const cellIndex = $cell.index();
		webTable.get.tableHead().eq(cellIndex).invoke('text').then((columnHeader) => {
			expect(columnHeader.trim()).to.equal(tableIndex);
		});
	});
}

function validateTableCancel(employeeData) {
	webTable.get.tableGroup().contains(data.element.tableCell, employeeData).should('not.exist');
}

function validateForm() {
	webTable.get.userForm().should('have.class', data.element.userFormValidate);
}

function employee(path) {
	const employee = webTable.employee(path);

	if(path && (path !== data.path.edit)) {
		if(path === data.path.cancel) {
			for (const index in employee) {
				validateTableCancel(employee[index]);
			}
		}else{
			validateForm();
		}
	}else{
		for (const index in employee) {
			validateTable(employee[index] ,data.indexTable[index]);
		}
	}
}

function getEmployee() {
	const employeeData = webTable.getEmployee();
	webTable.get.tableGroup().contains(data.element.tableCell, employeeData).should('exist');
}

function isArraySortedAscendant(array) {
	for (let i = 0; i < array.length - 1; i++) {
		if (!isNaN(parseInt(array[i]))) {
			array[i] = parseInt(array[i]);
			array[i + 1]= parseInt(array[i + 1]);
		}
		if (array[i] >= array[i + 1]) {
			return false;
		}
	}
	return true;
}

function isArraySortedDescending(array) {
	for (let i = 0; i < array.length - 1; i++) {
		if (!isNaN(parseInt(array[i]))) {
			array[i] = parseInt(array[i]);
			array[i + 1]= parseInt(array[i + 1]);
		}
		if (array[i] <= array[i + 1]) {
			return false;
		}
	}
	return true;
}

function organizeTable(column, path) {
	webTable.organizeTable(column);

	const randomColumnValues = [];
	webTable.get.columnData(column).each(($cell) => {
		if($cell.text().trim() !== '') {
			randomColumnValues.push($cell.text().trim());
		}
	}).then(() => {
		let isSorted;
		if(path === 'ascendant') {
			isSorted = isArraySortedAscendant(randomColumnValues);
			organizeTable(column, data.path.descending);
			expect(isSorted).to.be.true;
		}else{
			isSorted = isArraySortedDescending(randomColumnValues);
			expect(isSorted).to.be.true;
		}
	});
};

function deleteEmployee() {
	const id = webTable.deleteEmployee();

	webTable.get.deleteEmployee(id).should('not.exist');
}

function tableLength() {
	webTable.tableLength().then(rowSelect => {
		rowSelect = parseInt(rowSelect);
		webTable.get.tableLength().its('length').then((rowCount) => {
  				expect(rowCount).to.equal(rowSelect);
		});
	});

}

function tablePaginationNext() {
	webTable.tablePaginationNex();
	webTable.get.pagination().should('have.value', '2');
}

function tablePaginationBack() {
	webTable.tablePaginationNex();
	webTable.get.pagination().should('have.value', '2');
	webTable.tablePaginationBack();
	webTable.get.pagination().should('have.value', '1');
}

function tablePageInput() {
	webTable.tablePaginationNex();
	webTable.get.pagination().should('have.value', '2');
}

describe.skip('GX3-2839 | TS: ToolsQA | Elements | Web Table (CRUD)', () => {
	beforeEach('Acceder a https://demoqa.com/webtables', () => {
		cy.visit('https://demoqa.com/webtables');
		cy.url().should('include', 'webtables');
	});
	it('2840 | TC01 Validar poder crear un usuario exitosamente.', () => {
		employee();
	});
	it('2840 | TC02 Validar no poder crear un usuario con "First name" no valido.', () => {
		employee(data.path.firstName);
	});
	it('2840 | TC03 Validar no poder crear un usuario con "Last name" no valido.', () => {
		employee(data.path.lastName);
	});
	it('2840 | TC04 Validar no poder crear un usuario ingresando un email de formato no valido en el campo "Email".', () => {
		employee(data.path.userEmail);
	});
	it('2840 | TC05 Validar no poder crear un usuario ingresando texto en el campo "Age".', () => {
		employee(data.path.age);
	});
	it('2840 | TC06 Validar no poder crear un usuario ingresando texto en el campo "Salary".', () => {
		employee(data.path.salary);
	});
	it('2840 | TC07 Validar no poder crear un usuario ingresando "Department" no valido.', () => {
		employee(data.path.department);
	});
	it('2840 | TC08 Validar poder cancelar la creación de un usuario exitosamente.', () => {
		employee(data.path.cancel);
	});
	it('2840 | TC09 Validar poder buscar un usuario exitosamente.', () => {
		getEmployee();
	});
	it('2840 | TC10 Validar poder editar un usuario exitosamente.', () => {
		employee(data.path.edit);
	});
	it('2840 | TC11 Validar poder eliminar un usuario exitosamente.', () => {
		deleteEmployee();
	});
	it('2840 | TC12 Validar poder organizar los usuarios por "First name" exitosamente.', () => {
		organizeTable(data.path.firstName, data.path.ascendant);
	});
	it('2840 | TC13 Validar poder organizar los usuarios por "Last name" exitosamente.', () => {
		organizeTable(data.path.lastName, data.path.ascendant);
	});
	it('2840 | TC14 Validar poder organizar los usuarios por "Email" exitosamente.', () => {
		organizeTable(data.path.age, data.path.ascendant);
	});
	it('2840 | TC15 Validar poder organizar los usuarios por "Age" exitosamente.', () => {
		organizeTable(data.path.userEmail, data.path.ascendant);
	});
	it('2840 | TC16 Validar poder organizar los usuarios por "Salari" exitosamente.', () => {
		organizeTable(data.path.salary, data.path.ascendant);
	});
	it('2840 | TC17 Validar poder organizar los usuarios por "Department" exitosamente.', () => {
		organizeTable(data.path.department, data.path.ascendant);
	});
	it('2840 | TC18 Validar poder seleccionar la longitud de la tabla exitosamente.', () => {
		tableLength();
	});
	it('2840 | TC19 Validar poder hacer clic botón “Next“ exitosamente.', () => {
		tablePaginationNext();
	});
	it('2840 | TC19 Validar poder hacer clic botón “Previous“ exitosamente.', () => {
		tablePaginationBack();
	});
	it('2840 | TC20 Validar poder seleccionar la paginación de la tabla exitosamente.', () => {
		tablePageInput();
	});
});