import { removeLogs } from '@helper/RemoveLogs';
removeLogs();
import { faker } from '@faker-js/faker';
import dayjs from 'dayjs';
import { form } from '@pages/Forms/GX-23427-PracticeForm.page';
import { email, files, field } from '../../../fixtures/data/GX-23427-PracticeForm.json';

describe('US GX-23427 | ToolsQA | Forms | Practice Form', () => {
	beforeEach('PRC: Usuario debe ubicarse en Practice Form', () => {
		cy.visit('https://demoqa.com/automation-practice-form');
	});

	it.only('23428 | TC01: Validar enviar formulario al ingresar datos válidos', () => {
		//valido los input texts
		const fakeFirstname = faker.name.firstName();
		const fakeLastname = faker.name.lastName();
		const fakePhone = faker.datatype.number({ min: 1100000000, max: 1199999999 });
		const fakeAddress = faker.address.streetAddress();
		const fakeEmail = faker.internet.email();
		form.typeFirstname(fakeFirstname);
		form.typeLastname(fakeLastname);
		form.typeEmail(fakeEmail);
		form.typeMobileNumber(fakePhone);
		form.typeAddress(fakeAddress);

		//#################
		//elije genero de manera aleatoria
		const randomGender = Cypress._.random(0, 2);
		form.selectGender(randomGender);

		//fecha por defecto del input-date sea igual a fecha actual
		const currentDate = dayjs().format('DD/MMM/YYYY').split('/').join(' ');
		form.currentDateSelector().should('be.equal', currentDate);

		//valida que se despliegue un menu al clickear sobre el input-date
		form.get
			.datepicker()
			.click()
			.then(t => {
				cy.wrap(t).get('.react-datepicker').should('be.visible');
				cy.wrap(t).get('.react-datepicker').click();
			});

		//seleccion de materias random
		const matching = faker.random.alpha({ count: 1, casing: 'lower', bannedChars: ['f', 'j', 'k', 'ñ', 'q', 'w', 'x', 'z'] });
		form.subjectsSelector(matching);

		//checkbox
		const randomCheck = Cypress._.random(0, 2);
		form.hobbieChecker(randomCheck);

		//agregar archivo
		form.uploadFile(files.upex_logo);

		//elige ciudad y estado
		const randomLocationByState = Cypress._.random(0, 3);
		form.stateSelector(randomLocationByState);
		form.citySelector();

		//#################
		form.submitForm();

		cy.get('.modal-content').should('be.visible');
		cy.get('tr').eq(1).should('contain', fakeFirstname);
		cy.get('tr').eq(1).should('contain', fakeLastname);
		cy.get('tr').eq(2).should('contain', fakeEmail);
		form.get
			.genderTag()
			.eq(randomGender)
			.invoke('text')
			.then(element => {
				cy.get('tr').eq(3).should('contain', element);
			});

		cy.get('tr').eq(4).should('contain', fakePhone);

		//tomo el valor de los subjects
		cy.get('[class*="subjects-auto-complete__multi-value__label"]')
			.invoke('text')
			.then(label => {
				cy.get('tr').eq(6).should('contain', label);
			});

		form.get
			.checkboxTagnames()
			.eq(randomCheck)
			.invoke('text')
			.then(element => {
				cy.get('tr').eq(7).should('contain', element);
			});

		cy.get('tr').eq(8).should('contain', 'upexlogo');
		cy.get('tr').eq(9).should('contain', fakeAddress);

		//validate state on popup
		cy.get('.css-1uccc91-singleValue')
			.eq(0)
			.invoke('text')
			.then(txt => {
				cy.get('tr').eq(10).should('contain', txt);
			});

		//validate city on popup
		cy.get('.css-1uccc91-singleValue')
			.eq(1)
			.invoke('text')
			.then(txt => {
				cy.get('tr').eq(10).should('contain', txt);
			});

		//valido color de bordes con datos válidos
		form.get.firstname().should('have.css', 'border-color', field.greenBorder);
		form.get.lastname().should('have.css', 'border-color', field.greenBorder);
		form.get.email().should('have.css', 'border-color', field.greenBorder);
		form.get.genderTag().eq(randomGender).should('have.css', 'color', field.greenBorder);
		form.get.mobilenumber().should('have.css', 'border-color', field.greenBorder);
		form.get.datepicker().should('have.css', 'border-color', field.greenBorder);
		form.get.checkboxTagnames().eq(randomCheck).should('have.css', 'color', field.greenBorder);
		form.get.address().should('have.css', 'border-color', field.greenBorder);
	});

	it('23428 | TC02: Validar NO enviar formulario al enviar formulario con datos inválidos', () => {
		cy.get();
	});

	it('23428 | TC03: Validar NO enviar formulario al ingresar email sin formato, nombres null, teléfono menor a diez dígitos o género no seleccionado', () => {
		cy.get();
	});

	it('23428 | TC04: Validar NO enviar formulario cuando email no contiene @', () => {
		cy.get();
	});

	it('23428 | TC05: Validar NO enviar formulario cuando email no contiene 1 caracter alfanumérico antes del @', () => {
		cy.get();
	});

	it('23428 | TC06: Validar NO enviar formulario cuando email no contiene "punto" luego de 1 caracter alfanumérico después del @', () => {
		cy.get();
	});

	it('23428 | TC07: Validar NO enviar formulario cuando email no contiene 2 caracteres alfanuméricos después del "punto"', () => {
		cy.get();
	});
});
