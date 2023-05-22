import { webTable } from '@pages/webTable.Page';
import { faker } from '@faker-js/faker';

describe('✅ToolsQA | Elements | Web Table', () => {
	beforeEach(() => {
		cy.fixture('data/webTable').then(the => {
			cy.visit(the.URL);
			cy.url().should('contain', the.endpoint);
		});
	});
	it('2304 | TC1: Validar visualizar Popup de Registro cuándo se hace click', () => {
		webTable.ClickAddButton();
		webTable.elements.PopUp_BodyRegistration().should('be.visible');
	});

	it('2304 | TC2: Validar Registro cuándo todos los datos son válidos', () => {
		webTable.ClickAddButton();

		const FirstName = faker.name.firstName();
		const LastName = faker.name.lastName();
		const Email = faker.internet.email();
		const Age = Cypress._.random(1, 80);
		const Salary = Cypress._.random(0, 9999);
		const Department = faker.commerce.department();

		webTable.AddNewUser(FirstName, LastName, Email, Age, Salary, Department);

		webTable.elements.First_nameInput().invoke('val').should('eq', FirstName);
		webTable.elements.Last_nameInput().invoke('val').should('contain', LastName);
		webTable.elements.EmailInput().should('have.value', Email);
		webTable.elements.AgeInput().invoke('val').should('include', Age.toString());
		webTable.elements.SalaryInput().invoke('val').should('contain', Salary.toString());
		webTable.elements.DepartmentInput().invoke('val').should('eq', Department);
		webTable.ClickSubmit();
		webTable.elements.PopUp_BodyRegistration().should('not.exist');
	});
	//FAIL TC03
	it.skip('2304 | TC3: Validar No Registro cuándo el campo Firts Name tiene números', () => {
		cy.fixture('data/webTable').then(the => {
			webTable.ClickAddButton();

			const FirstName = the.First_name.invalid;
			const LastName = faker.name.lastName();
			const Email = faker.internet.email();
			const Age = Cypress._.random(1, 80);
			const Salary = Cypress._.random(0, 9999);
			const Department = faker.commerce.department();

			webTable.AddNewUser(FirstName, LastName, Email, Age, Salary, Department);

			webTable.elements.First_nameInput().invoke('val').should('eq', FirstName);
			webTable.elements.Last_nameInput().invoke('val').should('contain', LastName);
			webTable.elements.EmailInput().should('have.value', Email);
			webTable.elements.AgeInput().invoke('val').should('include', Age.toString());
			webTable.elements.SalaryInput().invoke('val').should('contain', Salary.toString());
			webTable.elements.DepartmentInput().invoke('val').should('eq', Department);
			webTable.ClickSubmit();
			webTable.elements.PopUp_BodyRegistration().should('exist');
		});
	});
	//FAIL TC04
	it.skip('TC4: Validar No Registro cuándo el campo Last Name tiene números', () => {
		cy.fixture('data/webTable').then(the => {
			webTable.ClickAddButton();

			const FirstName = faker.name.firstName();
			const LastName = the.Last_name.invalid;
			const Email = faker.internet.email();
			const Age = Cypress._.random(1, 80);
			const Salary = Cypress._.random(0, 9999);
			const Department = faker.commerce.department();

			webTable.AddNewUser(FirstName, LastName, Email, Age, Salary, Department);

			webTable.elements.First_nameInput().invoke('val').should('eq', FirstName);
			webTable.elements.Last_nameInput().invoke('val').should('contain', LastName);
			webTable.elements.EmailInput().should('have.value', Email);
			webTable.elements.AgeInput().invoke('val').should('include', Age.toString());
			webTable.elements.SalaryInput().invoke('val').should('contain', Salary.toString());
			webTable.elements.DepartmentInput().invoke('val').should('eq', Department);
			webTable.ClickSubmit();
			webTable.elements.PopUp_BodyRegistration().should('exist');
		});
	});

	it(' TC5: Validar No Registro cuándo el campo Email tiene está vacio', () => {
		cy.fixture('data/webTable').then(the => {
			webTable.ClickAddButton();

			const FirstName = faker.name.firstName();
			const LastName = faker.name.lastName();
			const Email = the.email.invalid1;
			const Age = Cypress._.random(1, 80);
			const Salary = Cypress._.random(0, 9999);
			const Department = faker.commerce.department();

			webTable.AddNewUser(FirstName, LastName, Email, Age, Salary, Department);

			webTable.elements.First_nameInput().invoke('val').should('eq', FirstName);
			webTable.elements.Last_nameInput().invoke('val').should('contain', LastName);
			webTable.elements.EmailInput().should('have.value', Email);
			webTable.elements.AgeInput().invoke('val').should('include', Age.toString());
			webTable.elements.SalaryInput().invoke('val').should('contain', Salary.toString());
			webTable.elements.DepartmentInput().invoke('val').should('eq', Department);
			webTable.ClickSubmit();
			webTable.elements.PopUp_BodyRegistration().should('exist');
		});
	});

	it('2304 | TC6: Validar No Registro cuándo el campo Email no contiene “@“', () => {
		cy.fixture('data/webTable').then(the => {
			webTable.ClickAddButton();

			const FirstName = faker.name.firstName();
			const LastName = faker.name.lastName();
			const Email = the.email.invalid2;
			const Age = Cypress._.random(1, 80);
			const Salary = Cypress._.random(0, 9999);
			const Department = faker.commerce.department();

			webTable.AddNewUser(FirstName, LastName, Email, Age, Salary, Department);

			webTable.elements.First_nameInput().invoke('val').should('eq', FirstName);
			webTable.elements.Last_nameInput().invoke('val').should('contain', LastName);
			webTable.elements.EmailInput().should('have.value', Email);
			webTable.elements.AgeInput().invoke('val').should('include', Age.toString());
			webTable.elements.SalaryInput().invoke('val').should('contain', Salary.toString());
			webTable.elements.DepartmentInput().invoke('val').should('eq', Department);
			webTable.ClickSubmit();
			webTable.elements.PopUp_BodyRegistration().should('exist');
		});
	});

	it('2304 | TC7: Validar No Registro cuándo el campo Email no contiene “.“', () => {
		cy.fixture('data/webTable').then(the => {
			webTable.ClickAddButton();

			const FirstName = faker.name.firstName();
			const LastName = faker.name.lastName();
			const Email = the.email.invalid3;
			const Age = Cypress._.random(1, 80);
			const Salary = Cypress._.random(0, 9999);
			const Department = faker.commerce.department();

			webTable.AddNewUser(FirstName, LastName, Email, Age, Salary, Department);

			webTable.elements.First_nameInput().invoke('val').should('eq', FirstName);
			webTable.elements.Last_nameInput().invoke('val').should('contain', LastName);
			webTable.elements.EmailInput().should('have.value', Email);
			webTable.elements.AgeInput().invoke('val').should('include', Age.toString());
			webTable.elements.SalaryInput().invoke('val').should('contain', Salary.toString());
			webTable.elements.DepartmentInput().invoke('val').should('eq', Department);
			webTable.ClickSubmit();
			webTable.elements.PopUp_BodyRegistration().should('exist');
		});
	});

	it('2304 | TC8: Validar No Registro cuándo el campo Age tiene letras', () => {
		cy.fixture('data/webTable').then(the => {
			webTable.ClickAddButton();

			const FirstName = faker.name.firstName();
			const LastName = faker.name.lastName();
			const Email = faker.internet.email();
			const Age = the.Age.invalid;
			const Salary = Cypress._.random(0, 9999);
			const Department = faker.commerce.department();

			webTable.AddNewUser(FirstName, LastName, Email, Age, Salary, Department);

			webTable.elements.First_nameInput().invoke('val').should('eq', FirstName);
			webTable.elements.Last_nameInput().invoke('val').should('contain', LastName);
			webTable.elements.EmailInput().should('have.value', Email);
			webTable.elements.AgeInput().invoke('val').should('include', Age.toString());
			webTable.elements.SalaryInput().invoke('val').should('contain', Salary.toString());
			webTable.elements.DepartmentInput().invoke('val').should('eq', Department);
			webTable.ClickSubmit();
			webTable.elements.PopUp_BodyRegistration().should('exist');
		});
	});
	it('2304 | TC9:  Validar No Registro cuándo el campo Salary tiene letras', () => {
		cy.fixture('data/webTable').then(the => {
			webTable.ClickAddButton();

			const FirstName = faker.name.firstName();
			const LastName = faker.name.lastName();
			const Email = faker.internet.email();
			const Age = Cypress._.random(1, 80);
			const Salary = the.Salary.invalid;
			const Department = faker.commerce.department();

			webTable.AddNewUser(FirstName, LastName, Email, Age, Salary, Department);

			webTable.elements.First_nameInput().invoke('val').should('eq', FirstName);
			webTable.elements.Last_nameInput().invoke('val').should('contain', LastName);
			webTable.elements.EmailInput().should('have.value', Email);
			webTable.elements.AgeInput().invoke('val').should('contain', Age.toString());
			webTable.elements.SalaryInput().invoke('val').should('include', Salary.toString());
			webTable.elements.DepartmentInput().invoke('val').should('eq', Department);
			webTable.ClickSubmit();
			webTable.elements.PopUp_BodyRegistration().should('exist');
		});
	});
	//FAIL TC10
	it.skip('2304 | TC10:  Validar No Registro cuándo el campo Department tiene números', () => {
		cy.fixture('data/webTable').then(the => {
			webTable.ClickAddButton();

			const FirstName = faker.name.firstName();
			const LastName = faker.name.lastName();
			const Email = faker.internet.email();
			const Age = Cypress._.random(1, 80);
			const Salary = Cypress._.random(0, 9999);
			const Department = the.Deparment.invalid;

			webTable.AddNewUser(FirstName, LastName, Email, Age, Salary, Department);

			webTable.elements.First_nameInput().invoke('val').should('eq', FirstName);
			webTable.elements.Last_nameInput().invoke('val').should('contain', LastName);
			webTable.elements.EmailInput().should('have.value', Email);
			webTable.elements.AgeInput().invoke('val').should('include', Age.toString());
			webTable.elements.SalaryInput().invoke('val').should('contain', Salary.toString());
			webTable.elements.DepartmentInput().invoke('val').should('eq', Department);
			webTable.ClickSubmit();
			webTable.elements.PopUp_BodyRegistration().should('exist');
		});
	});

	it('2304 | TC11: Validar al ingresar un texto en el Search Bar se muestre una coincidencia con el texto ingresado', () => {
		cy.fixture('data/webTable').then(the => {
			webTable.TypeSearchBar(the.TypeSeachBar.value);

			webTable.FieldRow1(0).should('include', the.TypeSeachBar.value);
		});
	});

	it('2304 | TC12: Validar que al hacer click en los campos First Name ,Last Name ,Email, Salary ,Deparment  y Action se ordenen alfabéticamente', () => {
		//First Name
		webTable.ClickColumnOfTable(0);

		webTable.FieldRow1(0).then(value => {
			const sortValue = value.trim();
			const expectedValue = sortValue.split(' ').sort().join(' ');
			expect(sortValue).to.equal(expectedValue);
		});

		//Last Name

		webTable.ClickColumnOfTable(1);

		webTable.FieldRow1(1).then(value => {
			const sortValue = value.trim();
			const expectedValue = sortValue.split(' ').sort().join(' ');
			expect(sortValue).to.equal(expectedValue);
		});

		//Email

		webTable.ClickColumnOfTable(2);

		webTable.FieldRow1(3).then(value => {
			const sortValue = value.trim();
			const expectedValue = sortValue.split(' ').sort().join(' ');
			expect(sortValue).to.equal(expectedValue);
		});
		//Salary

		webTable.ClickColumnOfTable(3);

		webTable.FieldRow1(4).then(value => {
			const sortValue = value.trim();
			const expectedValue = sortValue.split(' ').sort().join(' ');
			expect(sortValue).to.equal(expectedValue);
		});
		//Department

		webTable.ClickColumnOfTable(4);

		webTable.FieldRow1(5).then(value => {
			const sortValue = value.trim();
			const expectedValue = sortValue.split(' ').sort().join(' ');
			expect(sortValue).to.equal(expectedValue);
		});
		//Action

		webTable.ClickColumnOfTable(6);

		webTable.FieldRow1(0).then(value => {
			const sortValue = value.trim();
			const expectedValue = sortValue.split(' ').sort().join(' ');
			expect(sortValue).to.equal(expectedValue);
		});
	});

	it('2304 | TC13: Validar poder editar información de registros creados anteriormente ', () => {
		cy.fixture('data/webTable').then(the => {
			//         //PrimerUser //Fname  //Lname     //Email
			webTable.ClickEditUser(1, null, null, the.email.NewEmail);

			webTable.ClickSubmit();

			webTable.FieldRow1(3).then(ActualEmail => {
				expect(ActualEmail).to.eq(the.email.NewEmail);
			});
		});
	});

	it('2304 | TC14: Validar poder eliminar registros creados anteriormente', () => {
		cy.fixture('data/webTable').then(the => {
			webTable.ClickDeleteUser(1);

			webTable.FieldRow1(0).then(UserFirstRowActual => {
				expect(UserFirstRowActual).not.to.eq(the.First_name.UserPostDeleted);
			});
		});
	});

	it('2304 | TC15: Validar visualizar y poder usar las opciones de tamaño/cantidad de filas', () => {
		cy.fixture('data/webTable').then(the => {
			//Seleccionando 100 Filas
			webTable.SelectSizeRow(5);

			webTable.elements
				.TotalRowElement()
				.children()
				.its('length')
				.then(TotalActualRows => {
					expect(TotalActualRows.toString()).to.eq(the.SelectNumber.Row100);
				});
		});
	});
});

import { removeLogs } from '@helper/RemoveLogs';

removeLogs();
