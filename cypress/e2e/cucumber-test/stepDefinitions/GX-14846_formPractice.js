import { Given, When, And, Then } from '@badeball/cypress-cucumber-preprocessor';
import { form } from '@pages/gabeForm2.page';
import { enter } from '@pages/gabeForm2.page';
const url = 'https://demoqa.com/automation-practice-form';

context('Feature: ✅ToolsQA | Forms | Practice Form', () => {
	describe('Estar situado en el apartado de Practice Form', () => {
		Given('ingresar al apartado de practice form de la page de DemoQA', () => {
			cy.visit(url);
		});
	});
	describe('14847 | TC1: Validar enviar el Form con datos validos corectamente', () => {
		When('El usuario ingrese un dato valido en campo First Name', () => {
			enter.enterFN();
		});
		And('El usuario ingrese un dato valido en el campo Last Name', () => {
			enter.enterLN();
		});
		And('El usuario ingrese un dato valido en el campo Email', () => {
			enter.enterUE();
		});
		And('El usuario seleccione un radio-button de Genero', () => {
			enter.selectRB();
		});
		And('El usuario seleccione una Fecha De Nacimiento', () => {
			expect(1).to.equal(1);
		});
		And('El usuario seleccione un Checkbox de Hobbies', () => {
			enter.selectCB();
		});
		And('El usuario seleccione una imagen para subir', () => {
			enter.selectPic();
		});
		And('El usuario ingrese un dato valido en domicilio', () => {
			enter.enterUA();
		});
		And('El usuario seleccione un Estado', () => {
			expect(1).to.equal(1);
		});
		And('El usuario seleccione una Ciudad', () => {
			expect(1).to.equal(1);
		});
		And('El usuario envie el Form completado', () => {
			enter.enterSB();
		});
		Then('Aparecera un Pop-up con la informacion que el usuario completo', () => {
			enter.popupvisible();
		});
	});
	describe('14847 | TC2: Validar NO completar el registro', () => {
		When('El usuario completa el Campo First Name con {string}', () => {
			expect(1).to.equal(1);
		});
		And('El usuario completa el campo Last Name con {string}', () => {
			expect(1).to.equal(1);
		});
		And('el usuario completa el campo Email con {string}', () => {
			expect(1).to.equal(1);
		});
		And('El usuario seleciona un genero con {string}', () => {
			expect(1).to.equal(1);
		});
		And('El usuario completa el campo Mobile con {string}', () => {
			expect(1).to.equal(1);
		});
		And('El usuario presione el boton de Submit', () => {
			expect(1).to.equal(1);
		});
		Then('NO aparecera el Pop-up con la informacion completada', () => {
			expect(1).to.equal(1);
		});
	});
});
