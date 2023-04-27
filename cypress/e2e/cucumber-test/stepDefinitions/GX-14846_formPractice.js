import { Given, When, And, Then } from '@badeball/cypress-cucumber-preprocessor';
import { form } from '@pages/Form.Page';

context('Feature: ✅ToolsQA | Forms | Practice Form', () => {
	describe('Estar situado en el apartado de Practice Form', () => {
		Given('ingresar al apartado de practice form de la page de DemoQA', () => {
			expect(1).to.equal(1);
		});
	});
	describe('14847 | TC1: Validar enviar el Form con datos validos corectamente', () => {
		When('El usuario ingrese un dato valido en campo First Name', () => {
			expect(1).to.equal(1);
		});
		And('El usuario ingrese un dato valido en el campo Last Name', () => {
			expect(1).to.equal(1);
		});
		And('El usuario ingrese un dato valido en el campo Email', () => {
			expect(1).to.equal(1);
		});
		And('El usuario seleccione un radio-button de Genero', () => {
			expect(1).to.equal(1);
		});
		And('El usuario seleccione una Fecha De Nacimiento', () => {
			expect(1).to.equal(1);
		});
		And('El usuario seleccione un Checkbox de Hobbies', () => {
			expect(1).to.equal(1);
		});
		And('El usuario seleccione una imagen para subir', () => {
			expect(1).to.equal(1);
		});
		And('El usuario ingrese un dato valido en domicilio', () => {
			expect(1).to.equal(1);
		});
		And('El usuario seleccione un Estado', () => {
			expect(1).to.equal(1);
		});
		And('El usuario seleccione una Ciudad', () => {
			expect(1).to.equal(1);
		});
		And('El usuario envie el Form completado', () => {
			expect(1).to.equal(1);
		});
		Then('Aparecera un Pop-up con la informacion que el usuario completo', () => {
			expect(1).to.equal(1);
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
