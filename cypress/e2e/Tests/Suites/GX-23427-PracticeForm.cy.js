import { removeLogs } from '@helper/RemoveLogs';
removeLogs();
import dayjs from 'dayjs';
import { form } from '@pages/Forms/GX-23427-PracticeForm.page';

describe('US GX-23427 | ToolsQA | Forms | Practice Form', () => {
	beforeEach('PRC: Usuario debe ubicarse en Practice Form', () => {
		cy.visit('https://demoqa.com/automation-practice-form');
		cy.url().should('contain', 'automation-practice-form');
	});

	it.only('23428 | TC01: Validar enviar formulario al ingresar datos válidos requeridos', () => {
		cy.fixture('data/GX-23427-PracticeForm.json').then(the => {
			form.typeFirstname(the.firstname);
			form.typeLastname(the.lastname);
			form.selectGender();
			form.typeMobileNumber(the.phone);
			form.submitForm();
			cy.get('.modal-content').should('be.visible');
		});
	});

	it('23428 | TC02: Validar NO mostrar pop-up con información al enviar formulario con datos insuficientes', () => {
		cy.get();
	});

	it('23428 | TC03: Validar mostrar imagen en pop-up al enviar formulario con datos válidos requeridos', () => {
		cy.get();
	});

	it('23428 | TC04: Validar mostrar fecha actual en el birthdate input como fecha predeterminada', () => {
		cy.get();
	});

	it('23428 | TC05: Validar NO enviar formulario al ingresar email sin formato, nombres null, teléfono menor a diez dígitos o género no seleccionado', () => {
		cy.get();
	});

	it('23428 | TC06: Validar NO enviar formulario cuando email no contiene @', () => {
		cy.get();
	});

	it('23428 | TC07: Validar NO enviar formulario cuando email no contiene 1 caracter alfanumérico antes del @', () => {
		cy.get();
	});

	it('23428 | TC08: Validar NO enviar formulario cuando email no contiene "punto" luego de 1 caracter alfanumérico después del @', () => {
		cy.get();
	});

	it('23428 | TC09: Validar NO enviar formulario cuando email no contiene 2 caracteres alfanuméricos después del "punto"', () => {
		cy.get();
	});
});
